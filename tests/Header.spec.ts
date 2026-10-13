import { test, expect } from '@playwright/test';

test.describe('Header Component', () => {
    test('should display logo and navigation links correctly', async ({ page }) => {
        await page.goto('/');

        // Check logo
        const header = page.locator('header');
        const logo = header.locator('img');
        await expect(logo).toBeVisible();

        // Check navigation links in header context
        await expect(header.locator('text=Services')).toBeVisible();
        await expect(header.locator('text=Our Process')).toBeVisible();
        await expect(header.locator('text=Reviews')).toBeVisible();
        await expect(header.locator('text=Contact').first()).toBeVisible();

        // Check CTA button
        const ctaBtn = page.locator('text=Get a Quote');
        await expect(ctaBtn).toBeVisible();
    });
});
