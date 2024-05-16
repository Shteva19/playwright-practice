import {test, expect } from "@playwright/test";
import { outerHeader } from "../page-object/components/outerHeader";


test.describe('Login test',()  => {
    let OuterHeader:outerHeader;


    test.beforeEach (async ({ page }) => {
await page.goto('/');
OuterHeader = new outerHeader (page);
    })
    test ('Login with correct credentials', async ({ page }) => {
        await outerHeader.clickSignInButton();
         
        
})