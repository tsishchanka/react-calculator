describe('React Calculator', () => {
  it('Header', () => {
    cy.visit('/');
  });

  it('evaluate', () => {
    //  equal to 7
    cy.contains('button', '1').click();
    cy.get('input#formula[value=""]');
    cy.contains('button', '+').click();
    cy.get('input#formula[value="1"]');
    cy.contains('button', '6').click();
    cy.get('input#formula[value="1+"]');
    cy.contains('button', '=').click();
    cy.get('input#current-value[value="7"]');

    cy.contains('button', 'C').click();
    cy.get('input#current-value[value="0"]');

    //  decimal and rounding 0.000
    cy.contains('button', '.').click();
    cy.get('input#formula[value=""]');
    cy.get('input#current-value[value="0."]');
    cy.contains('button', '1').click();
    cy.get('input#formula[value=""]');
    cy.contains('button', '/').click();
    cy.get('input#formula[value="0.1"]');
    cy.contains('button', '3').click();
    cy.get('input#formula[value="0.1/"]');
    cy.contains('button', '=').click();
    cy.get('input#current-value[value="0.033"]');

    //  equal to 2
    cy.contains('button', '(').click();
    cy.get('input#current-value[value="("]');
    cy.contains('button', '5').click();
    cy.get('input#current-value[value="5"]');
    cy.contains('button', '-').click();
    cy.get('input#current-value[value="-"]');
    cy.contains('button', '1').click();
    cy.get('input#current-value[value="1"]');
    cy.contains('button', ')').click();
    cy.get('input#current-value[value=")"]');
    cy.contains('button', '/').click();
    cy.get('input#current-value[value="/"]');
    cy.contains('button', '2').click();
    cy.get('input#current-value[value="2"]');
    cy.contains('button', '=').click();
    cy.get('input#current-value[value="0.066"]');

    cy.contains('button', 'C').click();
    cy.get('input#current-value[value="0"]');
  });

  it('Fill history list', () => {
    cy.contains('0.033*(5-1)/2=0.066').should('be.visible');
    cy.contains('1+6=7').should('be.visible');
  });

  it('change an operator', () => {
    cy.contains('button', '0').click();
    cy.get('input#formula[value=""]');
    cy.get('input#current-value[value="0"]');
    cy.contains('button', '+').click();
    cy.get('input#formula[value="0"]');
    cy.get('input#current-value[value="+"]');
    cy.contains('button', '/').click();
    cy.get('input#formula[value="0"]');
    cy.get('input#current-value[value="/"]');
    cy.contains('button', '*').click();
    cy.get('input#formula[value="0"]');
    cy.get('input#current-value[value="*"]');
    cy.contains('button', '-').click();
    cy.get('input#formula[value="0"]');
    cy.get('input#current-value[value="-"]');
    cy.contains('button', '5').click();
    cy.get('input#formula[value="0-"]');
    cy.get('input#current-value[value="5"]');
    cy.contains('button', '=').click();
    cy.get('input#current-value[value="-5"]');
  });
});
