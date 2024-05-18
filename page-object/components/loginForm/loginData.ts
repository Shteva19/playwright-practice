import { expect, type Locator,type Page } from "@playwright/test";


    export class LoginData{
        readonly page: Page;
        readonly validEmail: Locator;
        readonly validPassword: Locator;
        readonly validName: Locator;
        readonly validLastName: Locator;
       readonly validReEnterPassword:Locator;
       
        
       


        constructor(page:Page){
            this.page =page;
            this.validName = page.locator('#signupName');
            this.validLastName = page.locator('#signupLastName');
            this.validEmail = page.locator('#signupEmail');
            this.validPassword = page.locator('#signupPassword');
            this.validReEnterPassword =page.locator("#signupRepeatPassword");
            
             


        }

        async loginRegistrationForm (name:string,lastName:string,email:string,password:string,reEnterPassword:string){
           await this.validName.fill(name);
           await this.validLastName.fill(lastName);
           await this.validEmail.fill(email);
           await this.validPassword.fill(password);
           await this.validReEnterPassword.fill(reEnterPassword);
           
        }
        async inputName(name:string){
            await this.validName.fill(name); 
           
        }
        async inputLastName(lastName:string){
            await this.validLastName.fill(lastName);
        }
        async focusLastName(lastName:string){
            await this.validLastName.focus;
        }
        async inputEmail(email:string){
            await this.validEmail.fill(email);

        }
        async inputPassword(email:string){
            await this.validPassword.fill(email);

        }async inputRepPassword(email:string){
            await this.validReEnterPassword.fill(email);

        }
       



    }
