import styled, { css, DefaultTheme } from 'styled-components'

interface WrapperProps {
	theme: DefaultTheme
	active?: boolean
}

export const Wrapper = styled.div`
	${({ theme }: WrapperProps) => `
		width: calc(100% - 4rem);
		max-width: 1200px;
		margin: 0 auto;
		font-family: ${theme.font.family.sans};
	`}
`

export const Nav = styled.div`
	${({ theme }) => css`
		width: calc(100% - 4rem);
		max-width: 1200px;
		margin: 0 auto;
		font-family: ${theme.font.family.sans};
	`}
`

export const ProductGalleryWrapper = styled.div`
	display: flex;
	flex-direction: row-reverse;
`

export const ProductGalleryImage = styled.div`
	flex: 4;
`

export const ProductGalleryThumbnails = styled.div`
	${(props) => css`
		flex: 1;
		padding-right: ${props.theme.layout.spacing.small};
		> button {
			padding: ${props.theme.layout.spacing.small};
		}
	`}
`

export const ProductRelatedWrapper = styled.div`
	${(props: WrapperProps) => css`
		margin: ${props.theme.layout.spacing.large};
	`}
`

/*
  NOTE: consider turning this into a "WithMargin" or "Spaced"
  component that we could use like this:

  <Spaced margin="small">...</Spaced>
  <Spaced margin="small" top="double">...</Spaced>

  would be nice to have a prop for padding too
*/
export const NormalizeDiv = styled.div`
	max-width: ${(props) => (props.width === 'half' ? '50%' : '100%')};
	${(props: WrapperProps) => `
   		margin: ${props.theme.layout.spacing.small};
	`}
`

interface ButtonProps {
	theme: DefaultTheme
	disabled?: boolean
	weight?: 'xlight' | 'light' | 'book' | 'normal' | 'semi' | 'strong'
	background?: string
	color?: string
	family?: string
	transform?: string
}

export const Button = styled.button`
	${({ theme, disabled, background, transform, weight, color, family }: ButtonProps) => css`
		background-color: ${theme.color[background] || theme.color.pink};
		color: ${theme.color[color] || 'inherit'};
		cursor: ${disabled ? 'auto' : 'pointer'};
		display: inline-block;
		font-family: ${theme.font.family.sans};
		font-weight: ${theme.font.weight[weight] || theme.font.weight.strong};
		font-size: ${theme.font.size.h5};
		min-width: 8rem;
		min-height: 2.5rem;
		letter-spacing: 0.03em;
		padding: 0.25rem 0.5rem;
		text-align: center;
		text-transform: uppercase;
		transition: 0.2s;
		padding: ${theme.layout.spacing.small};
		margin: ${theme.layout.spacing.small};
		opacity: ${disabled ? 0.3 : 1};
		pointer-events: ${disabled ? 'none' : 'auto'};
	`}
`

export const ButtonPrimary = styled(Button)``

export const Select = styled.select`
	${(props: WrapperProps) => `
		text-align-last: center;
		height: 50px;
		border: 1px solid #f1f1f1;
		border-radius: 0;
		-webkit-transition: .2s;
		transition: .2s;
		font-size: 1rem;
		cursor: pointer;
		-moz-appearance: none;
		appearance: none;
		-webkit-appearance: none;
		border: none;
		background: none;
		border-radius: 0;
		border: 1px solid #f1f1f1;
		padding: 1rem 2rem;
		font-family: sans-serif;
		option {
			font-family: sans-serif;

		}
	`}
`

export const QuantitySelector = styled.div`
	${(props: WrapperProps) => `
		button {
			text-align-last: center;
			height: 50px;
			border: 1px solid #f1f1f1;
			border-radius: 0;
			-webkit-transition: .2s;
			transition: .2s;
			font-size: .85rem;
			cursor: pointer;
			-moz-appearance: none;
			appearance: none;
			-webkit-appearance: none;
			border: none;
			background: none;
			border-radius: 0;
			border: 1px solid #f1f1f1;
			padding: .5rem 1.2rem;
			font-family: sans-serif;
		}
		input {
			text-align: center;
			width: 109px;
		}
	`}
`

export const QuantitySelectorCart = styled(QuantitySelector)`
	${(props: WrapperProps) => `
		button {
			text-align-last: center;
			height: 2rem;
			border: 1px solid #f1f1f1;
			border-radius: 0;
			-webkit-transition: .2s;
			transition: .2s;
			font-size: .85rem;
			cursor: pointer;
			-moz-appearance: none;
			appearance: none;
			-webkit-appearance: none;
			border: none;
			background: none;
			border-radius: 0;
			border: 1px solid #f1f1f1;
			padding: .5rem .5rem;
			font-family: sans-serif;
		}
		input {
			text-align: center;
			width: 2px;
		}
	`}
`

export const Label = styled.label`
	${(props: WrapperProps) => `
		color: #777;
		color:${props.theme.color.lightGrayBody};
		display: block;
		margin-bottom: ${props.theme.layout.spacing.small};
		-moz-appearance: none;
		appearance: none;
		-webkit-appearance: none;
		border: none;
		background: none;
		border-radius: 0;
	`}
`
