/// <reference types="cypress" />

describe("find Pickle Rick and set rating to 1 star", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Rick and Morty Explorer");
    cy.get('[data-testid="multiple-chip-Status"] > #multiple-chip').click();
    cy.get('[data-testid="select-option-Alive"]').click();
    cy.get('[data-testid="select-option-Alive"]').type("{esc}");
    cy.get('[data-testid="multiple-chip-Species"] > #multiple-chip').click();
    cy.get('[data-testid="select-option-Alien"]').click();
    cy.get('[data-testid="select-option-unknown"]').click();
    cy.get('[data-testid="select-option-unknown"]').type("{esc}");
    cy.get('[data-testid="multiple-chip-Gender"] > #multiple-chip').click();
    cy.get('[data-testid="select-option-Male"]').click();
    cy.get('[data-testid="select-option-Male"]').type("{esc}");
    cy.get(".MuiGrid-container > :nth-child(18)").scrollIntoView();
    cy.get(".MuiGrid-container > :nth-child(20)").click();
    cy.get('[for=":r5:"]').click();
  });

  it("sets pickle rick rating back to 5 stars", () => {
    cy.visit("/");
    cy.get('[data-testid="SearchField"] > .MuiInputBase-root').type(
      "Pickle Rick"
    );
    cy.contains("Pickle Rick");
    cy.get(".css-1pp3930-MuiTypography-root > span").contains("1");
    cy.get(".css-1pp3930-MuiTypography-root > span").contains(" / 5");
    cy.get(".MuiCardContent-root").click();
    cy.get('[for=":rd:"]').click();
    cy.get('[for=":rd:"]').type("{esc}");
    cy.get(".css-1pp3930-MuiTypography-root > span").contains("5");
    cy.get(".css-1pp3930-MuiTypography-root > span").contains(" / 5");
  });
});
