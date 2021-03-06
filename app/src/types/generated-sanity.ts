export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { [key: string]: any }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
}

export interface Announcement {
  __typename: 'Announcement'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  cta?: Maybe<Cta>
}

export type AnnouncementFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  text?: Maybe<StringFilter>
  cta?: Maybe<CtaFilter>
}

export type AnnouncementSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  text?: Maybe<SortOrder>
  cta?: Maybe<CtaSorting>
}

export interface Banner {
  __typename: 'Banner'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** Turn this on to allow users to dismiss the notification header */
  dismissable?: Maybe<Scalars['Boolean']>
  announcements?: Maybe<Array<Maybe<Announcement>>>
}

export type BannerFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  dismissable?: Maybe<BooleanFilter>
}

export type BannerSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  dismissable?: Maybe<SortOrder>
}

export interface Block {
  __typename: 'Block'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  children?: Maybe<Array<Maybe<Span>>>
  style?: Maybe<Scalars['String']>
  list?: Maybe<Scalars['String']>
}

export type BlockOrRichImage = Block | RichImage

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Boolean']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Boolean']>
}

export interface Carousel {
  __typename: 'Carousel'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  subtitleRaw?: Maybe<Scalars['JSON']>
  /** Create a carousel from a collection. If a collection is used, items linked to below will be ignored. */
  collection?: Maybe<ShopifyCollection>
  items?: Maybe<Array<Maybe<RichPageLink>>>
  cta?: Maybe<Cta>
}

export type CarouselFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  collection?: Maybe<ShopifyCollectionFilter>
  cta?: Maybe<CtaFilter>
}

export type CarouselOrCollectionGridOrHeroOrImageTextSectionOrPageBlockOrRichTextBlock =

    | Carousel
    | CollectionGrid
    | Hero
    | ImageTextSection
    | PageBlock
    | RichTextBlock

export type CarouselOrHeroOrImageTextSection =
  | Carousel
  | Hero
  | ImageTextSection

export type CarouselSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  cta?: Maybe<CtaSorting>
}

export interface CollectionBlock {
  __typename: 'CollectionBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** Use this number to insert the block before a product in the grid */
  position?: Maybe<Scalars['Float']>
  format?: Maybe<Scalars['String']>
  bodyRaw?: Maybe<Scalars['JSON']>
  textPosition?: Maybe<Scalars['String']>
  textColor?: Maybe<Scalars['String']>
  backgroundImage?: Maybe<RichImage>
  backgroundColor?: Maybe<Scalars['String']>
}

export type CollectionBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  position?: Maybe<FloatFilter>
  format?: Maybe<StringFilter>
  textPosition?: Maybe<StringFilter>
  textColor?: Maybe<StringFilter>
  backgroundImage?: Maybe<RichImageFilter>
  backgroundColor?: Maybe<StringFilter>
}

export type CollectionBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  position?: Maybe<SortOrder>
  format?: Maybe<SortOrder>
  textPosition?: Maybe<SortOrder>
  textColor?: Maybe<SortOrder>
  backgroundImage?: Maybe<RichImageSorting>
  backgroundColor?: Maybe<SortOrder>
}

export interface CollectionGrid {
  __typename: 'CollectionGrid'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** Defaults to the title of the collection */
  customTitle?: Maybe<Scalars['String']>
  collection?: Maybe<ShopifyCollection>
  /** Customize the CTA Label. Defaults to "Discover more" */
  customCTALabel?: Maybe<Scalars['String']>
}

export type CollectionGridFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  customTitle?: Maybe<StringFilter>
  collection?: Maybe<ShopifyCollectionFilter>
  customCTALabel?: Maybe<StringFilter>
}

export type CollectionGridSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  customTitle?: Maybe<SortOrder>
  customCTALabel?: Maybe<SortOrder>
}

export interface CollectionInfo extends Document {
  __typename: 'CollectionInfo'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  /**
   * Add a default set of collections for a side menu here. You can add a different
   * set to the individual collection page. If nothing is defined there, it will
   * fall back to these links.
   */
  helpText?: Maybe<Scalars['String']>
  relatedCollections?: Maybe<Array<Maybe<ShopifyCollection>>>
}

export type CollectionInfoFilter = {
  /** Apply filters on document level */
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  helpText?: Maybe<StringFilter>
}

export type CollectionInfoSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  helpText?: Maybe<SortOrder>
}

export interface Cta {
  __typename: 'Cta'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  link?: Maybe<InternalLink>
  mailToEmail?: Maybe<Scalars['String']>
  mailToSubject?: Maybe<Scalars['String']>
}

export type CtaFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  label?: Maybe<StringFilter>
  link?: Maybe<InternalLinkFilter>
  mailToEmail?: Maybe<StringFilter>
  mailToSubject?: Maybe<StringFilter>
}

export type CtaOrSubMenu = Cta | SubMenu

export type CtaSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  label?: Maybe<SortOrder>
  link?: Maybe<InternalLinkSorting>
  mailToEmail?: Maybe<SortOrder>
  mailToSubject?: Maybe<SortOrder>
}

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Date']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Date']>
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Date']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Date']>
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Date']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Date']>
}

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['DateTime']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['DateTime']>
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['DateTime']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['DateTime']>
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['DateTime']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['DateTime']>
}

/** A Sanity document */
export type Document = {
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
}

export type DocumentFilter = {
  /** All documents referencing the given document ID. */
  references?: Maybe<Scalars['ID']>
  /** All documents that are drafts. */
  is_draft?: Maybe<Scalars['Boolean']>
}

export interface ExternalLink {
  __typename: 'ExternalLink'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  newTab?: Maybe<Scalars['Boolean']>
}

export type ExternalLinkFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
  newTab?: Maybe<BooleanFilter>
}

export type ExternalLinkSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  url?: Maybe<SortOrder>
  newTab?: Maybe<SortOrder>
}

export interface File {
  __typename: 'File'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  asset?: Maybe<SanityFileAsset>
}

export type FileFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  asset?: Maybe<SanityFileAssetFilter>
}

export type FileSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
}

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Float']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Float']>
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Float']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Float']>
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Float']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Float']>
}

export interface Geopoint {
  __typename: 'Geopoint'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  alt?: Maybe<Scalars['Float']>
}

export type GeopointFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  lat?: Maybe<FloatFilter>
  lng?: Maybe<FloatFilter>
  alt?: Maybe<FloatFilter>
}

export type GeopointSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  lat?: Maybe<SortOrder>
  lng?: Maybe<SortOrder>
  alt?: Maybe<SortOrder>
}

export interface Hero {
  __typename: 'Hero'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  content?: Maybe<Array<Maybe<HeroContent>>>
  /** Determines the layout of multiple content blocks (desktop only) */
  contentLayout?: Maybe<Scalars['String']>
  /** Enable this to expand the hero to be full-height. (Desktop only) */
  fullHeight?: Maybe<Scalars['Boolean']>
  image?: Maybe<RichImage>
  mobileImage?: Maybe<RichImage>
}

