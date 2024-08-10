const { test, expect } = require('@playwright/test');
const testData = require('../../fixtures/loginFixture.json');
import { LoginPage } from '../../pageObjects/login.po.js';
//import { ContactPage } from "../pageObjects/contactFill.po.js";

test.describe.configure({ timeout:60000 });
test.describe.configure({ mode: "serial" });
test.describe("Go to Page and Login", () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto("https://mbshbookstore.com/");
    await login.userButton();
  });

  // test.only("Login using all valid credentials", async ({ page }) => {
  //   const login = new LoginPage(page);
  //   await login.login(testData.validUser.email, testData.validUser.password);
  //   await login.loginButton();
  //   await page.goto('https://mbshbookstore.com/');
  // });

  test("Login using invalid email and invalid password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.invalidUser.invalidEmail, testData.invalidUser.invalidPassword);
    await login.loginButton();
  });

  test("Login using valid email and invalid password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.invalidUser.email, testData.invalidUser.invalidPassword);
    await login.loginButton();
  });

  test("Login using invalid email and valid password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.invalidUser.invalidEmail, testData.invalidUser.password);
    await login.loginButton();
  });

  test("Login using empty email and empty password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.invalidUser.emptyEmail, testData.invalidUser.emptyPassword);
    await login.loginButton();
  });

  test("Login using valid email and empty password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.invalidUser.email, testData.invalidUser.emptyPassword);
    await login.loginButton();
  });

  test("Login using empty email and valid password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.invalidUser.emptyEmail, testData.invalidUser.password);
    await login.loginButton();
  });

  test("Login using invalid email and empty password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.invalidUser.invalidEmail, testData.invalidUser.emptyPassword);
    await login.loginButton();
  });

  test("Login using empty email and invalid password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.invalidUser.emptyEmail, testData.invalidUser.invalidPassword);
    await login.loginButton();
  });

});