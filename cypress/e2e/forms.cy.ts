describe("Forms page test", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("form subscribe test", () => {
    cy.contains(/testing forms/i);
    cy.get('[data-testid="input-email"]').find("input").as("input-email");
    cy.wait(500).get("@input-email").type("test@gmail.com");
    cy.contains(/Successfully subbed: test@gmail.com!/i).should("not.exist");

    // cy.wait(500).get('[data-testId="btn-subscribe"]').click()
    cy.getByTestId("btn-subscribe").click();
    cy.contains(/Successfully subbed: test@gmail.com!/i).should("exist");

    cy.wait(3000)
    cy.contains(/Successfully subbed: test@gmail.com!/i).should('not.exist')

    cy.get('@input-email').type('test@gmail.io')
    cy.contains(/invalid email: test@gmail.io!/i).should('not.exist')
    cy.getByTestId("btn-subscribe").click();
    cy.contains(/invalid email: test@gmail.io!/i).should('exist')
    cy.wait(3000)
    cy.contains(/invalid email: test@gmail.io!/i).should('not.exist')

    // click on empty input
    cy.contains(/fail!/i).should('not.exist')
    cy.getByTestId("btn-subscribe").click();
    cy.contains(/fail!/i).should('exist')
  });
});