export interface HeroContent {
  __typename: 'HeroContent'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  bodyRaw?: Maybe<Scalars['JSON']>
  cta?: Maybe<Cta>
  align?: Maybe<Scalars['String']>
  textColor?: Maybe<Scalars['String']>
  textColorMobile?: Maybe<Scalars['String']>
  textPosition?: Maybe<Scalars['String']>
  textPositionMobile?: Maybe<Scalars['String']>
}

export type HeroContentFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  cta?: Maybe<CtaFilter>
  align?: Maybe<StringFilter>
  textColor?: Maybe<StringFilter>
  textColorMobile?: Maybe<StringFilter>
  textPosition?: Maybe<StringFilter>
  textPositionMobile?: Maybe<StringFilter>
}

export type HeroContentSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  cta?: Maybe<CtaSorting>
  align?: Maybe<SortOrder>
  textColor?: Maybe<SortOrder>
  textColorMobile?: Maybe<SortOrder>
  textPosition?: Maybe<SortOrder>
  textPositionMobile?: Maybe<SortOrder>
}

export type HeroFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  contentLayout?: Maybe<StringFilter>
  fullHeight?: Maybe<BooleanFilter>
  image?: Maybe<RichImageFilter>
  mobileImage?: Maybe<RichImageFilter>
}

export type HeroSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  contentLayout?: Maybe<SortOrder>
  fullHeight?: Maybe<SortOrder>
  image?: Maybe<RichImageSorting>
  mobileImage?: Maybe<RichImageSorting>
}

export interface Homepage extends Document {
  __typename: 'Homepage'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  content?: Maybe<Array<Maybe<CarouselOrHeroOrImageTextSection>>>
  seo?: Maybe<Seo>
}

export type HomepageFilter = {
  /** Apply filters on document level */
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  seo?: Maybe<SeoFilter>
}

export type HomepageSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  seo?: Maybe<SeoSorting>
}

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['ID']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['ID']>
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars['ID']>
  in?: Maybe<Array<Scalars['ID']>>
  nin?: Maybe<Array<Scalars['ID']>>
}

export interface Image {
  __typename: 'Image'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  asset?: Maybe<SanityImageAsset>
  hotspot?: Maybe<SanityImageHotspot>
  crop?: Maybe<SanityImageCrop>
}

export type ImageFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  asset?: Maybe<SanityImageAssetFilter>
  hotspot?: Maybe<SanityImageHotspotFilter>
  crop?: Maybe<SanityImageCropFilter>
}

export type ImageSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  hotspot?: Maybe<SanityImageHotspotSorting>
  crop?: Maybe<SanityImageCropSorting>
}

export interface ImageTextBlock {
  __typename: 'ImageTextBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  header?: Maybe<Scalars['String']>
  headerFont?: Maybe<Scalars['String']>
  bodyRaw?: Maybe<Scalars['JSON']>
  backgroundColor?: Maybe<Scalars['String']>
  textColor?: Maybe<Scalars['String']>
  textAlign?: Maybe<Scalars['String']>
  cta?: Maybe<Cta>
  backgroundImage?: Maybe<RichImage>
  hoverImage?: Maybe<RichImage>
}

export type ImageTextBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  header?: Maybe<StringFilter>
  headerFont?: Maybe<StringFilter>
  backgroundColor?: Maybe<StringFilter>
  textColor?: Maybe<StringFilter>
  textAlign?: Maybe<StringFilter>
  cta?: Maybe<CtaFilter>
  backgroundImage?: Maybe<RichImageFilter>
  hoverImage?: Maybe<RichImageFilter>
}

export type ImageTextBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  header?: Maybe<SortOrder>
  headerFont?: Maybe<SortOrder>
  backgroundColor?: Maybe<SortOrder>
  textColor?: Maybe<SortOrder>
  textAlign?: Maybe<SortOrder>
  cta?: Maybe<CtaSorting>
  backgroundImage?: Maybe<RichImageSorting>
  hoverImage?: Maybe<RichImageSorting>
}

export interface ImageTextSection {
  __typename: 'ImageTextSection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  subtitleRaw?: Maybe<Scalars['JSON']>
  blocks?: Maybe<Array<Maybe<ImageTextBlock>>>
}

export type ImageTextSectionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
}

export type ImageTextSectionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
}

export interface InstagramSettings {
  __typename: 'InstagramSettings'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** Don't include the @ */
  handle?: Maybe<Scalars['String']>
  images?: Maybe<Array<Maybe<RichImage>>>
}

export type InstagramSettingsFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  handle?: Maybe<StringFilter>
}

export type InstagramSettingsSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
}

export interface InternalLink {
  __typename: 'InternalLink'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** (optional) The title of the linked page will be used by default */
  label?: Maybe<Scalars['String']>
  document?: Maybe<PageOrPressPageOrShopifyCollectionOrShopifyProductOrStockists>
}

export type InternalLinkFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  label?: Maybe<StringFilter>
}

export type InternalLinkSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  label?: Maybe<SortOrder>
}

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Int']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Int']>
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Int']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Int']>
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Int']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Int']>
}

export interface Link {
  __typename: 'Link'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  href?: Maybe<Scalars['String']>
}

export type LinkFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  href?: Maybe<StringFilter>
}

export interface LinkGroup {
  __typename: 'LinkGroup'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** (optional) A light gray header that appears above the list of links */
  title?: Maybe<Scalars['String']>
  links?: Maybe<Array<Maybe<InternalLink>>>
}

export type LinkGroupFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
}

export type LinkGroupOrRichPageLink = LinkGroup | RichPageLink

export type LinkGroupSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
}

export type LinkSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  href?: Maybe<SortOrder>
}

export interface Menu extends Document {
  __typename: 'Menu'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  menuItems?: Maybe<Array<Maybe<CtaOrSubMenu>>>
}

export type MenuFilter = {
  /** Apply filters on document level */
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
}

export interface MenuLink {
  __typename: 'MenuLink'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  link?: Maybe<Cta>
}

export type MenuLinkFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  link?: Maybe<CtaFilter>
}

export type MenuLinkSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  link?: Maybe<CtaSorting>
}

export type MenuSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
}

export interface Page extends Document {
  __typename: 'Page'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Slug>
  body?: Maybe<
    Array<
      Maybe<CarouselOrCollectionGridOrHeroOrImageTextSectionOrPageBlockOrRichTextBlock>
    >
  >
  seo?: Maybe<Seo>
}

export interface PageBlock {
  __typename: 'PageBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  backgroundColor?: Maybe<Scalars['String']>
  textColor?: Maybe<Scalars['String']>
  layoutOptions?: Maybe<Scalars['String']>
  content?: Maybe<Array<Maybe<PageTextOrRichImage>>>
  alignment?: Maybe<Scalars['String']>
}

export type PageBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  backgroundColor?: Maybe<StringFilter>
  textColor?: Maybe<StringFilter>
  layoutOptions?: Maybe<StringFilter>
  alignment?: Maybe<StringFilter>
}

export type PageBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  backgroundColor?: Maybe<SortOrder>
  textColor?: Maybe<SortOrder>
  layoutOptions?: Maybe<SortOrder>
  alignment?: Maybe<SortOrder>
}

export type PageFilter = {
  /** Apply filters on document level */
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  slug?: Maybe<SlugFilter>
  seo?: Maybe<SeoFilter>
}

