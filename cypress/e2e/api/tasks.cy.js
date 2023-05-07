describe("tasks", () => {
  let savedTask = {}
  it("should get all tasks (empty tasks)", () => {
    cy.request("GET", Cypress.env("urlBackend") + "/tasks").then((response) => {
      expect(response.status).to.eq(200)
      // Check the response type and length
      // expect(response.body.model).to.have.lengthOf(0)
    })
  })

  it("should add a task", () => {
    const data = {
      title: "yosr naija",
      duration: 60,
    }
    cy.request({
      method: "POST",
      url: Cypress.env("urlBackend") + "/tasks",
      body: data,
    }).then((response) => {
      expect(response.status).to.eq(200)
      //     // eslint-disable-next-line no-unused-expressions
      expect(response.body.model.title).to.eq(data.title)
      expect(response.body.model.duration).to.eq(data.duration)
      // eslint-disable-next-line no-unused-expressions
      expect(response.body.model._id).to.exist
      savedTask = response.body.model

      //     // Check the response
    })
  })

  it("should find the saved task in tasks list", () => {
    cy.request("GET", Cypress.env("urlBackend") + "/tasks").then((response) => {
      expect(response.status).to.eq(200)
      // Check the response type and length
      const tasks = response.body.model
      const task = tasks.find((t) => t._id == savedTask._id)
      expect(task).to.exist
    })
  })

  it("should update a task", () => {
    const dataToUpdate = {
      title: "yosr naija isamm",
      duration: 120,
    }
    cy.request({
      method: "PUT",
      url: Cypress.env("urlBackend") + "/tasks/" + savedTask._id,
      body: dataToUpdate,
    }).then((response) => {
      expect(response.status).to.eq(200)
      //     // eslint-disable-next-line no-unused-expressions
      expect(response.body.model.title).to.eq(dataToUpdate.title)
      expect(response.body.model.duration).to.eq(dataToUpdate.duration)
      // eslint-disable-next-line no-unused-expressions
      savedTask = response.body.model

      //     // Check the response
    })
  })
  it("should find the details of the updated task ", () => {
    cy.request(
      "GET",
      Cypress.env("urlBackend") + "/tasks/" + savedTask._id
    ).then((response) => {
      expect(response.status).to.eq(200)
      // Check the response type and length
      expect(response.body.model.title).to.eq(savedTask.title)
      expect(response.body.model.duration).to.eq(savedTask.duration)
    })
  })

  it("should delete the updated task ", () => {
    cy.request(
      "DELETE",
      Cypress.env("urlBackend") + "/tasks/" + savedTask._id
    ).then((response) => {
      expect(response.status).to.eq(200)
      cy.request({
        method: "GET",
        url: Cypress.env("urlBackend") + "/tasks/" + savedTask._id,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404)
      })
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
