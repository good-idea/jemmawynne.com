import * as React from 'react'
import { BlockPreview } from '../components/BlockPreview'
import { getImageThumbnail, blocksToPlainText } from '../utils'

const getPageBlockPreviewValues = async ({ content }) => {
  const firstImage = content.find((c) => c._type === 'richImage')
  const firstText = content.find((c) => c._type === 'pageText')
  const src = firstImage ? await getImageThumbnail(firstImage) : undefined
  const title = firstText ? firstText.heading : '(no text)'
  const subtitles = firstText ? [blocksToPlainText(firstText.body)] : undefined
  return { title, subtitles, src }
}

export const pageText = {
  title: 'Page Text',
  name: 'pageText',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'body',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      body: 'body',
    },
    prepare: ({ heading, body }) => {
      const plainText = body ? blocksToPlainText(body) : undefined
      const [title, subtitle] = [heading, plainText].filter(Boolean)
      return { title, subtitle }
    },
  },
}

const getRichTextBlockPreviewValues = async (props) => {
  const { content } = props
  const firstImage = content.find((c) => c._type === 'richImage')
  const src = firstImage ? await getImageThumbnail(firstImage) : undefined
  const title = blocksToPlainText(content)
  return { title, src }
}

export const richTextBlock = {
  title: 'Text',
  name: 'richTextBlock',
  type: 'object',
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'richText',
    },
    {
      name: 'textAlign',
      type: 'textAlign',
      title: 'Text Alignment',
    },
  ],

  preview: {
    select: {
      content: 'body',
    },
    prepare: ({ content }) => {
      return { content }
    },
    component: (props) => (
      <BlockPreview
        {...props}
        getPreviewValues={getRichTextBlockPreviewValues}
      />
    ),
  },
}

export const pageBlock = {
  title: 'Page Block',
  name: 'pageBlock',
  type: 'object',
  fields: [
    {
      name: 'backgroundColor',
      type: 'colorPicker',
      title: 'Background Color',
    },
    {
      name: 'textColor',
      type: 'colorPicker',
      title: 'Text Color',
    },

    {
      name: 'layoutOptions',
      type: 'string',
      title: 'Layout Options',
      options: {
        layout: 'radio',
        list: [
          {
            title: 'Normal',
            value: 'normal',
          },
          {
            title: 'Shift background color down',
            value: 'shiftBackgroundColorDown',
          },
          {
            title: 'Shift content down (overlaps with next block)',
            value: 'shiftContentDown',
          },
        ],
      },
    },

    {
      name: 'content',
      type: 'array',
      of: [{ type: 'pageText', isHighlighted: true }, { type: 'richImage' }],
      validation: (Rule) => Rule.max(3),
    },
    {
      name: 'alignment',
      type: 'position',
      title: 'Content Alignment',
    },
  ],
  preview: {
    select: {
      content: 'content',
    },
    component: (props) => (
      <BlockPreview {...props} getPreviewValues={getPageBlockPreviewValues} />
    ),
  },
}

export const page = {
  title: 'Page',
  type: 'document',
  name: 'page',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      label: 'Page URL',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      label: 'Content',
      type: 'array',
      of: [
        { type: 'richTextBlock' },
        { type: 'imageTextSection' },
        { type: 'pageBlock' },
        { type: 'hero' },
        { type: 'carousel' },
        { type: 'collectionGrid' },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
  ],
}
