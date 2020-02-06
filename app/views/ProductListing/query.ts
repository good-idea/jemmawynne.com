import gql from 'graphql-tag'
import { ShopifyCollection } from '../../types'
import { imageFragment } from '../../queries/fragments'

export const COLLECTION_QUERY = gql`
  query CollectionQuery($handle: String!) {
    collectionByHandle(handle: $handle) {
      id
      title
      description
      image {
        ...ImageFragment
      }
      products(first: 200) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 2) {
              edges {
                cursor
                node {
                  ...ImageFragment
                }
              }
            }
          }
        }
      }
    }
  }

  ${imageFragment}
`

export interface CollectionResult {
  collectionByHandle: ShopifyCollection
}