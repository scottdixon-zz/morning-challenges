/*

From Codewars!

Your online store likes to give out coupons for special occasions.
Some customers try to cheat the system by entering invalid codes or
using expired coupons.

Challenge:
Write a function called checkCoupon to verify that a coupon is valid
and not expired. If the coupon is good, return true. Otherwise, return false.

A coupon expires at the END of the expiration date. All dates will be passed
in as strings in this format: "June 15, 2014"

// Examples:
checkCoupon('123','123','September 5, 2018','October 1, 2018') -> true
checkCoupon('123a','123','September 5, 2018','October 1, 2018') -> false

*/

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {

}

module.exports = checkCoupon
