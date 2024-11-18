class ExpensesPage {
  visit() {
    cy.visit("/panel/expenses");
  }

  selectors = {
    optionMenu: () => cy.get(".btn.btn-white.btn-sidebar.sidebar_btn.-active"),
    addExpense: () => cy.get("button[class='btn btn-primary']").click(),
    addLiters: () =>
      cy.get("input#addExpenseLiters.form-control").clear().type("20"),

    addCost: () =>
      cy.get("input#addExpenseTotalCost.form-control").clear().type("45000"),
  };
}

export const expensesPage = new ExpensesPage();
