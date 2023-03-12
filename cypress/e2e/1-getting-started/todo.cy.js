/// <reference types="cypress" />


describe('example sauce demo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('login success', () => {
   cy.get('[data-test="username"]').type('standard_user')
   cy.get('[data-test="password"]').type('secret_sauce')
   cy.get('[data-test="login-button"]').click()
   cy.get('.title').contains('produit').should('be.visible')
   
  })

  it('login failed', () => {
    cy.get('[data-test="username"]').type('standard_users')
    cy.get('[data-test="password"]').type('secret_sauces')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').click()
  })

  it.skip('login failed', () => {
    cy.get('[data-test="username"]').type('standard_users')
    cy.get('[data-test="password"]').type('secret_sauces')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').click()
  })


})