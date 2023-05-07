describe("users", () => {
  let adminToken = ""
  before(() => {
    cy.login().then((resp) => {
      adminToken = window.localStorage.getItem("token")
    })
  })

  it("should get users as admin", () => {
    cy.request({
      method: "GET",
      url: Cypress.env("urlBackend") + "/users",
      auth: {
        bearer: adminToken,
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
      // Check the response type and length
    })
  })
  it("should'nt get users if not connected or as user", () => {
    cy.request({
      method: "GET",
      url: Cypress.env("urlBackend") + "/users",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401)
      // Check the response type and length
    })
  })
})
//   beforeAll( () => {
//     const mongoServer = await MongoMemoryServer.create()
//     await mongoose.connect(mongoServer.getUri(), {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true,
//     })
//     // await connectDB()
//   })

//   afterAll( () => {
//     await mongoose.disconnect()
//     await mongoose.connection.close()
//   })
