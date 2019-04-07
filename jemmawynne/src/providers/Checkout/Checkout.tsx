import * as React from 'react'
import { Checkout, CheckoutLineItem } from 'Types'
import { useMutation } from 'graphql-hooks'
import {
	ADD_MUTATION,
	CREATE_MUTATION,
	UPDATE_LINE_ITEM_MUTATION,
	APPLY_DISCOUNT_MUTATION,
	REMOVE_DISCOUNT_MUTATION,
} from './mutations'
const { useReducer } = React

interface UserError {
	field: string
	message: string
}

interface Props {
	children: React.ReactNode
}

interface CheckoutState {
	loading: boolean
	isOpen: boolean
	userErrors: UserError[]
	checkout?: Checkout
}

interface AddLineItem {
	variantId: string
	quantity: number
}

interface AddToCartArgs {
	lineItems: AddLineItem[]
	email?: string
	note?: string
}

interface ProviderValue extends CheckoutState {
	openCart: () => void
	closeCart: () => void
	addToCart: (args: AddToCartArgs) => Promise<void>
	updateQuantity: (item: CheckoutLineItem) => (qty: number) => Promise<void>
	applyDiscount: (code: string) => Promise<void>
	removeDiscount: () => Promise<void>
}

const initialState = {
	loading: false,
	isOpen: false,
	userErrors: [],
}

const initialValue = {
	...initialState,
	openCart: () => {},
	closeCart: () => {},
	addToCart: async () => {},
	updateQuantity: () => async () => {},
	applyDiscount: async () => {},
	removeDiscount: async () => {},
}

const CheckoutContext = React.createContext<ProviderValue>(initialValue)

/**
 * Action Types
 */

interface Action {
	type: string
	checkout?: Checkout
	userErrors?: UserError[]
}

const OPEN_CART = 'OPEN_CART'
const CLOSE_CART = 'CLOSE_CART'
const STARTED_REQUEST = 'STARTED_REQUEST'
const FINISHED_REQUEST = 'FINISHED_REQUEST'

const reducer = (state: CheckoutState, action: Action): CheckoutState => {
	switch (action.type) {
		case OPEN_CART:
			return { ...state, isOpen: true }
		case CLOSE_CART:
			return { ...state, isOpen: false }
		case STARTED_REQUEST:
			return { ...state, loading: true }
		case FINISHED_REQUEST:
			const { userErrors, checkout } = action
			return { ...state, userErrors, checkout }
		default:
			return state
	}
}

export const CheckoutProvider = ({ children }: Props) => {
	/**
	 * Hooks setup
	 */
	const [state, dispatch] = useReducer(reducer, initialState)
	const [addMutation] = useMutation(ADD_MUTATION)
	const [createMutation] = useMutation(CREATE_MUTATION)
	const [updateLineItemMutation] = useMutation(UPDATE_LINE_ITEM_MUTATION)
	const [applyDiscountMutation] = useMutation(APPLY_DISCOUNT_MUTATION)
	const [removeDiscountMutation] = useMutation(REMOVE_DISCOUNT_MUTATION)

	const { checkout } = state
	const checkoutId = checkout ? checkout.id : undefined
	/**
	 * Methods
	 */

	const openCart = () => dispatch({ type: OPEN_CART })
	const closeCart = () => dispatch({ type: CLOSE_CART })

	const addToCart = async (args: AddToCartArgs) => {
		const checkoutExists = Boolean(checkout)
		const mutate = checkoutExists ? addMutation : createMutation
		const variables = checkoutExists ? { checkoutId, ...args } : args

		dispatch({ type: STARTED_REQUEST })
		const result = await mutate({
			variables,
		})
		const resultKey = checkoutExists ? 'checkoutLineItemsAdd' : 'checkoutCreate'
		// const { userErrors, checkout } = result.data.checkoutLineItemsAdd
		dispatch({ type: FINISHED_REQUEST, ...result.data[resultKey] })
	}

	const updateQuantity = (item: CheckoutLineItem) => async (quantity: number) => {
		if (!checkout) throw new Error('There is no checkout to update')
		dispatch({ type: STARTED_REQUEST })
		const result = await updateLineItemMutation({
			variables: {
				checkoutId,
				lineItems: [{ id: item.id, variantId: item.variant.id, quantity }],
			},
		})
		dispatch({ type: FINISHED_REQUEST, ...result.data.checkoutLineItemsUpdate })
	}

	const applyDiscount = async (discountCode: string) => {
		dispatch({ type: STARTED_REQUEST })
		const result = await applyDiscountMutation({
			variables: {
				checkoutId,
				discountCode,
			},
		})
		dispatch({ type: FINISHED_REQUEST, ...result.data.checkoutDiscountCodeApplyV2 })
	}

	const removeDiscount = async () => {
		dispatch({ type: STARTED_REQUEST })
		const result = await removeDiscountMutation({
			variables: {
				checkoutId,
			},
		})
		dispatch({ type: FINISHED_REQUEST, ...result.data.checkoutDiscountCodeRemove })
	}

	const value = {
		...state,
		openCart,
		closeCart,
		addToCart,
		updateQuantity,
		applyDiscount,
		removeDiscount,
	}
	return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>
}
