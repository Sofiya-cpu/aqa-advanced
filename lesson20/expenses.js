class ExpensesPage {
  // visit() {
  //   cy.visit("/panel/expenses");
  // }

  selectors = {
    optionMenu: () =>
      cy.get("a.btn.btn-white.btn-sidebar.sidebar_btn[href='/panel/expenses']"),
    deleteMileage: () => cy.get("input#addExpenseMileage"),
    changeMileage: (mileage) => cy.get("input#addExpenseMileage").type(mileage),
    addExpense: () => cy.get("button[class='btn btn-primary']"),
    addLiters: (liters) =>
      cy.get("input#addExpenseLiters.form-control").type(liters),
    addCost: (cost) =>
      cy.get("input#addExpenseTotalCost.form-control").type(cost),
    confirmAddExpense: () => cy.get("button[type='button'].btn.btn-primary"),
  };

  addExpense(mileage, liters, cost) {
    //this.selectors.optionMenu().click();
    //this.selectors.addExpense();
    this.selectors.changeMileage(mileage);
    this.selectors.addLiters(liters);
    this.selectors.addCost(cost);
    // this.selectors.confirmAddExpense().click();
  }
}

export default ExpensesPage;
