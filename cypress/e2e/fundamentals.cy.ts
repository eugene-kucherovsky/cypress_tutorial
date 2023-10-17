describe("Fundamentals page test", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });

  it("Contains correct header text", () => {
    cy.getByTestId("fundamentals-header").should(
      "contain.text",
      "Testing Fundamentals"
    );
  });

  it("Accordion works correctly", () => {
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );

    cy.wait(500).getByTestId("accordion-item-1").click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible"
    );
    cy.wait(500).get('[data-testid="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
  });
});



// https://docs.cypress.io/api/table-of-contents#Assertions

// cy.exec() - to run system commands
// cy.task() - to run code in Node via the setupNodeEvents function

// POST request example
// cy.request('POST', '/test/seed/post', {
//   title: 'First Post',
//   authorId: 1,
//   body: '...',
// })
