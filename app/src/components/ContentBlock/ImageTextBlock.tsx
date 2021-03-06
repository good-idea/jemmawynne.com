import * as React from 'react'
import { Box } from '@xstyled/styled-components'
import { Cta, ImageTextBlock as ImageTextBlockType } from '../../types'
import { Image } from '../Image'
import { Heading } from '../Text'
import { RichText } from '../RichText'
import { CTA } from '../CTA'
import {
  TextWrapper,
  Wrapper,
  RichTextWrapper,
  BackgroundImageWrapper,
  BackgroundImagePadding,
} from './styled'
import { DocumentLink } from '../DocumentLink'

interface LinkWrapperProps {
  children: React.ReactNode
  cta?: Cta | null
}

const LinkWrapper = ({ children, cta }: LinkWrapperProps) => {
  if (!cta?.link?.document) return <>{children}</>
  return <DocumentLink document={cta.link.document}>{children}</DocumentLink>
}

interface ImageTextBlockProps {
  block: ImageTextBlockType
}

export const ImageTextBlock = ({ block }: ImageTextBlockProps) => {
  const {
    header,
    headerFont,
    bodyRaw,
    backgroundColor,
    textColor,
    textAlign,
    cta,
    backgroundImage,
    hoverImage,
  } = block

  return (
    <LinkWrapper cta={cta}>
      <Wrapper
        textAlign={textAlign}
        textColor={textColor}
        backgroundColor={backgroundColor}
      >
        {backgroundImage ? (
          <BackgroundImageWrapper>
            <BackgroundImagePadding />
            <Image image={backgroundImage} hoverImage={hoverImage} />
          </BackgroundImageWrapper>
        ) : null}

        {header || bodyRaw || cta ? (
          <TextWrapper withBackgroundImage={Boolean(backgroundImage)}>
            <div>
              {header ? (
                <Heading
                  level={headerFont === 'serif' ? 4 : 5}
                  family={headerFont || 'sans'}
                  weight={headerFont === 'serif' ? 2 : 4}
                  mb={headerFont === 'serif' ? 2 : 5}
                  mt={0}
                >
                  {header}
                </Heading>
              ) : null}
              {bodyRaw ? (
                <RichTextWrapper>
                  <RichText body={bodyRaw} />
                </RichTextWrapper>
              ) : null}
              {cta ? (
                <Box mt={headerFont === 'serif' ? 3 : 5}>
                  <CTA level={2} cta={cta} />
                </Box>
              ) : null}
            </div>
          </TextWrapper>
        ) : null}
      </Wrapper>
    </LinkWrapper>
  )
}
