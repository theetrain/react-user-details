import { test, expect } from '@playwright/test'

test('load page (smoke test)', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'User Directory' })
  ).toBeVisible()
})

test('navigate back and forth one page', async ({ page, browserName }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'User Directory' })
  ).toBeVisible()

  const nextLink = await page.getByRole('link', { name: /next/i })
  expect(nextLink).toBeVisible()

  await nextLink.focus()
  await expect(nextLink).toBeFocused()

  // Navigate to page 2
  await page.keyboard.press('Enter')
  await page.waitForURL('**/?page=2')
  await expect(nextLink).toBeFocused()

  // Check contents
  expect(await page.getByText(/Page 2 of /i)).toBeVisible()
  expect(
    await page.getByRole('heading', { name: 'Valeria McRoberts' })
  ).toBeVisible()

  // Navigate back to page 1
  const prevLink = page.getByRole('link', { name: /previous/i })
  await prevLink.focus()
  await expect(prevLink).toBeFocused()
  await page.keyboard.press('Enter')
  await page.waitForURL('**/?page=1')

  // Check page 1 contents
  expect(await page.getByText(/Page 1 of /i)).toBeVisible()
  expect(
    await page.getByRole('heading', { name: 'Norton Berwick' })
  ).toBeVisible()
})
