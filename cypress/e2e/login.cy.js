import * as objects from "./objects/loginPage.js";

before(() => {
  cy.config("defaultCommandTimeout",2000)
})

describe('Saucedemo - Login', () => {
  it('User - Success Login', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.wait(1000)
    cy.get(objects.input_username).type("standard_user");
    cy.get(objects.input_password).type("secret_sauce");
    cy.get(objects.btn_login).click();
    cy.wait(2000)
    cy.get(objects.img_logo).should('be.visible');

  })

  it('User - Invalid Password', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.wait(1000)
    cy.get(objects.input_username).type("standard_user");
    cy.get(objects.input_password).type("password");
    cy.get(objects.btn_login).click();
    cy.wait(2000)
    cy.get(objects.error_alert).should('be.visible');
  })

  it('User - Invalid Username', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.wait(1000)
    cy.get(objects.input_username).type("user_standar");
    cy.get(objects.input_password).type("secret_sauce");
    cy.get(objects.btn_login).click();
    cy.wait(2000)
    cy.get(objects.error_alert).should('be.visible');
  })
})