export interface PageInfo {
  __typename: 'PageInfo'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPreviousPage?: Maybe<Scalars['Boolean']>
}

export type PageInfoFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  hasNextPage?: Maybe<BooleanFilter>
  hasPreviousPage?: Maybe<BooleanFilter>
}

export type PageInfoSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  hasNextPage?: Maybe<SortOrder>
  hasPreviousPage?: Maybe<SortOrder>
}

export type PageOrPressPageOrShopifyCollectionOrShopifyProductOrStockists =
  | Page
  | PressPage
  | ShopifyCollection
  | ShopifyProduct
  | Stockists

export type PageOrShopifyCollectionOrShopifyProduct =
  | Page
  | ShopifyCollection
  | ShopifyProduct

export type PageSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  slug?: Maybe<SlugSorting>
  seo?: Maybe<SeoSorting>
}

export interface PageText {
  __typename: 'PageText'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  heading?: Maybe<Scalars['String']>
  bodyRaw?: Maybe<Scalars['JSON']>
}

export type PageTextFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  heading?: Maybe<StringFilter>
}

export type PageTextOrRichImage = PageText | RichImage

export type PageTextSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  heading?: Maybe<SortOrder>
}

export interface PressItem extends Document {
  __typename: 'PressItem'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  publishDate?: Maybe<Scalars['Date']>
  type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  subtitle?: Maybe<Scalars['String']>
  link?: Maybe<ExternalLink>
  image?: Maybe<RichImage>
}

export type PressItemFilter = {
  /** Apply filters on document level */
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  publishDate?: Maybe<DateFilter>
  type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  subtitle?: Maybe<StringFilter>
  link?: Maybe<ExternalLinkFilter>
  image?: Maybe<RichImageFilter>
}

export type PressItemSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  publishDate?: Maybe<SortOrder>
  type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  subtitle?: Maybe<SortOrder>
  link?: Maybe<ExternalLinkSorting>
  image?: Maybe<RichImageSorting>
}

export interface PressPage extends Document {
  __typename: 'PressPage'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  hero?: Maybe<Hero>
  seo?: Maybe<Seo>
}

export type PressPageFilter = {
  /** Apply filters on document level */
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  hero?: Maybe<HeroFilter>
  seo?: Maybe<SeoFilter>
}

export type PressPageSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  hero?: Maybe<HeroSorting>
  seo?: Maybe<SeoSorting>
}

export interface ProductInfo extends Document {
  __typename: 'ProductInfo'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  /** Use these fields to create badges that appear on product thumbnails */
  tagBadgeHelpText?: Maybe<Scalars['String']>
  tagBadges?: Maybe<Array<Maybe<TagBadge>>>
  /**
   * Use these fields to add accordions to all or some products. For instance, you
   * could add a 'Shipping and Returns' block on all items, and a 'Ring Sizing
   * Guide' block to all Rings. These blocks will be displayed in
   * accordion-dropdowns below the main product information. You can also add info
   * blocks to individual items on their page here in the CMS.
   */
  helpText?: Maybe<Scalars['String']>
  globalBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  /** Use these fields to add accordions to products within certain collections */
  byCollectionHelpText?: Maybe<Scalars['String']>
  blocksByCollection?: Maybe<Array<Maybe<ProductInfoBlocksByCollection>>>
  /** Use these fields to add accordions to all products of different types */
  byTypeHelpText?: Maybe<Scalars['String']>
  ringBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  earringBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  braceletBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  necklaceBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  /**
   * Use these fields to add accordions to items with particular tags in Shopify.
   * For instance, a "Customization" block for anything tagged with "Custom" in Shopify.
   */
  byTagHelpText?: Maybe<Scalars['String']>
  blocksByTag?: Maybe<Array<Maybe<ProductInfoBlocksByTag>>>
  swatches?: Maybe<Array<Maybe<Swatch>>>
}

export interface ProductInfoBlock {
  __typename: 'ProductInfoBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  bodyRaw?: Maybe<Scalars['JSON']>
}

export type ProductInfoBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
}

export interface ProductInfoBlocksByCollection {
  __typename: 'ProductInfoBlocksByCollection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  collections?: Maybe<Array<Maybe<ShopifyCollection>>>
  infoBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
}

export type ProductInfoBlocksByCollectionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
}

export type ProductInfoBlocksByCollectionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
}

export interface ProductInfoBlocksByTag {
  __typename: 'ProductInfoBlocksByTag'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** Tag to match from Shopify. */
  tag?: Maybe<Scalars['String']>
  infoBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
}

export type ProductInfoBlocksByTagFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  tag?: Maybe<StringFilter>
}

export type ProductInfoBlocksByTagSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  tag?: Maybe<SortOrder>
}

export type ProductInfoBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
}

export type ProductInfoFilter = {
  /** Apply filters on document level */
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  tagBadgeHelpText?: Maybe<StringFilter>
  helpText?: Maybe<StringFilter>
  byCollectionHelpText?: Maybe<StringFilter>
  byTypeHelpText?: Maybe<StringFilter>
  byTagHelpText?: Maybe<StringFilter>
}

export type ProductInfoSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  tagBadgeHelpText?: Maybe<SortOrder>
  helpText?: Maybe<SortOrder>
  byCollectionHelpText?: Maybe<SortOrder>
  byTypeHelpText?: Maybe<SortOrder>
  byTagHelpText?: Maybe<SortOrder>
}

export interface RichImage {
  __typename: 'RichImage'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  /** A short description of the image. Helps with accessibility and SEO. Defaults to the caption if not defined. */
  altText?: Maybe<Scalars['String']>
  asset?: Maybe<SanityImageAsset>
  hotspot?: Maybe<SanityImageHotspot>
  crop?: Maybe<SanityImageCrop>
}

export type RichImageFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  caption?: Maybe<StringFilter>
  altText?: Maybe<StringFilter>
  asset?: Maybe<SanityImageAssetFilter>
  hotspot?: Maybe<SanityImageHotspotFilter>
  crop?: Maybe<SanityImageCropFilter>
}

export type RichImageSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  caption?: Maybe<SortOrder>
  altText?: Maybe<SortOrder>
  hotspot?: Maybe<SanityImageHotspotSorting>
  crop?: Maybe<SanityImageCropSorting>
}

export interface RichPageLink {
  __typename: 'RichPageLink'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  document?: Maybe<PageOrShopifyCollectionOrShopifyProduct>
  /** If left empty, the title of the linked page, product, or collection will be used. */
  title?: Maybe<Scalars['String']>
  captionRaw?: Maybe<Scalars['JSON']>
  image?: Maybe<RichImage>
  hoverImage?: Maybe<RichImage>
}

export type RichPageLinkFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  image?: Maybe<RichImageFilter>
  hoverImage?: Maybe<RichImageFilter>
}

export type RichPageLinkSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  image?: Maybe<RichImageSorting>
  hoverImage?: Maybe<RichImageSorting>
}

export interface RichTextBlock {
  __typename: 'RichTextBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  bodyRaw?: Maybe<Scalars['JSON']>
  textAlign?: Maybe<Scalars['String']>
}

