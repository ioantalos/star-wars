describe('Characters Page', () => {
  beforeEach(()=>{
    cy.visit('/');
  })

  it('Visit the /characters route by default', () => {
    cy.url().should('includes', 'characters');
  });

  it('Header title should be present and specific', () => {
    cy.get('[data-testid="header-title"]').contains('The Star Wars App');
  });
})
