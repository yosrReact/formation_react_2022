Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: Cypress.env("urlBackend") + "/auth/login",
    body: {
      email: "yosrisamm1@gmail.com",
      password: "123456",
    },
  }).then((resp) => {
    window.localStorage.setItem("token", resp.body.token)
  })
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
