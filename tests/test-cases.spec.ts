// npx playwright test test-cases.spec.ts --headed
import { test, expect } from '@playwright/test';
import { homepage } from '../pages/homepage.ts';
import { login_page } from '../pages/login-signup-page.ts';
import { view_cart } from '../pages/view-cart.ts';
import { product_details } from '../pages/product-details.ts';
import { signup_form } from '../pages/signup-form.ts';
import { product_page } from '../pages/products-page.ts';



test('Login and Buy Product ', async ({ page }) => {

  const Home = new homepage(page);
  const Login = new login_page(page);

  const Product = new product_page(page);

  const prod_details = new product_details(page);

  const v_cart = new view_cart(page);

  await Home.open_signup_page();

  await Login.login_user('arslanapple27@gmail.com', '123456');

  await page.waitForTimeout(7000);

  await Home.verify_user_login('Arslan Ali');

  await Home.open_products_page();

  await page.waitForTimeout(7000);

  await Product.search_product('winter top');

  await page.waitForTimeout(5000);

  await Product.view_product();

  await page.waitForTimeout(5000);

  await prod_details.add_to_cart();

  await page.waitForTimeout(5000);

  await prod_details.view_cart();

  await page.waitForTimeout(5000);

  await v_cart.payment_submission('QA Testing by Arslan Ali for ShipIn assignment','Arslan Ali','4242424242424242','123','02','2028');

  await page.waitForTimeout(20000);

});



test.skip('Signup the User', async ({ page }) => {

  const Home = new homepage(page);
  const Login = new login_page(page);
  const Signup = new signup_form(page);

  await Home.open_signup_page();
  await Login.signup_user('Test User 2', 'arslanapple28@gmail.com');
  await Signup.create_account('Male', '123456', '17', 'February', '1988', 'Arslan', 'Ali', 'ShipIn', 'Tech Society', 'Canal Bank', 'United States', 'California', 'Los Angeles', '54000', '03334341835');

  // await page.pause();

  await page.waitForTimeout(30000);

});


test.skip('Login the User', async ({ page }) => {

  const Home = new homepage(page);
  const Login = new login_page(page);

  await Home.open_signup_page();

  await Login.login_user('arslanapple27@gmail.com', '123456');

  await page.waitForTimeout(30000);

  await Home.verify_user_login('Arslan Ali');

  // await page.pause();

  await page.waitForTimeout(20000);

});


test.skip('Verify Page Title', async ({ page }) => {

  const Home = new homepage(page);

  await Home.open_home_page();

  await expect(page).toHaveTitle(/Automation Exercise/); // Expect a title "to contain" a substring.

  await page.waitForTimeout(30000);

});