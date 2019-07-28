const path = require('path')
import { Shopify } from './types'
const Shopify: Shopify = require('shopify-api-node')

require('dotenv').config({
	path: path.resolve(__dirname, '..', '.env'),
})

// @ts-ignore
export const newStore = new Shopify({
	shopName: 'jemmawynne-development',
	apiKey: process.env.SHOPIFY_ADMIN_KEY,
	password: process.env.SHOPIFY_ADMIN_PASSWORD,
})