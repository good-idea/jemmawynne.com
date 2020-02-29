import * as React from 'react'
import { ShopifyProduct } from '../../types'
import Link from 'next/link'
import { unwindEdges } from '@good-idea/unwind-edges'
import { Heading } from '../Text'
import { Image } from '../Image'
import { formatMoney } from '../../utils'

import { ProductInfo, ProductThumb } from './styled'

interface ProductThumbnail {
  product: ShopifyProduct
  hidePrice?: boolean
}

export const ProductThumbnail = ({ hidePrice, product }: ProductThumbnail) => {
  if (!product) return null
  const { sourceData } = product
  if (!sourceData) return null
  const productImages = product?.sourceData?.images
    ? unwindEdges(
        // @ts-ignore
        product.sourceData.images,
      )[0]
    : []

  const productImage = productImages.length ? productImages[0] : undefined
  const { minVariantPrice, maxVariantPrice } = sourceData.priceRange || {}
  const to = `/products/${product.handle}`
  const hoverImage = productImages.length >= 2 ? productImages[1] : undefined
  return (
    <Link href={to}>
      <a>
        <ProductThumb>
          <Image image={productImage} hoverImage={hoverImage} />
          <ProductInfo>
            <Heading level={4}>{product.title}</Heading>
            {hidePrice ? null : minVariantPrice &&
              minVariantPrice.amount &&
              maxVariantPrice &&
              maxVariantPrice.amount &&
              minVariantPrice.amount !== maxVariantPrice.amount ? (
              <Heading level={5}>
                {formatMoney(minVariantPrice)} - {formatMoney(maxVariantPrice)}
              </Heading>
            ) : maxVariantPrice ? (
              <Heading level={5}>{formatMoney(maxVariantPrice)}</Heading>
            ) : null}
          </ProductInfo>
        </ProductThumb>
      </a>
    </Link>
  )
}
