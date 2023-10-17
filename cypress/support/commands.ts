Cypress.Commands.add("getByTestId", (value) => {
  return cy.get(`[data-testid="${value}"]`);
});

Cypress.Commands.add('interceptRequest', (method) => {
  cy.intercept({ method, path: '/add/api/path/here' }, (req) => {
    req.alias = method;
  })
})

export {};
