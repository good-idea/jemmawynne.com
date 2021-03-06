import { definitely } from '../utils'
import {
  RichImage,
  Hero,
  Maybe,
  CarouselOrCollectionGridOrHeroOrImageTextSectionOrPageBlockOrRichTextBlock,
} from '../types'

export const isValidHero = (hero?: Hero | null): boolean => {
  if (!hero) return false
  return Boolean(hero?.image)
}

export const getHeroImage = (hero?: Hero | null): RichImage | undefined => {
  if (!hero) return
  return hero.image ?? undefined
}

export const getFirstHeroImage = (
  content?:
    | Maybe<CarouselOrCollectionGridOrHeroOrImageTextSectionOrPageBlockOrRichTextBlock>[]
    | null,
): RichImage | undefined => {
  if (!content) return undefined
  const firstHero = definitely(content).filter(
    (c) => c.__typename === 'Hero',
  )[0]
  if (firstHero && firstHero.__typename === 'Hero') {
    return getHeroImage(firstHero)
  }
  return undefined
}

export function getUrlParameter(name: string, path: string) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  const results = regex.exec(path)
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '))
}
