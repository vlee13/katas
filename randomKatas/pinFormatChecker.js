//Pin will be given in string format
//Valid Pin only contains either 4 or 6 digit Numbers
//Pin with letters is an invalid pin
//return true or false

//Solution
function pinFormatChecker(pin) {
  if (pin.length == 4 || pin.length == 6) {
    for (let i of pin) {
      if (isNaN(i) === true) {
        return false;
      }
    }
    return true;
  }
  return false;
}

//Test cases:
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
// "823446"   -->  true
