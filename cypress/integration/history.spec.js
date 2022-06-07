describe('History component', () => {
  it('should have a nav links', () => {
    cy.visit('/');
    // cy.get('h1').should('have.text', 'Calculator App')
  });

  it('locating elements', () => {
    cy.contains('History');
  });

  it('Fill history list', () => {
    cy.contains('button', '5').click();
    cy.contains('button', '1').click();
    cy.contains('button', '-').click();
    cy.contains('button', '2').click();
    cy.contains('button', '=').click();
    cy.contains('button', 'C').click();
    cy.contains('button', '-').click();
    cy.contains('button', '8').click();
    cy.contains('button', '/').click();
    cy.contains('button', '2').click();
    cy.contains('button', '=').click();
    cy.contains('button', '-').click();
    cy.contains('button', '5').click();
    cy.contains('button', '*').click();
    cy.contains('button', '2').click();
    cy.contains('button', '=').click();

    cy.contains('51-2=49').should('be.visible');
    cy.contains('-8/2=-4').should('be.visible');
    cy.contains('-4-5*2=-14').should('be.visible');
  });

  it('Control Panel Toggle History', () => {
    cy.contains('History').should('be.visible');
    cy.get('button.coquYf').click();
    cy.get('button.coquYf').click();
    cy.contains('History').should('be.visible');
  });
});
