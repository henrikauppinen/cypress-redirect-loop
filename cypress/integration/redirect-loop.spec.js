/// <reference types="cypress" />

describe("loop redirect", () => {
  it("should eventually fail on assertion despite redirects", () => {
    cy.visit("a.html");
    cy.get("div").should("contain", "this should fail?");
  });
});
