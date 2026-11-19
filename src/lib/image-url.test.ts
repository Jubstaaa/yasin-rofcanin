import { describe, expect, test } from 'bun:test'

import { CDN_BASE_URL, imageUrl } from './image-url'

describe('imageUrl', () => {
    test('points at the images folder of the CDN space', () => {
        expect(imageUrl('hero.webp')).toBe(
            'https://yasinrofcanin.fra1.cdn.digitaloceanspaces.com/images/hero.webp',
        )
    })

    test('uses the shared CDN base', () => {
        expect(imageUrl('a.webp').startsWith(`${CDN_BASE_URL}/images/`)).toBe(true)
    })
})
