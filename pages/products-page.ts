import { expect, type Locator, type Page } from '@playwright/test';


export class product_page {
  
  page: Page;
  search_product_input: Locator;
  search_button: Locator;
  view_product_link: Locator;


  constructor(page: Page) {
    
    this.page = page;
    this.search_product_input = page.locator('#search_product');
    this.search_button = page.locator('#submit_search');
    this.view_product_link = page.locator('a', {hasText:'View Product'});

  }

 async search_product(product_name: string){

     await this.search_product_input.fill(product_name);
     await this.search_button.click();
   

  }

 async view_product(){

  await this.view_product_link.click();


  }

  

}