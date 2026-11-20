import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const BASE = process.env.PREVIEW_URL || 'http://127.0.0.1:5173'
const OUT = process.env.OUT_DIR || '/cursor/stores/bc-61f1e618-faea-483c-b9aa-5bcfe634ef34/media'

async function waitForImages(page) {
  await page.waitForLoadState('networkidle').catch(() => {})
  await page.evaluate(async () => {
    const imgs = [...document.images]
    await Promise.all(
      imgs.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.addEventListener('load', resolve, { once: true })
              img.addEventListener('error', resolve, { once: true })
            }),
      ),
    )
  })
  await page.waitForTimeout(800)
}

async function shot(page, name) {
  const file = path.join(OUT, name)
  await page.screenshot({ path: file, fullPage: false })
  console.log('saved', file)
}

async function goAccueil(page) {
  await page.goto(BASE, { waitUntil: 'domcontentloaded' })
  await page.getByRole('button', { name: /Australia Project — Accueil|Australia Project/i }).first().click().catch(() => {})
  // ensure accueil via brand
  await page.locator('.brand').click()
  await waitForImages(page)
}

async function goVisa(page) {
  // Prefer desktop nav if visible, else mobile
  const desktop = page.locator('.nav-links .nav-link', { hasText: 'Visa' })
  if (await desktop.isVisible().catch(() => false)) {
    await desktop.click()
  } else {
    await page.locator('.menu-toggle').click()
    await page.locator('.mobile-link', { hasText: 'Visa' }).click()
  }
  await page.waitForTimeout(500)
  await waitForImages(page)
}

await mkdir(OUT, { recursive: true })
const browser = await chromium.launch({ headless: true })

// Desktop
{
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  })
  await goAccueil(page)
  await shot(page, 'accueil-desktop.png')
  await goVisa(page)
  await shot(page, 'visa-desktop.png')
  await page.close()
}

// Mobile
{
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  })
  await goAccueil(page)
  await shot(page, 'accueil-mobile.png')
  await goVisa(page)
  await shot(page, 'visa-mobile.png')
  await page.close()
}

await browser.close()
console.log('done')
