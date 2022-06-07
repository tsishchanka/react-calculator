/// <reference types="cypress"/>

describe('React Calculator', () => {
  it('Header', () => {
    cy.visit('/');
  });
  it('locating elements', () => {
    cy.contains('a', 'Home');
    cy.contains('a', 'Settings');
    cy.contains('h1', 'Calculator App');
  });
  it('link to Settings page', () => {
    cy.contains('a', 'Settings').click();
  });
  it('link to Home page', () => {
    cy.contains('a', 'Home').click();
  });
});