export type RichTextBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  textAlign?: Maybe<StringFilter>
}

export type RichTextBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  textAlign?: Maybe<SortOrder>
}

export interface RootQuery {
  __typename: 'RootQuery'
  Document?: Maybe<Document>
  Menu?: Maybe<Menu>
  Homepage?: Maybe<Homepage>
  Page?: Maybe<Page>
  ProductInfo?: Maybe<ProductInfo>
  CollectionInfo?: Maybe<CollectionInfo>
  SiteSettings?: Maybe<SiteSettings>
  Stockists?: Maybe<Stockists>
  PressPage?: Maybe<PressPage>
  PressItem?: Maybe<PressItem>
  ShopifyProduct?: Maybe<ShopifyProduct>
  ShopifyCollection?: Maybe<ShopifyCollection>
  SanityImageAsset?: Maybe<SanityImageAsset>
  SanityFileAsset?: Maybe<SanityFileAsset>
  allMenu: Array<Menu>
  allHomepage: Array<Homepage>
  allPage: Array<Page>
  allProductInfo: Array<ProductInfo>
  allCollectionInfo: Array<CollectionInfo>
  allSiteSettings: Array<SiteSettings>
  allStockists: Array<Stockists>
  allPressPage: Array<PressPage>
  allPressItem: Array<PressItem>
  allShopifyProduct: Array<ShopifyProduct>
  allShopifyCollection: Array<ShopifyCollection>
  allSanityImageAsset: Array<SanityImageAsset>
  allSanityFileAsset: Array<SanityFileAsset>
}

export type RootQueryDocumentArgs = {
  id: Scalars['ID']
}

export type RootQueryMenuArgs = {
  id: Scalars['ID']
}

export type RootQueryHomepageArgs = {
  id: Scalars['ID']
}

export type RootQueryPageArgs = {
  id: Scalars['ID']
}

export type RootQueryProductInfoArgs = {
  id: Scalars['ID']
}

export type RootQueryCollectionInfoArgs = {
  id: Scalars['ID']
}

export type RootQuerySiteSettingsArgs = {
  id: Scalars['ID']
}

export type RootQueryStockistsArgs = {
  id: Scalars['ID']
}

export type RootQueryPressPageArgs = {
  id: Scalars['ID']
}

export type RootQueryPressItemArgs = {
  id: Scalars['ID']
}

export type RootQueryShopifyProductArgs = {
  id: Scalars['ID']
}

export type RootQueryShopifyCollectionArgs = {
  id: Scalars['ID']
}

export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID']
}

export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID']
}

export type RootQueryAllMenuArgs = {
  where?: Maybe<MenuFilter>
  sort?: Maybe<Array<MenuSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllHomepageArgs = {
  where?: Maybe<HomepageFilter>
  sort?: Maybe<Array<HomepageSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllPageArgs = {
  where?: Maybe<PageFilter>
  sort?: Maybe<Array<PageSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllProductInfoArgs = {
  where?: Maybe<ProductInfoFilter>
  sort?: Maybe<Array<ProductInfoSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllCollectionInfoArgs = {
  where?: Maybe<CollectionInfoFilter>
  sort?: Maybe<Array<CollectionInfoSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllSiteSettingsArgs = {
  where?: Maybe<SiteSettingsFilter>
  sort?: Maybe<Array<SiteSettingsSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllStockistsArgs = {
  where?: Maybe<StockistsFilter>
  sort?: Maybe<Array<StockistsSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllPressPageArgs = {
  where?: Maybe<PressPageFilter>
  sort?: Maybe<Array<PressPageSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllPressItemArgs = {
  where?: Maybe<PressItemFilter>
  sort?: Maybe<Array<PressItemSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllShopifyProductArgs = {
  where?: Maybe<ShopifyProductFilter>
  sort?: Maybe<Array<ShopifyProductSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllShopifyCollectionArgs = {
  where?: Maybe<ShopifyCollectionFilter>
  sort?: Maybe<Array<ShopifyCollectionSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllSanityImageAssetArgs = {
  where?: Maybe<SanityImageAssetFilter>
  sort?: Maybe<Array<SanityImageAssetSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllSanityFileAssetArgs = {
  where?: Maybe<SanityFileAssetFilter>
  sort?: Maybe<Array<SanityFileAssetSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export interface SanityAssetSourceData {
  __typename: 'SanityAssetSourceData'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']>
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']>
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']>
}

export type SanityAssetSourceDataFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
}

export type SanityAssetSourceDataSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  url?: Maybe<SortOrder>
}

export interface SanityFileAsset extends Document {
  __typename: 'SanityFileAsset'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  originalFilename?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  altText?: Maybe<Scalars['String']>
  sha1hash?: Maybe<Scalars['String']>
  extension?: Maybe<Scalars['String']>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  assetId?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  source?: Maybe<SanityAssetSourceData>
}

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  originalFilename?: Maybe<StringFilter>
  label?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  description?: Maybe<StringFilter>
  altText?: Maybe<StringFilter>
  sha1hash?: Maybe<StringFilter>
  extension?: Maybe<StringFilter>
  mimeType?: Maybe<StringFilter>
  size?: Maybe<FloatFilter>
  assetId?: Maybe<StringFilter>
  path?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
  source?: Maybe<SanityAssetSourceDataFilter>
}

export type SanityFileAssetSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  originalFilename?: Maybe<SortOrder>
  label?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  description?: Maybe<SortOrder>
  altText?: Maybe<SortOrder>
  sha1hash?: Maybe<SortOrder>
  extension?: Maybe<SortOrder>
  mimeType?: Maybe<SortOrder>
  size?: Maybe<SortOrder>
  assetId?: Maybe<SortOrder>
  path?: Maybe<SortOrder>
  url?: Maybe<SortOrder>
  source?: Maybe<SanityAssetSourceDataSorting>
}

export interface SanityImageAsset extends Document {
  __typename: 'SanityImageAsset'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  originalFilename?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  altText?: Maybe<Scalars['String']>
  sha1hash?: Maybe<Scalars['String']>
  extension?: Maybe<Scalars['String']>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  assetId?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  metadata?: Maybe<SanityImageMetadata>
  source?: Maybe<SanityAssetSourceData>
}

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  originalFilename?: Maybe<StringFilter>
  label?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  description?: Maybe<StringFilter>
  altText?: Maybe<StringFilter>
  sha1hash?: Maybe<StringFilter>
  extension?: Maybe<StringFilter>
  mimeType?: Maybe<StringFilter>
  size?: Maybe<FloatFilter>
  assetId?: Maybe<StringFilter>
  path?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
  metadata?: Maybe<SanityImageMetadataFilter>
  source?: Maybe<SanityAssetSourceDataFilter>
}

export type SanityImageAssetSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  originalFilename?: Maybe<SortOrder>
  label?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  description?: Maybe<SortOrder>
  altText?: Maybe<SortOrder>
  sha1hash?: Maybe<SortOrder>
  extension?: Maybe<SortOrder>
  mimeType?: Maybe<SortOrder>
  size?: Maybe<SortOrder>
  assetId?: Maybe<SortOrder>
  path?: Maybe<SortOrder>
  url?: Maybe<SortOrder>
  metadata?: Maybe<SanityImageMetadataSorting>
  source?: Maybe<SanityAssetSourceDataSorting>
}

export interface SanityImageCrop {
  __typename: 'SanityImageCrop'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  top?: Maybe<Scalars['Float']>
  bottom?: Maybe<Scalars['Float']>
  left?: Maybe<Scalars['Float']>
  right?: Maybe<Scalars['Float']>
}

export type SanityImageCropFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  top?: Maybe<FloatFilter>
  bottom?: Maybe<FloatFilter>
  left?: Maybe<FloatFilter>
  right?: Maybe<FloatFilter>
}

export type SanityImageCropSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  top?: Maybe<SortOrder>
  bottom?: Maybe<SortOrder>
  left?: Maybe<SortOrder>
  right?: Maybe<SortOrder>
}

export interface SanityImageDimensions {
  __typename: 'SanityImageDimensions'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  aspectRatio?: Maybe<Scalars['Float']>
}

export type SanityImageDimensionsFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  height?: Maybe<FloatFilter>
  width?: Maybe<FloatFilter>
  aspectRatio?: Maybe<FloatFilter>
}

export type SanityImageDimensionsSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  height?: Maybe<SortOrder>
  width?: Maybe<SortOrder>
  aspectRatio?: Maybe<SortOrder>
}

export interface SanityImageHotspot {
  __typename: 'SanityImageHotspot'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  x?: Maybe<Scalars['Float']>
  y?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type SanityImageHotspotFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  x?: Maybe<FloatFilter>
  y?: Maybe<FloatFilter>
  height?: Maybe<FloatFilter>
  width?: Maybe<FloatFilter>
}

export type SanityImageHotspotSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  x?: Maybe<SortOrder>
  y?: Maybe<SortOrder>
  height?: Maybe<SortOrder>
  width?: Maybe<SortOrder>
}

export interface SanityImageMetadata {
  __typename: 'SanityImageMetadata'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  location?: Maybe<Geopoint>
  dimensions?: Maybe<SanityImageDimensions>
  palette?: Maybe<SanityImagePalette>
  lqip?: Maybe<Scalars['String']>
  hasAlpha?: Maybe<Scalars['Boolean']>
  isOpaque?: Maybe<Scalars['Boolean']>
}

export type SanityImageMetadataFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  location?: Maybe<GeopointFilter>
  dimensions?: Maybe<SanityImageDimensionsFilter>
  palette?: Maybe<SanityImagePaletteFilter>
  lqip?: Maybe<StringFilter>
  hasAlpha?: Maybe<BooleanFilter>
  isOpaque?: Maybe<BooleanFilter>
}

export type SanityImageMetadataSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  location?: Maybe<GeopointSorting>
  dimensions?: Maybe<SanityImageDimensionsSorting>
  palette?: Maybe<SanityImagePaletteSorting>
  lqip?: Maybe<SortOrder>
  hasAlpha?: Maybe<SortOrder>
  isOpaque?: Maybe<SortOrder>
}

