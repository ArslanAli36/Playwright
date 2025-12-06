import { expect, type Locator, type Page } from '@playwright/test';


export class homepage {
  
  page: Page;
  login_signup_link: Locator;
  user_name: Locator;
  products_page_link: Locator;


  constructor(page: Page) {
    
    this.page = page;
    this.login_signup_link = page.locator('a', { hasText: ' Signup / Login' });
    this.products_page_link = page.locator('a', { hasText: ' Products' });
    this.user_name = page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[10]/a/b');


  }

  
  async open_home_page() {

    await this.page.goto('https://www.automationexercise.com/');
  }

  async open_signup_page() {

    await this.page.goto('https://www.automationexercise.com/');
 
    await this.login_signup_link.click();


  }

  async open_products_page() {

  //  await this.page.goto('https://www.automationexercise.com/');
    await this.products_page_link.click();

  }

  async verify_user_login(user_name: string){

    await expect(this.user_name).toHaveText(user_name);
   

  }

}