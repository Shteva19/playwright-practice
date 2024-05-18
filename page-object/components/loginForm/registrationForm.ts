import { Expect, type Locator, type Page } from "@playwright/test";


export class RegistrationForm{
readonly page :Page;
readonly signUpButton : Locator;

constructor(page : Page) {
    this.page = page;
    this.signUpButton = page.getByRole ('button',{name:'Sign up'});
}
async clickSignUpButton(){
await this.signUpButton.click();


}
}