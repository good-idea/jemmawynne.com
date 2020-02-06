import * as React from 'react'
import { NormalizeDiv } from '../styled'
import { ShopifyProduct, ProductVariant } from '../../../types'
import { Header2, Header4 } from '../../../components/Text'
import { HtmlContent } from '../../../components/RichText'
import { formatMoney } from '../../../utils'

interface ProductDescriptionProps {
  product: ShopifyProduct
  currentVariant: ProductVariant
}

export const ProductDescription = ({
  product,
  currentVariant,
}: ProductDescriptionProps) => {
  return (
    <>
      <NormalizeDiv>
        <Header2 weight="xlight" color="grays.0">
          {product.title}
        </Header2>
        <Header4 weight="strong" color="grays.0">
          {formatMoney(currentVariant.sourceData.priceV2)}
        </Header4>
      </NormalizeDiv>
      <NormalizeDiv>
        <HtmlContent content={product.sourceData.descriptionHtml} />
      </NormalizeDiv>
    </>
  )
}