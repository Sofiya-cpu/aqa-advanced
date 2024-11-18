class GaragePage {
  visit() {
    cy.visit("/panel/garage");
  }

  selectors = {
    addCarButton: () => cy.get("button[class='btn btn-primary']"),
    selectBrand: (brand) => cy.get("#addCarBrand").select(brand),
    selectModel: (model) => cy.get("#addCarModel").select(model),
    addMileage: (mileage) => cy.get("#addCarMileage").input(mileage),
    addCarConfirm: () =>
      cy.get("button.btn.btn-primary[_ngcontent-abt-c83]").click(),
  };

  addCar(brand, model, mileage) {
    this.selectors.selectBrand().select(brand);
    this.selectors.selectModel().select(model);
    this.selectors.addMileage().type(mileage);
  }
}
export default GaragePage;
