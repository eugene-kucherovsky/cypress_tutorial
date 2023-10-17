/// <reference  types="cypress" />
import "./commands";

type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';

declare global {
  namespace Cypress {
    interface Chainable {
      getByTestId(value: string): Chainable<JQuery<HTMLElement>>;
      interceptRequest(method: Method): Chainable<null>;
      mount: typeof mount;
    }
  }
}
