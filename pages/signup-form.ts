import { expect, type Locator, type Page } from '@playwright/test';


export class signup_form {
  
  page: Page;
  male_title: Locator;
  female_title: Locator;
  name: Locator;
  email: Locator;
  password: Locator;
  day: Locator;
  month: Locator;
  year: Locator;
  news_letter: Locator;
  special_offer: Locator;
  first_name: Locator;
  last_name: Locator;
  company: Locator;
  address: Locator;
  address_2: Locator;
  country: Locator;
  state: Locator;
  city: Locator;
  zip_code: Locator;
  mobile_no: Locator;
  create_account_button: Locator;
  continue_button: Locator;


  constructor(page: Page) {
    
    this.page = page;
    this.male_title= page.locator('#uniform-id_gender1');
    this.female_title= page.locator('#uniform-id_gender1');
    this.name= page.locator('#name');
    this.email= page.locator('#email');
    this.password= page.locator('#password');
    this.day= page.locator('#days');
    this.month= page.locator('#months');
    this.year= page.locator('#years');
    this.news_letter = page.locator('#newsletter');
    this.special_offer = page.locator('#optin');
    this.first_name = page.locator('#first_name');
    this.last_name = page.locator('#last_name');
    this.company = page.locator('#company');
    this.address = page.locator('#address1');
    this.address_2 = page.locator('#address2');
    this.country = page.locator('#country');
    this.state = page.locator('#state');
    this.city = page.locator('#city');
    this.zip_code = page.locator('#zipcode');
    this.mobile_no = page.locator('#mobile_number');
    this.create_account_button = page.locator('button', { hasText: 'Create Account' });
    this.continue_button = page.locator('button', { hasText: 'Continue' });
  }


  async create_account(gender: string, pss: string, day: string, month: string, year: string, first_name: string, last_name: string, company: string, 

    address: string, address_2:string, country: string, state: string, city: string, zip_code: string, mobile_no: string) {

    if(gender == 'Male')
     
     { await this.male_title.click();}
    
    else(gender == 'Female')
    
    { await this.female_title.click();}

  //  await this.name.fill('');
  //  await this.email.fill('');  
    await this.password.fill(pss);
    await this.day.selectOption(day);
    await this.month.selectOption(month);
    await this.year.selectOption(year);
    await this.news_letter.click();
    await this.special_offer.click();
    await this.first_name.fill(first_name);
    await this.last_name.fill(last_name);
    await this.company.fill(company);
    await this.address.fill(address);
    await this.address_2.fill(address_2);
    await this.country.selectOption(country);
    await this.state.fill(state);
    await this.city.fill(city);
    await this.zip_code.fill(zip_code);
    await this.mobile_no.fill(mobile_no);
  //  await this.create_account_button.click();

  }
  

}