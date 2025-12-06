import { expect, type Locator, type Page } from '@playwright/test';


export class view_cart {

  page: Page;

  proceed_to_check_out_link: Locator;

  add_comment: Locator;

  place_order_link: Locator;

  name_on_card: Locator;

  card_number: Locator;

  cvc_input: Locator;

  expiry_month: Locator;

  expiry_year: Locator;

  pay_confirm_button: Locator;

  download_invoice_button: Locator;

  continue_button: Locator;


  constructor(page: Page) {

    this.page = page;

    this.proceed_to_check_out_link = page.locator('a', { hasText: 'Proceed To Checkout' });
    this.add_comment = page.locator('//*[@id="ordermsg"]/textarea');
    this.place_order_link = page.locator('a', {hasText: 'Place Order'});
    this.name_on_card = page.locator('//*[@id="payment-form"]/div[1]/div/input');
    this.card_number = page.locator('//*[@id="payment-form"]/div[2]/div/input');
    this.cvc_input = page.getByPlaceholder('ex. 311');
    this.expiry_month = page.getByPlaceholder('MM');
    this.expiry_year = page.getByPlaceholder('YYYY');
    this.pay_confirm_button = page.locator('#submit');
    this.download_invoice_button = page.locator('a', {hasText: 'Download Invoice'});
    this.continue_button = page.locator('a', {hasText: 'Continue'});


  }

  async payment_submission(comment: string, name: string, number: string, cvc: string, month: string, year: string) {


    await this.proceed_to_check_out_link.click();
    await this.add_comment.fill(comment);
    await this.page.waitForTimeout(5000);
    await this.place_order_link.click();
    await this.name_on_card.fill(name);
    await this.card_number.fill(number);
    await this.cvc_input.fill(cvc);
    await this.expiry_month.fill(month);
    await this.expiry_year.fill(year);
    await this.pay_confirm_button.click();

    await this.page.waitForTimeout(5000);

 //   await this.download_invoice_button.click();

    await this.continue_button.click();


  }



}