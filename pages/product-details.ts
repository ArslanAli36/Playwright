import { expect, type Locator, type Page } from '@playwright/test';


export class product_details {
  
  page: Page;
  quantity: Locator;
  add_to_cart_button: Locator;
  view_cart_link: Locator;
  continue_shopping_button: Locator;


  constructor(page: Page) {
    
    this.page = page;
    this.quantity = page.locator('#quantity');
    this.add_to_cart_button = page.locator('button', { hasText: ' Add to cart ' });
    this.view_cart_link = page.locator('a', { hasText: 'View Cart' });
    this.continue_shopping_button = page.locator('button', { hasText: 'Continue Shopping' });


  }


  async add_to_cart(){

    await this.add_to_cart_button.click();


  }

   async view_cart(){

    await this.view_cart_link.click();


  }

   async continue_shopping(){

    await this.continue_shopping_button.click();


  }
  

}