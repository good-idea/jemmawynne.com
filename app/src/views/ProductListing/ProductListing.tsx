import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useQuery } from 'urql'
import { Product } from 'use-shopify'
import { COLLECTION_QUERY, CollectionResult } from './query'
import { ProductGrid } from './styled'
import { ProductListingHeader } from './ProductListingHeader'
import { ItemGrid } from '../../components/ItemGrid'

interface ProductListingProps {
	match: {
		params: {
			handle: string
		}
	}
}

export const ProductListing = ({ match }: ProductListingProps) => {
	const { handle } = match.params
	const variables = { handle }
	const [response] = useQuery<CollectionResult>({
		query: COLLECTION_QUERY,
		variables,
	})
	if (response.fetching || !response.data) return <p>Loading..</p>
	const collection = response.data.collectionByHandle
	const [products] = unwindEdges<Product>(collection.products)
	return (
		<React.Fragment>
			<ProductListingHeader collection={collection} />
			<ItemGrid items={products} />
		</React.Fragment>
	)
}
