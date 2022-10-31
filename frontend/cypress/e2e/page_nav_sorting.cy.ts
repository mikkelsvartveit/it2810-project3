/// <reference types="cypress" />

describe("find Pickle Rick and set rating to 1 star", () => {
  it("Sets filter and checks sort", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Rick and Morty Explorer");
    cy.get('[data-testid="multiple-chip-Status"] > #multiple-chip').click();
    cy.get('[data-testid="select-option-Alive"]').click();
    cy.get('[data-testid="select-option-Dead"]').click();
    cy.get('[data-testid="select-option-Dead"]').type("{esc}");
    cy.get('[data-testid="multiple-chip-Species"] > #multiple-chip').click();
    cy.get('[data-testid="select-option-Alien"]').click();
    cy.get('[data-testid="select-option-unknown"]').click();
    cy.get('[data-testid="select-option-unknown"]').type("{esc}");
    cy.get('[data-testid="multiple-chip-Gender"] > #multiple-chip').click();
    cy.get('[data-testid="select-option-Female"]').click();
    cy.get('[data-testid="select-option-Female"]').type("{esc}");
    cy.get('[data-testid="sort-select"] > .MuiSelect-select').click();
    cy.get('[data-value="name_desc"]').click();
    cy.get('[data-testid="character-card-386"]').contains("Zarbadar Gloonch");

    cy.get('[data-testid="EpisodesTab"]').click();
    cy.get('[data-testid="SearchField"] > .MuiInputBase-root').type(
      "rick potion"
    );
    cy.get('[data-testid="episode-card-1"]').should("not.exist");
    cy.contains("Rick Potion #9");

    cy.get('[data-testid="CharactersTab"]').click();
    cy.get('[data-testid="character-card-386"]').contains("Zarbadar Gloonch");

    cy.get('[data-testid="EpisodesTab"]').click();
    cy.get('[data-testid="episode-card-1"]').should("not.exist");
    cy.contains("Rick Potion #9");
  });
});
