const jwt = require('jsonwebtoken');
const colors = require('colors');

class SimpleJwt {
  sign (payload) {
    // Return a JWT
    const token = jwt.sign(payload, 'abc');
    console.log(token);
  }
  verify (jwt) {
    // return the contents or a message re failure
    return jwt.verify(jwt, 'abc')
  }
}

const simpleJwt = new SimpleJwt()
simpleJwt.sign('hello');

/*

  CHALLENGE
  ---------

  Review + run the code.

  1. We're hard coding 'abc' as the password. Pass this into the constructor
  instead. e.g. new SimpleJwt('abc'). Update your methods.

  2. Notice the colors package we're importing? Make the console log rainbow 🌈

  3. Test that verifyJwt works.

  4. Wrap the .verify in a try/catch. If everything looks good, return the
  decoded JWT (green). Otherwise show an error (red)

  BEAST MODE
  ----------

  1. Implement https://www.npmjs.com/package/inquirer
  Ask the user if they want to sign or verify a token.

*/
