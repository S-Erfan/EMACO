export const validationPhone = (phoneNum) => {
  if (/^[0]?[9][0-9]{9}$/.test(phoneNum) && phoneNum.length === 11) {
    return true;
  } else return false;
};

export const TypeNumber = (e) => {
  if (!e) {
    e = window.event;
  }

  var code = e.keyCode || e.which;

  if (!e.ctrlKey) {
    if (code > 31 && (code < 48 || code > 57) && (code < 96 || code > 105)) {
      e.preventDefault();
      return false;
    }
  }
  return true;
};

export const TypepersianNumber = (e) => {
  var persianNumbers = [
      /۰/g,
      /۱/g,
      /۲/g,
      /۳/g,
      /۴/g,
      /۵/g,
      /۶/g,
      /۷/g,
      /۸/g,
      /۹/g,
    ],
    arabicNumbers = [
      /٠/g,
      /١/g,
      /٢/g,
      /٣/g,
      /٤/g,
      /٥/g,
      /٦/g,
      /٧/g,
      /٨/g,
      /٩/g,
    ],
    fixNumbers = function (str) {
      if (typeof str === "string") {
        for (var i = 0; i < 10; i++) {
          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
      }
      return str;
    };
  return fixNumbers(e);
};
