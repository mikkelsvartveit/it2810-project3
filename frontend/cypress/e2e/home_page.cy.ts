describe("empty spec", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.get("h2").should("contain", "Rick and Morty search boy");
  });
});
