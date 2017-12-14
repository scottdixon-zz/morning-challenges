let assert = require('assert');
let {
  shopTitle,
  upperCase,
  upperCaseShopTitle,
  productById,
  productCost,
  formatAddress,
  totalCost,
  addProduct,
  updateProductPrice
} = require('../43_json');

describe("shopTitle", () => {
  it("Should return the shop title", () => {
    assert.equal(shopTitle(), "My Fancy Drink Shop");
  });
});
describe("upperCase", () => {
  it("Should return an upper case string", () => {
    assert.equal(upperCase("heLLo"), "HELLO");
  });
});
describe("upperCaseShopTitle", () => {
  it("Should return an upper case shop title", () => {
    assert.equal(upperCaseShopTitle(), "MY FANCY DRINK SHOP");
  });
});
describe("productById", () => {
  it("Should return the correct product", () => {
    let product = productById(1)
    assert.equal(product.id, 1);
    assert.equal(product.title, 'Coca Cola');
  });
});
describe("productCost", () => {
  it("Should return the correct product price", () => {
    assert.equal(productCost(1), 4.32);
  });
});
describe("formatAddress", () => {
  it("Should format the given user's address", () => {
    assert.equal(formatAddress('jane@doe.com'), '12 Main St, Brisbane, 4000');
  });
});
describe("totalCost", () => {
  it("Should return the total cost of a customer's order", () => {
    assert.equal(totalCost('jane@doe.com', 61721), 25.41);
  });
});
describe("addProduct", () => {
  it("Should add a product", () => {
    assert.equal(addProduct(5, 'Example', 12.34));
    assert.equal(productCost(5), 12.34);
  });
});
describe("updateProductPrice", () => {
  it("Should update a specific product's price", () => {
    assert.equal(updateProductPrice(1, 33.44));
    assert.equal(productCost(1), 33.44);
  });
});
