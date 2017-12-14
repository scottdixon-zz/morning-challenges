const jwt = require('jsonwebtoken');
const colors = require('colors');
const inquirer = require('inquirer');


class SimpleJwt {
  constructor(password) {
    this.password = password
  }


  sign (payload) {
    // Return a JWT
    const token = jwt.sign(payload, this.password);
    console.log(token.rainbow);
  }
  verify (webToken) {
    // return the contents or a message re failure
    try {
        console.log(jwt.verify(webToken, this.password).green)
    } catch (e) {
      console.log(`${e}`.red)
    } finally {
      console.log(':)'.rainbow)
    }
  }
}

const simpleJwt = new SimpleJwt("newpassword")
inquirer.prompt([
  {name: "signOrVerify",
  message: "What would you like to do?",
  type: "list",
  choices: ['sign a token', 'verify a token']
}]).then(answers => {
  if (answers.signOrVerify === "sign a token") {
    return simpleJwt.sign('hello');
  } else if (answers.signOrVerify === "verify a token") {
    return simpleJwt.verify('eyJhbGciOiJIUzI1NiJ9.aGVsbG8.mhfgZWq1LXLNENhZihMA7U6ZyQk7hA8Gv033EU6z5SI')
  } else {
    console.log("please make a selection...")
  }
});
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