export interface SanityImagePalette {
  __typename: 'SanityImagePalette'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  darkMuted?: Maybe<SanityImagePaletteSwatch>
  lightVibrant?: Maybe<SanityImagePaletteSwatch>
  darkVibrant?: Maybe<SanityImagePaletteSwatch>
  vibrant?: Maybe<SanityImagePaletteSwatch>
  dominant?: Maybe<SanityImagePaletteSwatch>
  lightMuted?: Maybe<SanityImagePaletteSwatch>
  muted?: Maybe<SanityImagePaletteSwatch>
}

export type SanityImagePaletteFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  darkMuted?: Maybe<SanityImagePaletteSwatchFilter>
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilter>
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilter>
  vibrant?: Maybe<SanityImagePaletteSwatchFilter>
  dominant?: Maybe<SanityImagePaletteSwatchFilter>
  lightMuted?: Maybe<SanityImagePaletteSwatchFilter>
  muted?: Maybe<SanityImagePaletteSwatchFilter>
}

export type SanityImagePaletteSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  darkMuted?: Maybe<SanityImagePaletteSwatchSorting>
  lightVibrant?: Maybe<SanityImagePaletteSwatchSorting>
  darkVibrant?: Maybe<SanityImagePaletteSwatchSorting>
  vibrant?: Maybe<SanityImagePaletteSwatchSorting>
  dominant?: Maybe<SanityImagePaletteSwatchSorting>
  lightMuted?: Maybe<SanityImagePaletteSwatchSorting>
  muted?: Maybe<SanityImagePaletteSwatchSorting>
}

export interface SanityImagePaletteSwatch {
  __typename: 'SanityImagePaletteSwatch'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  background?: Maybe<Scalars['String']>
  foreground?: Maybe<Scalars['String']>
  population?: Maybe<Scalars['Float']>
  title?: Maybe<Scalars['String']>
}

export type SanityImagePaletteSwatchFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  background?: Maybe<StringFilter>
  foreground?: Maybe<StringFilter>
  population?: Maybe<FloatFilter>
  title?: Maybe<StringFilter>
}

export type SanityImagePaletteSwatchSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  background?: Maybe<SortOrder>
  foreground?: Maybe<SortOrder>
  population?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
}

export interface Seo {
  __typename: 'Seo'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** title for the browser window */
  title?: Maybe<Scalars['String']>
  /** title for search results */
  metaTitle?: Maybe<Scalars['String']>
  /**
   * This is the description that will appear underneath the preview link when
   * shared in Facebook. It should be less than 200 characters
   */
  description?: Maybe<Scalars['String']>
  image?: Maybe<Image>
  /** Comma-separated SEO keywords */
  keywords?: Maybe<Scalars['String']>
}

export type SeoFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  metaTitle?: Maybe<StringFilter>
  description?: Maybe<StringFilter>
  image?: Maybe<ImageFilter>
  keywords?: Maybe<StringFilter>
}

export type SeoSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  metaTitle?: Maybe<SortOrder>
  description?: Maybe<SortOrder>
  image?: Maybe<ImageSorting>
  keywords?: Maybe<SortOrder>
}

export interface ShopifyCollection extends Document {
  __typename: 'ShopifyCollection'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  shopifyId?: Maybe<Scalars['String']>
  archived?: Maybe<Scalars['Boolean']>
  sourceData?: Maybe<ShopifySourceCollection>
  products?: Maybe<Array<Maybe<ShopifyProduct>>>
  hero?: Maybe<Hero>
  disableMenu?: Maybe<Scalars['Boolean']>
  relatedCollectionsTitle?: Maybe<Scalars['String']>
  relatedCollections?: Maybe<Array<Maybe<ShopifyCollection>>>
  collectionBlocks?: Maybe<Array<Maybe<CollectionBlock>>>
  seo?: Maybe<Seo>
}

export type ShopifyCollectionFilter = {
  /** Apply filters on document level */
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  handle?: Maybe<StringFilter>
  shopifyId?: Maybe<StringFilter>
  archived?: Maybe<BooleanFilter>
  sourceData?: Maybe<ShopifySourceCollectionFilter>
  hero?: Maybe<HeroFilter>
  disableMenu?: Maybe<BooleanFilter>
  relatedCollectionsTitle?: Maybe<StringFilter>
  seo?: Maybe<SeoFilter>
}

