import * as React from 'react'
import { groupBy, prop } from 'ramda'
import { IoIosListBox } from 'react-icons/io'
import { BlockPreview } from '../components/BlockPreview'
import { getReferencedDocument, getShopifyThumbnail } from '../utils'

const getPreviewValues = async ({ label, link: previewLink }) => {
  if (!previewLink || !previewLink.document || !previewLink.document._ref)
    return { title: 'Missing Link' }
  const linkedDoc = await getReferencedDocument(previewLink.document._ref)

  const subtitles = [
    linkedDoc ? `🔗${linkedDoc.title}` : null,
    linkedDoc && linkedDoc.archived === true
      ? `🛑 This collection is archived and will not be displayed on the site.`
      : undefined,
  ].filter(Boolean)

  const shopifyThumbnail =
    linkedDoc &&
    (linkedDoc._type === 'shopifyProduct' ||
      linkedDoc._type === 'shopifyCollection')
      ? getShopifyThumbnail(linkedDoc)
      : undefined

  return {
    title: label || linkedDoc.title,
    subtitles,
    src: shopifyThumbnail,
  }
}

export const MenuLink = {
  name: 'menuLink',
  type: 'object',
  title: 'Nav Link',
  fields: [
    {
      title: 'Link',
      name: 'link',
      type: 'cta',
    },
  ],
  preview: {
    select: {
      link: 'link',
      label: 'label',
    },
    prepare: (val) => val,
    component: (props) => (
      <BlockPreview {...props} getPreviewValues={getPreviewValues} />
    ),
  },
}

export const linkGroup = {
  title: 'Link Group',
  name: 'linkGroup',
  type: 'object',
  fields: [
    {
      title: 'Group Title',
      name: 'title',
      description:
        '(optional) A light gray header that appears above the list of links',
      type: 'string',
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      validation: (Rule) => Rule.required().max(12),
      of: [{ type: 'internalLink' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      links: 'links',
    },
    prepare: ({ title, links }) => {
      return {
        title,
        subtitle: links.length
          ? `🔗 ${links.length} link${links.length === 1 ? '' : 's'}`
          : undefined,
      }
    },
  },
}

export const submenuSection = {
  title: 'Submenu Section',
  name: 'submenuSection',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{ type: 'richPageLink' }, { type: 'linkGroup' }],
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'richImage' }],
    },
  ],
}

export const subMenu = {
  title: 'Dropdown Menu',
  name: 'subMenu',
  type: 'object',
  icon: IoIosListBox,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Submenu Sections',
      name: 'columns',
      type: 'array',
      of: [{ type: 'submenuSection' }],
      // of: [{ type: 'linkGroup' }, { type: 'richPageLink' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      columns: 'columns',
    },
    prepare: ({ title, columns }) => {
      const byType = groupBy(prop('_type'), columns || {})

      const { richPageLink: richPageLinks, linkGroup: linkGroups } = byType

      const subtitle = [
        richPageLinks && richPageLinks.length
          ? `${richPageLinks.length} Page Link${
              richPageLinks.length === 1 ? '' : 's'
            }`
          : undefined,
        linkGroups && linkGroups.length
          ? `${linkGroups.length} Link Group${
              linkGroups.length === 1 ? '' : 's'
            }`
          : undefined,
      ]
        .filter(Boolean)
        .join(' | ')
      return {
        title,
        subtitle,
      }
    },
  },
}
