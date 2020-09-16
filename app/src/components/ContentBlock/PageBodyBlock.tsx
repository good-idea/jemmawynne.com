import * as React from 'react'
import {
  PageBlock as PageBlockType,
  RichTextBlock as RichTextBlockType,
  CarouselOrHeroOrPageBlockOrRichTextBlock,
} from '../../types'
import { CarouselBlock } from './CarouselBlock'
import { Column } from '../Layout'
import { HeroBlock } from './HeroBlock'
import { Image } from '../Image'
import { Heading } from '../Text'
import { RichText } from '../RichText'
import { definitely } from '../../utils'
import {
  PageTextInner,
  PageBlockInner,
  PageImage,
  PageBlockWrapper,
  PageText,
} from './styled'

interface RichTextBlockProps {
  block: RichTextBlockType
}

const RichTextBlock = ({ block }: RichTextBlockProps) => {
  return (
    <Column my={5} maxWidth="medium">
      <RichText body={block.bodyRaw} />
    </Column>
  )
}

interface PageBlockProps {
  block: PageBlockType
  previousBlock?: CarouselOrHeroOrPageBlockOrRichTextBlock
}

const hasShift = (
  block?: CarouselOrHeroOrPageBlockOrRichTextBlock,
): boolean => {
  if (!block) return false
  if (block.__typename !== 'PageBlock') return false
  if (!block.content) return false
  return (
    block.content.length === 1 &&
    definitely(block.content)[0].__typename === 'RichImage'
  )
}

export const PageBlock = ({ block, previousBlock }: PageBlockProps) => {
  const { alignment, backgroundColor, content } = block
  const shiftDown = hasShift(block)
  const padTop = hasShift(previousBlock)
  const innerBlocks = definitely(content)
  const isAlone =
    innerBlocks.length === 1 && innerBlocks[0].__typename === 'PageText'
  console.log({ innerBlocks, isAlone })
  return (
    <PageBlockWrapper
      shiftDown={shiftDown}
      padTop={padTop}
      backgroundColor={backgroundColor}
      isAlone={isAlone}
    >
      <PageBlockInner alignment={alignment}>
        {innerBlocks.map((c) =>
          c.__typename === 'PageText' ? (
            <PageText isAlone={isAlone} key={c._key || 'some-key'}>
              {c.heading ? (
                <Heading level={5} mb={5} family="sans">
                  {c.heading}
                </Heading>
              ) : null}
              <PageTextInner isAlone={isAlone}>
                <RichText body={c.bodyRaw} />
              </PageTextInner>
            </PageText>
          ) : c.__typename === 'RichImage' ? (
            <PageImage key={c._key || 'some-key'}>
              <Image image={c} />
            </PageImage>
          ) : null,
        )}
      </PageBlockInner>
    </PageBlockWrapper>
  )
}

interface PageBodyBlockProps {
  block: CarouselOrHeroOrPageBlockOrRichTextBlock
  previousBlock?: CarouselOrHeroOrPageBlockOrRichTextBlock
}

export const PageBodyBlock = ({ block, previousBlock }: PageBodyBlockProps) => {
  switch (block.__typename) {
    case 'Carousel':
      return <CarouselBlock content={block} />
    case 'Hero':
      return <HeroBlock hero={block} />
    case 'PageBlock':
      return <PageBlock block={block} previousBlock={previousBlock} />
    case 'RichTextBlock':
      return <RichTextBlock block={block} />
    default:
      // @ts-ignore
      throw new Error(`Block type "${block.__typename}" is not valid`)
  }
}
