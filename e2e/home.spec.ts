import { test, expect } from '@playwright/test'

test('load page (smoke test)', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await expect(
    page.getByRole('heading', { name: 'User Directory' })
  ).toBeVisible()
})

test('navigate back and forth one page', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await expect(
    page.getByRole('heading', { name: 'User Directory' })
  ).toBeVisible()

  const nextLink = page.getByRole('link', { name: /next/i })
  expect(nextLink).toBeVisible()

  // Navigate to the page 2
  await page.keyboard.press('Tab')
  await expect(nextLink).toBeFocused()
  await page.keyboard.press('Enter')
  await page.waitForURL('**/?page=2')

  // Check contents
  expect(await page.getByText('Page 2 of ')).toBeVisible()
  expect(
    await page.getByRole('heading', { name: 'Valeria McRoberts' })
  ).toBeVisible()

  // Navigate back to page 1
  await page.keyboard.press('Shift+Tab')
  await expect(page.getByRole('link', { name: /previous/i })).toBeFocused()
  await page.keyboard.press('Enter')
  await page.waitForURL('**/?page=1')

  // Check page 1 contents
  expect(await page.getByText('Page 1 of ')).toBeVisible()
  expect(
    await page.getByRole('heading', { name: 'Norton Berwick' })
  ).toBeVisible()
})
