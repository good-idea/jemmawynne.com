import * as React from 'react'
import { ShopifyProduct, ShopifySourceProductVariant } from '../../../types'
import { Heading } from '../../../components/Text'
import { HtmlContent } from '../../../components/RichText'
import { formatMoney } from '../../../utils'
import { TitleWrapper, DescriptionWrapper } from '../styled'
import { ShareButton } from './ShareButton'
import { productIsInquiryOnly } from '../../../utils'

interface ProductDescriptionProps {
  product: ShopifyProduct
  currentVariant: ShopifySourceProductVariant
}

export const ProductDescription = ({
  product,
  currentVariant,
}: ProductDescriptionProps) => {
  const isInquiryOnly = productIsInquiryOnly(product)
  return (
    <DescriptionWrapper>
      <TitleWrapper>
        <Heading level={1} mb={3} weight={1} lineHeight="1.1em">
          {product.title}
        </Heading>
        {isInquiryOnly !== true && currentVariant.priceV2 ? (
          <Heading level={1} weight={1} fontStyle="italic" color="body.5">
            {formatMoney(currentVariant.priceV2)}
          </Heading>
        ) : null}
        <ShareButton product={product} />
      </TitleWrapper>

      <HtmlContent html={product?.sourceData?.descriptionHtml} />
    </DescriptionWrapper>
  )
}
