describe("Navigation menu bar", function() {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has buttons", function() {
    const buttons = cy.get(".navbar a");

    expect(buttons.should("have.length", 2));
    buttons.each(el =>
      cy
        .wrap(el)
        .should("have.css", "background-color", "rgba(0, 0, 0, 0)")
        .should(
          "have.css",
          "color",
          el.hasClass("navbar__link--active") ? "rgb(26, 115, 232)" : "rgb(123, 123, 123)"
        )
        .find("svg")
        .should("have.length", 1)
    );
  });

  it("goes to /", function() {
    const firstButton = ".navbar a:first-child";

    cy.get(firstButton).click();
    cy.get(firstButton)
      .should("have.css", "color", "rgb(26, 115, 232)")
      .should("have.text", "images");
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });

  it("goes to /album", function() {
    const secondButton = ".navbar a:nth-child(2)";

    cy.get(secondButton).click();
    cy.get(secondButton)
      .should("have.text", "albums")
      .and("have.css", "color", "rgb(26, 115, 232)");
    cy.url().should("eq", `${Cypress.config().baseUrl}/album`);
  });
});
