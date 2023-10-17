describe("Various examples", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });

  // some guy cut me off on my drive today

  it("multi-page testing", () => {
    // get('[data-testid="nav-why-cypress"]')
    cy.getByTestId("nav-why-cypress").click();
    cy.location("pathname").should("equal", "/");

    cy.getByTestId("nav-overview").click();
    cy.location("pathname").should("equal", "/overview");

    cy.getByTestId("nav-fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals");

    cy.getByTestId("nav-forms").click();
    cy.location("pathname").should("equal", "/forms");
  });
  it("intercepts", () => {
    // working
    // cy.intercept("POST", 'http://localhost:3000/examples', {
    //     body: {message: 'successfuly intercepted'}
    // })
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    });
    cy.getByTestId("btn-post").click();
  });

  // https://docs.cypress.io/api/commands

  it.only("grudges", () => {
    // data-testid="input-grudge"

    cy.contains(/add some grudges/i);
    cy.getByTestId("grudge-list-title").should("have.text", "Add Some Grudges");

    cy.getByTestId("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });

    cy.getByTestId("btn-clear").should("not.exist");

    cy.getByTestId("input-grudge").within(() => {
      cy.get("input").type("some grudge");
    });

    cy.getByTestId("btn-add-grudge").click();

    cy.getByTestId("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });

    cy.wait(500).getByTestId("btn-clear").should("exist");

    cy.getByTestId("grudge-list-title").should("have.text", "Grudges");

    // добавляем в список ещё одну
    cy.getByTestId("input-grudge").within(() => {
      cy.get("input").type("grudge number 2");
    });

    cy.getByTestId("btn-add-grudge").click();

    cy.getByTestId("grudge-list").within(() => {
      cy.get("li").should("have.length", 2);
      cy.get("li").its(0).should("contains.text", "some grudge");
      cy.get("li").its(1).should("contains.text", "grudge number 2");
    });
    // ----------------------------

    cy.getByTestId("grudge-list").within(() => {
      cy.get("li")
        .its(0)
        .within(() => {
          cy.get("button").click();
        });
    });

    cy.getByTestId("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });

    cy.wait(500).getByTestId("btn-clear").click();

    cy.getByTestId("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });

    cy.getByTestId("btn-clear").should("not.exist");
  });
});
