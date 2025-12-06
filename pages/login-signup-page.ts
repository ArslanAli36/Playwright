import { expect, type Locator, type Page } from '@playwright/test';


export class login_page {
  
  page: Page;

  login_email: Locator;
  login_pss: Locator;
  login_button: Locator;
  signup_name: Locator;
  signup_email: Locator;
  signup_button: Locator;

  constructor(page: Page) {
    
    this.page = page;

    this.login_email= page.locator('//*[@id="form"]/div/div/div[1]/div/form/input[2]');
    this.login_pss= page.getByPlaceholder('Password');
    this.login_button= page.locator('button', { hasText: 'Login' });
    
   this.signup_name= page.getByPlaceholder('Name');
   this.signup_email= page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[3]');
   this.signup_button= page.locator('button', { hasText: 'Signup' });

  }


  async login_user(email: string, pss: string){

    await this.login_email.fill(email);
    await this.login_pss.fill(pss);
    await this.login_button.click();


  }
  
async signup_user(name: string, email: string){

     await this.signup_name.fill(name);
     await this.signup_email.fill(email);
     await this.signup_button.click();

}

 




}