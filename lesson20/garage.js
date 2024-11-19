class GaragePage {
  // visit() {
  //   cy.visit("/panel/garage");
  // }

  selectors = {
    addCarButton: () => cy.get("button[class='btn btn-primary']"),
    selectBrand: (brand) => cy.get("#addCarBrand").select(brand),
    selectModel: (model) => cy.get("#addCarModel").select(model),
    addMileage: (mileage) => cy.get("#addCarMileage").type(mileage),
    addCarConfirm: () =>
      cy.get("button[type='button'].btn.btn-primary").click(),
  };

  addCar(brand, model, mileage) {
    this.selectors.selectBrand(brand);
    this.selectors.selectModel(model);
    this.selectors.addMileage(mileage);
    //this.selectors.addCarConfirm().click();
  }
}

export default GaragePage;
