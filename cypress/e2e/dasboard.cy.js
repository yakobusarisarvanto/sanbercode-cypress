import * as objects from "./objects/loginPage.js";
import * as objectsDs from "./objects/dashboard.js";

before(() => {
    cy.config("defaultCommandTimeout",2000)
  })

describe('Saucedemo - Dashboard', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.wait(1000)
        cy.get(objects.input_username).type("standard_user");
        cy.get(objects.input_password).type("secret_sauce");
        cy.get(objects.btn_login).click();
    })

    it('User - Success Add to Chart', () => {
        cy.get(objectsDs.btn_addToCart).click();
        cy.get(objectsDs.notif_badgeCart).should('be.visible');
    })

    it('User - Success Remove Add to Chart', () => {
        cy.get(objectsDs.btn_addToCart).click();
        cy.get(objectsDs.notif_badgeCart).should('be.visible');
        cy.get(objectsDs.btn_remove_addToCart).click();
        cy.get(objectsDs.notif_badgeCart).should('not.exist');
    })
})