describe("Login", () => {
  it("tests Login", () => {
    cy.viewport(1440, 1024);
    cy.visit("https://pms.pointit.co.th/login");
    cy.get("#username").click();
    cy.get("#username").type("apirak");
    cy.get("#input-25").click();
    cy.get("#input-25").type("12345");
    cy.get("span").click();
    cy.get("div.mx-1 > div.v-app-bar-title__placeholder").should(
      "contain",
      "Apirak"
    );
    cy.get(
      "#grad > div.container.container--fluid > header > div > div:nth-child(5) > div.v-app-bar-title__placeholder"
    ).should("contain", "Home");
    cy.get(
      "#grad > div.container.container--fluid > header > div > div:nth-child(3) > div.v-app-bar-title__placeholder"
    ).should("contain", "Champasak Provincial Hospital");
  });
});
//# recorderSourceMap=BCBDBEBFBGBHBIBJBKBLBMB
