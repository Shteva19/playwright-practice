import { expect, type Locator, type Page } from "@playwright/test";

export class outerHeader{
    readonly page: Page;
    readonly signInButton:Locator;


    constructor(page: Page){
        this.page = page;
        this.signInButton = page.getByRole('button',{ name:'Sign in'});
        


    }

    async clickSignInButton(){
        await this.signInButton.click();



    }


}