/*

JSON Practice
-------------

JSON can be parsed and turned into a plain old JS object.
This makes it much easier to read from and write to.

Check out the shop JS object and run the tests.

Complete methods below, one by one.

TESTS: mocha tests/43_json_test.js

*/

const shop = {
  title: "My Fancy Drink Shop",
  products: [
    { id: 1, title: 'Coca Cola', price: 4.32 },
    { id: 2, title: 'Fanta', price: 4.22 },
    { id: 3, title: 'Lift', price: 4.11 }
  ],
  customers: {
    'jane@doe.com': {
      firstName: 'John',
      lastName: 'Doe',
      address: {
        streetNumber: 12,
        street: 'Main St',
        city: 'Brisbane',
        postcode: 4000
      },
      orders: [
        { id: 61721, status: 'delivered', items: [
            { productId: 1, qty: 2 },
            { productId: 3, qty: 1 },
            { productId: 2, qty: 3 }
          ],
          notes: 'Please leave on doorstep'
        },
        { id: 82721, status: 'delivered', items: [
            { productId: 4, qty: 100 }
          ],
          notes: 'Really enjoying coke ATM'
        }
      ]
    }
  }
}

const shopTitle = () => {
  // Return the shop title (you have access to the shop object from here)
}

const upperCase = (string) => {
  // Return an uppercase version of string
}

const upperCaseShopTitle = () => {
  // Return an uppercase shop title.
  // Don't repeat yourself. Use the two functions you just built!
}

const productById = (productId) => {
  // Return a specific product object
}

const productCost = (productId) => {
  // given a product id, return its cost. DRY ;)
}

const formatAddress = (email) => {
  // Given a user's email, return their address in the format:
  // streetNumber street, city, postcode
  // E.g. 10 Amelia St, Sydney, 2000
  // Hint: some destructuring might save you a few lines.
}

const totalCost = (email, orderId) => {
  // Return the total cost of an order.
}

const addProduct = (id, title, price) => {
  // Add a product to the shop.
}

const updateProductPrice = (id, newPrice) => {
  // Update the price of a specific product
}

// Test all the things
module.exports = {
  shopTitle,
  upperCase,
  upperCaseShopTitle,
  productById,
  productCost,
  formatAddress,
  totalCost,
  addProduct,
  updateProductPrice
}