export type ShopifyCollectionSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  shopifyId?: Maybe<SortOrder>
  archived?: Maybe<SortOrder>
  sourceData?: Maybe<ShopifySourceCollectionSorting>
  hero?: Maybe<HeroSorting>
  disableMenu?: Maybe<SortOrder>
  relatedCollectionsTitle?: Maybe<SortOrder>
  seo?: Maybe<SeoSorting>
}

export interface ShopifyMoneyV2 {
  __typename: 'ShopifyMoneyV2'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['String']>
  currencyCode?: Maybe<Scalars['String']>
}

export type ShopifyMoneyV2Filter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  amount?: Maybe<StringFilter>
  currencyCode?: Maybe<StringFilter>
}

export type ShopifyMoneyV2Sorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  amount?: Maybe<SortOrder>
  currencyCode?: Maybe<SortOrder>
}

export interface ShopifyProduct extends Document {
  __typename: 'ShopifyProduct'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  shopifyId?: Maybe<Scalars['String']>
  minVariantPrice?: Maybe<Scalars['Float']>
  maxVariantPrice?: Maybe<Scalars['Float']>
  archived?: Maybe<Scalars['Boolean']>
  sourceData?: Maybe<ShopifySourceProduct>
  collections?: Maybe<Array<Maybe<ShopifyCollection>>>
  options?: Maybe<Array<Maybe<ShopifyProductOption>>>
  variants?: Maybe<Array<Maybe<ShopifyProductVariant>>>
  infoBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  related?: Maybe<Carousel>
  seo?: Maybe<Seo>
}

export type ShopifyProductFilter = {
  /** Apply filters on document level */
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  handle?: Maybe<StringFilter>
  shopifyId?: Maybe<StringFilter>
  minVariantPrice?: Maybe<FloatFilter>
  maxVariantPrice?: Maybe<FloatFilter>
  archived?: Maybe<BooleanFilter>
  sourceData?: Maybe<ShopifySourceProductFilter>
  related?: Maybe<CarouselFilter>
  seo?: Maybe<SeoFilter>
}

export interface ShopifyProductOption {
  __typename: 'ShopifyProductOption'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  shopifyOptionId?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  values?: Maybe<Array<Maybe<ShopifyProductOptionValue>>>
}

export type ShopifyProductOptionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  shopifyOptionId?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
}

export type ShopifyProductOptionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  shopifyOptionId?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
}

export interface ShopifyProductOptionValue {
  __typename: 'ShopifyProductOptionValue'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type ShopifyProductOptionValueFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  value?: Maybe<StringFilter>
}

export type ShopifyProductOptionValueSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  value?: Maybe<SortOrder>
}

export type ShopifyProductSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  shopifyId?: Maybe<SortOrder>
  minVariantPrice?: Maybe<SortOrder>
  maxVariantPrice?: Maybe<SortOrder>
  archived?: Maybe<SortOrder>
  sourceData?: Maybe<ShopifySourceProductSorting>
  related?: Maybe<CarouselSorting>
  seo?: Maybe<SeoSorting>
}

export interface ShopifyProductVariant {
  __typename: 'ShopifyProductVariant'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  shopifyVariantID?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  sourceData?: Maybe<ShopifySourceProductVariant>
}

export type ShopifyProductVariantFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  shopifyVariantID?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  sourceData?: Maybe<ShopifySourceProductVariantFilter>
}

export type ShopifyProductVariantSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  shopifyVariantID?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  sourceData?: Maybe<ShopifySourceProductVariantSorting>
}

export interface ShopifySourceCollection {
  __typename: 'ShopifySourceCollection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Date']>
  handle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  descriptionHtml?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  image?: Maybe<ShopifySourceImage>
  products?: Maybe<ShopifySourceProductsConnection>
}

export interface ShopifySourceCollectionEdge {
  __typename: 'ShopifySourceCollectionEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceCollectionNode>
}

export type ShopifySourceCollectionEdgeFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  cursor?: Maybe<StringFilter>
  node?: Maybe<ShopifySourceCollectionNodeFilter>
}

export type ShopifySourceCollectionEdgeSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  cursor?: Maybe<SortOrder>
  node?: Maybe<ShopifySourceCollectionNodeSorting>
}

export type ShopifySourceCollectionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  updatedAt?: Maybe<DateFilter>
  handle?: Maybe<StringFilter>
  description?: Maybe<StringFilter>
  descriptionHtml?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
  image?: Maybe<ShopifySourceImageFilter>
  products?: Maybe<ShopifySourceProductsConnectionFilter>
}

export interface ShopifySourceCollectionNode {
  __typename: 'ShopifySourceCollectionNode'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ShopifySourceCollectionNodeFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  handle?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
}

export type ShopifySourceCollectionNodeSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
}

export interface ShopifySourceCollectionsConnection {
  __typename: 'ShopifySourceCollectionsConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  pageInfo?: Maybe<PageInfo>
  edges?: Maybe<Array<Maybe<ShopifySourceCollectionEdge>>>
}

export type ShopifySourceCollectionsConnectionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  pageInfo?: Maybe<PageInfoFilter>
}

export type ShopifySourceCollectionsConnectionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  pageInfo?: Maybe<PageInfoSorting>
}

export type ShopifySourceCollectionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  description?: Maybe<SortOrder>
  descriptionHtml?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  image?: Maybe<ShopifySourceImageSorting>
  products?: Maybe<ShopifySourceProductsConnectionSorting>
}

export interface ShopifySourceImage {
  __typename: 'ShopifySourceImage'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  altText?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  originalSrc?: Maybe<Scalars['String']>
  w100?: Maybe<Scalars['String']>
  w300?: Maybe<Scalars['String']>
  w800?: Maybe<Scalars['String']>
  w1200?: Maybe<Scalars['String']>
  w1600?: Maybe<Scalars['String']>
}

export interface ShopifySourceImageEdge {
  __typename: 'ShopifySourceImageEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  key?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceImage>
}

export type ShopifySourceImageEdgeFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  key?: Maybe<StringFilter>
  cursor?: Maybe<StringFilter>
  node?: Maybe<ShopifySourceImageFilter>
}

export type ShopifySourceImageEdgeSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  key?: Maybe<SortOrder>
  cursor?: Maybe<SortOrder>
  node?: Maybe<ShopifySourceImageSorting>
}

export type ShopifySourceImageFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  altText?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
  originalSrc?: Maybe<StringFilter>
  w100?: Maybe<StringFilter>
  w300?: Maybe<StringFilter>
  w800?: Maybe<StringFilter>
  w1200?: Maybe<StringFilter>
  w1600?: Maybe<StringFilter>
}

export interface ShopifySourceImages {
  __typename: 'ShopifySourceImages'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  edges?: Maybe<Array<Maybe<ShopifySourceImageEdge>>>
}

export type ShopifySourceImagesFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
}

