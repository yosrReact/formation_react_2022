// describe("login page", () => {
//   // to preserve localstorage between tests see https://dev.to/javierbrea/how-to-preserve-localstorage-between-cypress-tests-19o1
//   it("connect as admin succcessfully", () => {
//     window.localStorage.removeItem("token")
//     cy.visit("/")
//     cy.getByData("email").should("exist")
//     cy.getByData("password").should("exist")
//     cy.getByData("email").type("yosrisamm1@gmail.com")
//     cy.getByData("password").type("123456")
//     cy.getByData("connect").click()
//     cy.location("pathname").should("eq", "/teachers/tasks")
//   })
//   it("connect as admin directly if I have a token of admin", () => {
//     cy.login()
//     cy.visit("/")
//     cy.location("pathname").should("eq", "/teachers/tasks")
//     cy.getByData("email").should("not.exist")
//     cy.getByData("password").should("not.exist")
//   })

//   it("connect as user succcessfully", () => {
//     window.localStorage.removeItem("token")
//     cy.visit("/")
//     cy.getByData("email").should("exist")
//     cy.getByData("password").should("exist")
//     cy.getByData("email").type("user@gmail.com")
//     cy.getByData("password").type("123456")
//     cy.getByData("connect").click()
//     cy.location("pathname").should("eq", "/hello")
//     cy.visit("/teachers/tasks")
//     cy.get(".app").should("be.empty")
//   })
// })
