module.exports = function toReadable (number) {
  const oneDigit = new Object ({
   0: 'zero',
   1: 'one',
   2: 'two',
   3: 'three',
   4: 'four',
   5: 'five',
   6: 'six',
   7: 'seven',
   8: 'eight',
   9: 'nine'
  });

  const teenDigit = new Object ({
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  });

  const twoDigit = new Object({
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  });

  const threeDigit = new Object({
    100: 'one hundred',
    200: 'two hundred',
    300: 'three hundred',
    400: 'four hundred',
    500: 'five hundred',
    600: 'six hundred',
    700: 'seven hundred',
    800: 'eight hundred',
    900: 'nine hundred'
  });

  function countTwoDigit(number) {
    let res;
    if (number <= 9) {
      res = oneDigit[number];
    }
    if (String(number).length === 2 && String(number)[0] == 1) {
      res = teenDigit[number];
    }
    if ((String(number).length === 2) && (String(number)[0] !== '1') && (String(number)[1] !== '0')) {
      let a = number-(number%10);
      let b = Number(String(number)[1]);
      res = `${twoDigit[a]} ${oneDigit[b]}`;
    } else if ((String(number).length === 2) && (String(number)[0] !== '1') && (String(number)[1] === '0')) {
      res = twoDigit[number];
    }
    return res;
  };
  let final;
  if (number <= 99) {
    return countTwoDigit(number);
  } else if (number%100 === 0) {
    return threeDigit[number];
  } else {
    let c = number-(number%100);
    let d = number%100;
    final = `${threeDigit[c]} ${countTwoDigit(d)}`;
    return final;
  }
}