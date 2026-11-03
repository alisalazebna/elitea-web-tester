import { test, expect } from '@playwright/test';

test.describe('EPAM Client Work navigation', () => {
  test('opens Client Work from the Services menu', async ({ page }) => {
    await page.goto('https://www.epam.com/');

    const acceptAllCookies = page.getByRole('button', { name: 'Accept All' });
    if (await acceptAllCookies.isVisible()) {
      await acceptAllCookies.click();
    }

    const services = page.locator('a.top-navigation__item-link[href="/services"]');
    await expect(services).toBeVisible();
    await services.hover();

    await page
      .getByRole('link', { name: 'Explore Our Client Work', exact: true })
      .click();

    await expect(page).toHaveURL(/\/services\/client-work$/);
    await expect(page.getByRole('heading', { name: 'Client Work', exact: true })).toBeVisible();
  });
});
