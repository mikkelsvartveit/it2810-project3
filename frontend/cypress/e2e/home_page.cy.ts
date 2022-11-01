/// <reference types="cypress" />

describe("Test finding character and setting rating", () => {
  it("Finds Pickle Rick and set rating to 1 star", () => {
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
    cy.get('[data-testid="character-card-265"]').click();
    cy.get('[for=":r5:"]').click();
  });

  it("Checks that rating persists after refresh and changes rating to 5 stars", () => {
    cy.visit("/");
    cy.get('[data-testid="SearchField"] > .MuiInputBase-root').type(
      "Pickle Rick"
    );
    cy.contains("Pickle Rick");
    cy.get('[data-testid="ratin-on-character-card-265"]').contains("1");
    cy.get('[data-testid="ratin-on-character-card-265"]').contains(" / 5");
    cy.get('[data-testid="character-card-265"]').click();
    cy.get('[for=":rd:"]').click();
    cy.get('[for=":rd:"]').type("{esc}");
    cy.get('[data-testid="ratin-on-character-card-265"]').contains("5");
    cy.get('[data-testid="ratin-on-character-card-265"]').contains(" / 5");
  });
});
