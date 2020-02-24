describe("Main menu bar", function() {
  it("has buttons", function() {
    cy.visit("/");

    const buttons = cy.get(".mainbar__buttons button");

    expect(buttons.should("have.length", 2));
    buttons.each(el =>
      cy
        .wrap(el)
        .should("have.css", "background-color", "rgba(0, 0, 0, 0)")
        .and("have.css", "color", "rgb(26, 115, 232)")
        .find("svg")
        .should("have.length", 1)
    );
  });
});
