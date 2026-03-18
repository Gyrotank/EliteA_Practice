import { test, expect } from '@playwright/test';

test('EPAM: navigate to Client Work via Services menu', async ({ page }) => {
  // 1. Navigate to EPAM homepage
  await page.goto('https://www.epam.com/');

  // 2. Open the header 'Services' menu (click/expand)
  await page.click('text=Services');

  // 3. Click the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');

  // 4. Verify the "Client Work" text is visible on the resulting page
  await expect(page.locator('text=Client Work')).toBeVisible({ timeout: 10000 });
});
