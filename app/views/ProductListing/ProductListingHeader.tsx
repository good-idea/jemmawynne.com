import * as React from 'react'
import { ShopifyCollection } from '../../types'
import { Header2, Header4 } from '../../components/Text'
import { Image } from '../../components/Image'
import { PLPHeader, PLPHeaderInner, PLPText, PLPImage } from './styled'

interface ProductListingHeaderProps {
  collection: ShopifyCollection
}

export const ProductListingHeader = ({
  collection,
}: ProductListingHeaderProps) => {
  const { image, title, description } = collection.sourceData
  const textAlign = image ? 'left' : 'center'
  return (
    <PLPHeader>
      <PLPHeaderInner>
        <PLPText align={textAlign}>
          <Header2>{title}</Header2>
          <Header4 family="serif">{description}</Header4>
        </PLPText>
        {image ? (
          <PLPImage>
            <Image image={image} ratio={1} />
          </PLPImage>
        ) : null}
      </PLPHeaderInner>
    </PLPHeader>
  )
}