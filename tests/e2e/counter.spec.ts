import { expect, test } from '@playwright/test'

test('Counter', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  let countDisplay = await page.locator('[data-test-id="count-display"]').textContent()
  expect(countDisplay).toBe('Count: 0')
  await page.locator('[data-test-id="count-inc-btn"]').click()
  countDisplay = await page.locator('[data-test-id="count-display"]').textContent()
  expect(countDisplay).toBe('Count: 1')
  await page.locator('[data-test-id="count-dec-btn"]').click()
  countDisplay = await page.locator('[data-test-id="count-display"]').textContent()
  expect(countDisplay).toBe('Count: 0')

  page.close()
})