export type ShopifySourceImageSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  altText?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  originalSrc?: Maybe<SortOrder>
  w100?: Maybe<SortOrder>
  w300?: Maybe<SortOrder>
  w800?: Maybe<SortOrder>
  w1200?: Maybe<SortOrder>
  w1600?: Maybe<SortOrder>
}

export type ShopifySourceImagesSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
}

export interface ShopifySourceProduct {
  __typename: 'ShopifySourceProduct'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  availableForSale?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['Date']>
  publishedAt?: Maybe<Scalars['Date']>
  updatedAt?: Maybe<Scalars['Date']>
  compareAtPriceRange?: Maybe<ShopifySourceProductPriceRange>
  priceRange?: Maybe<ShopifySourceProductPriceRange>
  presentmentPriceRanges?: Maybe<ShopifySourceProductPresentmentPriceRangeConnection>
  productType?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  handle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  descriptionHtml?: Maybe<Scalars['String']>
  vendor?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  images?: Maybe<ShopifySourceImages>
  options?: Maybe<Array<Maybe<ShopifySourceProductOption>>>
  variants?: Maybe<ShopifySourceProductVariantsConnection>
  collections?: Maybe<ShopifySourceCollectionsConnection>
}

export interface ShopifySourceProductEdge {
  __typename: 'ShopifySourceProductEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceProductNode>
}

export type ShopifySourceProductEdgeFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  cursor?: Maybe<StringFilter>
  node?: Maybe<ShopifySourceProductNodeFilter>
}

export type ShopifySourceProductEdgeSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  cursor?: Maybe<SortOrder>
  node?: Maybe<ShopifySourceProductNodeSorting>
}

export type ShopifySourceProductFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  availableForSale?: Maybe<BooleanFilter>
  createdAt?: Maybe<DateFilter>
  publishedAt?: Maybe<DateFilter>
  updatedAt?: Maybe<DateFilter>
  compareAtPriceRange?: Maybe<ShopifySourceProductPriceRangeFilter>
  priceRange?: Maybe<ShopifySourceProductPriceRangeFilter>
  presentmentPriceRanges?: Maybe<ShopifySourceProductPresentmentPriceRangeConnectionFilter>
  productType?: Maybe<StringFilter>
  handle?: Maybe<StringFilter>
  description?: Maybe<StringFilter>
  descriptionHtml?: Maybe<StringFilter>
  vendor?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
  images?: Maybe<ShopifySourceImagesFilter>
  variants?: Maybe<ShopifySourceProductVariantsConnectionFilter>
  collections?: Maybe<ShopifySourceCollectionsConnectionFilter>
}

export interface ShopifySourceProductNode {
  __typename: 'ShopifySourceProductNode'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ShopifySourceProductNodeFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  handle?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
}

export type ShopifySourceProductNodeSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
}

export interface ShopifySourceProductOption {
  __typename: 'ShopifySourceProductOption'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  values?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type ShopifySourceProductOptionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
}

export type ShopifySourceProductOptionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
}

export interface ShopifySourceProductPresentmentPriceRangeConnection {
  __typename: 'ShopifySourceProductPresentmentPriceRangeConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  edges?: Maybe<Array<Maybe<ShopifySourceProductPriceRangeEdge>>>
}

export type ShopifySourceProductPresentmentPriceRangeConnectionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
}

export type ShopifySourceProductPresentmentPriceRangeConnectionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
}

export interface ShopifySourceProductPricePresentmentEdge {
  __typename: 'ShopifySourceProductPricePresentmentEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceProductVariantPricePair>
}

export type ShopifySourceProductPricePresentmentEdgeFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  cursor?: Maybe<StringFilter>
  node?: Maybe<ShopifySourceProductVariantPricePairFilter>
}

export type ShopifySourceProductPricePresentmentEdgeSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  cursor?: Maybe<SortOrder>
  node?: Maybe<ShopifySourceProductVariantPricePairSorting>
}

export interface ShopifySourceProductPriceRange {
  __typename: 'ShopifySourceProductPriceRange'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  minVariantPrice?: Maybe<ShopifyMoneyV2>
  maxVariantPrice?: Maybe<ShopifyMoneyV2>
}

export interface ShopifySourceProductPriceRangeEdge {
  __typename: 'ShopifySourceProductPriceRangeEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceProductPriceRange>
}

export type ShopifySourceProductPriceRangeEdgeFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  cursor?: Maybe<StringFilter>
  node?: Maybe<ShopifySourceProductPriceRangeFilter>
}

export type ShopifySourceProductPriceRangeEdgeSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  cursor?: Maybe<SortOrder>
  node?: Maybe<ShopifySourceProductPriceRangeSorting>
}

export type ShopifySourceProductPriceRangeFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  minVariantPrice?: Maybe<ShopifyMoneyV2Filter>
  maxVariantPrice?: Maybe<ShopifyMoneyV2Filter>
}

export type ShopifySourceProductPriceRangeSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  minVariantPrice?: Maybe<ShopifyMoneyV2Sorting>
  maxVariantPrice?: Maybe<ShopifyMoneyV2Sorting>
}

export interface ShopifySourceProductsConnection {
  __typename: 'ShopifySourceProductsConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  pageInfo?: Maybe<PageInfo>
  edges?: Maybe<Array<Maybe<ShopifySourceProductEdge>>>
}

export type ShopifySourceProductsConnectionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  pageInfo?: Maybe<PageInfoFilter>
}

export type ShopifySourceProductsConnectionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  pageInfo?: Maybe<PageInfoSorting>
}

export type ShopifySourceProductSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  availableForSale?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  publishedAt?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
  compareAtPriceRange?: Maybe<ShopifySourceProductPriceRangeSorting>
  priceRange?: Maybe<ShopifySourceProductPriceRangeSorting>
  presentmentPriceRanges?: Maybe<ShopifySourceProductPresentmentPriceRangeConnectionSorting>
  productType?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  description?: Maybe<SortOrder>
  descriptionHtml?: Maybe<SortOrder>
  vendor?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  images?: Maybe<ShopifySourceImagesSorting>
  variants?: Maybe<ShopifySourceProductVariantsConnectionSorting>
  collections?: Maybe<ShopifySourceCollectionsConnectionSorting>
}

export interface ShopifySourceProductVariant {
  __typename: 'ShopifySourceProductVariant'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  availableForSale?: Maybe<Scalars['Boolean']>
  currentlyNotInStock?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['String']>
  image?: Maybe<ShopifySourceImage>
  priceV2?: Maybe<ShopifyMoneyV2>
  compareAtPriceV2?: Maybe<ShopifyMoneyV2>
  selectedOptions?: Maybe<Array<Maybe<ShopifySourceSelectedOption>>>
  requiresShipping?: Maybe<Scalars['Boolean']>
  sku?: Maybe<Scalars['String']>
  weight?: Maybe<Scalars['Float']>
  weightUnit?: Maybe<Scalars['String']>
}

export interface ShopifySourceProductVariantEdge {
  __typename: 'ShopifySourceProductVariantEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceProductVariant>
}

export type ShopifySourceProductVariantEdgeFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  cursor?: Maybe<StringFilter>
  node?: Maybe<ShopifySourceProductVariantFilter>
}

export type ShopifySourceProductVariantEdgeSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  cursor?: Maybe<SortOrder>
  node?: Maybe<ShopifySourceProductVariantSorting>
}

export type ShopifySourceProductVariantFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  availableForSale?: Maybe<BooleanFilter>
  currentlyNotInStock?: Maybe<BooleanFilter>
  id?: Maybe<StringFilter>
  image?: Maybe<ShopifySourceImageFilter>
  priceV2?: Maybe<ShopifyMoneyV2Filter>
  compareAtPriceV2?: Maybe<ShopifyMoneyV2Filter>
  requiresShipping?: Maybe<BooleanFilter>
  sku?: Maybe<StringFilter>
  weight?: Maybe<FloatFilter>
  weightUnit?: Maybe<StringFilter>
}

export interface ShopifySourceProductVariantPricePair {
  __typename: 'ShopifySourceProductVariantPricePair'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  compareAtPrice?: Maybe<ShopifyMoneyV2>
  price?: Maybe<ShopifyMoneyV2>
}

export type ShopifySourceProductVariantPricePairFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  compareAtPrice?: Maybe<ShopifyMoneyV2Filter>
  price?: Maybe<ShopifyMoneyV2Filter>
}

export type ShopifySourceProductVariantPricePairSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  compareAtPrice?: Maybe<ShopifyMoneyV2Sorting>
  price?: Maybe<ShopifyMoneyV2Sorting>
}

export interface ShopifySourceProductVariantPricePresenentmentConnection {
  __typename: 'ShopifySourceProductVariantPricePresenentmentConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  edges?: Maybe<Array<Maybe<ShopifySourceProductPricePresentmentEdge>>>
}

export type ShopifySourceProductVariantPricePresenentmentConnectionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
}

export type ShopifySourceProductVariantPricePresenentmentConnectionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
}

export interface ShopifySourceProductVariantsConnection {
  __typename: 'ShopifySourceProductVariantsConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  pageInfo?: Maybe<PageInfo>
  edges?: Maybe<Array<Maybe<ShopifySourceProductVariantEdge>>>
}

export type ShopifySourceProductVariantsConnectionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  pageInfo?: Maybe<PageInfoFilter>
}

export type ShopifySourceProductVariantsConnectionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  pageInfo?: Maybe<PageInfoSorting>
}

export type ShopifySourceProductVariantSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  availableForSale?: Maybe<SortOrder>
  currentlyNotInStock?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  image?: Maybe<ShopifySourceImageSorting>
  priceV2?: Maybe<ShopifyMoneyV2Sorting>
  compareAtPriceV2?: Maybe<ShopifyMoneyV2Sorting>
  requiresShipping?: Maybe<SortOrder>
  sku?: Maybe<SortOrder>
  weight?: Maybe<SortOrder>
  weightUnit?: Maybe<SortOrder>
}

export interface ShopifySourceSelectedOption {
  __typename: 'ShopifySourceSelectedOption'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type ShopifySourceSelectedOptionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  value?: Maybe<StringFilter>
}

export type ShopifySourceSelectedOptionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  value?: Maybe<SortOrder>
}

export interface SiteSettings extends Document {
  __typename: 'SiteSettings'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  banner?: Maybe<Banner>
  aboutRaw?: Maybe<Scalars['JSON']>
  instagramSettings?: Maybe<InstagramSettings>
  linkGroups?: Maybe<Array<Maybe<LinkGroup>>>
  seo?: Maybe<Seo>
}

export type SiteSettingsFilter = {
  /** Apply filters on document level */
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  banner?: Maybe<BannerFilter>
  instagramSettings?: Maybe<InstagramSettingsFilter>
  seo?: Maybe<SeoFilter>
}

export type SiteSettingsSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  banner?: Maybe<BannerSorting>
  instagramSettings?: Maybe<InstagramSettingsSorting>
  seo?: Maybe<SeoSorting>
}

export interface Slug {
  __typename: 'Slug'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  current?: Maybe<Scalars['String']>
}

export type SlugFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  current?: Maybe<StringFilter>
}

export type SlugSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  current?: Maybe<SortOrder>
}

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC',
}

export interface Span {
  __typename: 'Span'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  marks?: Maybe<Array<Maybe<Scalars['String']>>>
  text?: Maybe<Scalars['String']>
}

export interface Stockist {
  __typename: 'Stockist'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
}

export type StockistFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  location?: Maybe<StringFilter>
  website?: Maybe<StringFilter>
  phone?: Maybe<StringFilter>
}

export interface Stockists extends Document {
  __typename: 'Stockists'
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  _key?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  content?: Maybe<Array<Maybe<CarouselOrHeroOrImageTextSection>>>
  showUs?: Maybe<Scalars['Boolean']>
  us?: Maybe<Array<Maybe<Stockist>>>
  showIntl?: Maybe<Scalars['Boolean']>
  international?: Maybe<Array<Maybe<Stockist>>>
  showOnline?: Maybe<Scalars['Boolean']>
  online?: Maybe<Array<Maybe<Stockist>>>
  seo?: Maybe<Seo>
}

export type StockistsFilter = {
  /** Apply filters on document level */
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  showUs?: Maybe<BooleanFilter>
  showIntl?: Maybe<BooleanFilter>
  showOnline?: Maybe<BooleanFilter>
  seo?: Maybe<SeoFilter>
}

export type StockistSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  location?: Maybe<SortOrder>
  website?: Maybe<SortOrder>
  phone?: Maybe<SortOrder>
}

export type StockistsSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  showUs?: Maybe<SortOrder>
  showIntl?: Maybe<SortOrder>
  showOnline?: Maybe<SortOrder>
  seo?: Maybe<SeoSorting>
}

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['String']>
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['String']>
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  nin?: Maybe<Array<Scalars['String']>>
}

export interface SubMenu {
  __typename: 'SubMenu'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  columns?: Maybe<Array<Maybe<SubmenuSection>>>
}

export type SubMenuFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
}

export interface SubmenuSection {
  __typename: 'SubmenuSection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  links?: Maybe<Array<Maybe<LinkGroupOrRichPageLink>>>
  images?: Maybe<Array<Maybe<RichImage>>>
}

export type SubmenuSectionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
}

export type SubmenuSectionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
}

export type SubMenuSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
}

export interface Swatch {
  __typename: 'Swatch'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** This must match the name of the option in Shopify */
  colorName?: Maybe<Scalars['String']>
  swatchImage?: Maybe<Image>
}

export type SwatchFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  colorName?: Maybe<StringFilter>
  swatchImage?: Maybe<ImageFilter>
}

export type SwatchSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  colorName?: Maybe<SortOrder>
  swatchImage?: Maybe<ImageSorting>
}

export interface TagBadge {
  __typename: 'TagBadge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** The tag to match from Shopify */
  tag?: Maybe<Scalars['String']>
  /** (optional) An alternate label to display in the badge */
  label?: Maybe<Scalars['String']>
}

export type TagBadgeFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  tag?: Maybe<StringFilter>
  label?: Maybe<StringFilter>
}

export type TagBadgeSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  tag?: Maybe<SortOrder>
  label?: Maybe<SortOrder>
}
