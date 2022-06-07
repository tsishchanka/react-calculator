/// <reference types="cypress"/>

describe('Settings', () => {
  beforeEach(() => {
    cy.visit('/settings');
    cy.window();
  });

  it('settings buttons', () => {
    cy.get('button').contains('Clear All History');
    cy.get('select');

    // get all elements by className
    cy.get('.hvXDqs');
  });

  it('locating elements', () => {
    cy.contains('h1', 'Calculator App');
    cy.contains('a', 'Home');
    cy.contains('a', 'Settings');
    cy.contains('Colored Theme');
    cy.contains('Light Theme');
    cy.contains('Dark Theme');
  });

  it('select theme', () => {
    cy.get('option:first').should('be.selected');
    cy.get('select')
      .select('Dark Theme')
      .should('have.value', 'darkTheme')
      .select('Light Theme')
      .should('have.value', 'lightTheme')
      .select('Colored Theme')
      .should('have.value', 'coloredTheme');
  });
});
