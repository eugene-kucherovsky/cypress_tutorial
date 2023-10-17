// https://docs.cypress.io/guides/references/configuration
const { defineConfig } = require("cypress");

// defaultCommandTimeout: 10000
module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
