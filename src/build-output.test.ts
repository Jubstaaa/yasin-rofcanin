import { beforeAll, describe, expect, test } from 'bun:test'
import { mkdtempSync, readFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { build } from 'astro'

import { CDN_BASE_URL } from '@/lib/image-url'

let html = ''

beforeAll(async () => {
    const outDir = mkdtempSync(join(tmpdir(), 'astro-dist-'))
    await build({
        logLevel: 'error',
        outDir: outDir,
        root: fileURLToPath(new URL('..', import.meta.url)),
    })
    html = readFileSync(join(outDir, 'index.html'), 'utf8')
}, 120_000)

async function collect(selector: string, attribute: string) {
    const values: (string | null)[] = []
    await new HTMLRewriter()
        .on(selector, {
            element(element) {
                values.push(element.getAttribute(attribute))
            },
        })
        .transform(new Response(html))
        .text()
    return values
}

describe('built homepage', () => {
    test('has exactly one h1', async () => {
        expect(await collect('h1', 'class')).toHaveLength(1)
    })

    test('gives every image an alt attribute', async () => {
        const alts = await collect('img', 'alt')
        expect(alts.length).toBeGreaterThan(0)
        expect(alts.every(alt => alt !== null)).toBe(true)
    })

    test('serves images from the CDN and ships no runtime icon loader', async () => {
        const sources = await collect('img', 'src')
        expect(sources.every(src => src?.startsWith(CDN_BASE_URL))).toBe(true)
        expect(html).not.toContain('api.iconify.design')
    })

    test('links every menu entry to an existing section', async () => {
        const targets = (await collect('nav a', 'href')).filter(Boolean) as string[]
        const ids = await collect('[id]', 'id')
        expect(targets.length).toBeGreaterThan(0)
        for (const target of targets) expect(ids).toContain(target.slice(1))
    })
})
