const { clsx } = require("clsx");
const { twMerge } = require("tailwind-merge");

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function formatAmountForDisplay(amount, currency) {
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol'
  });

  const formatedAmount = numberFormat.format(amount);

  return formatedAmount === '$NaN' ? '' : formatedAmount;
}

function formatAmountForStripe(amount, currency) {
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol'
  });

  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency = true;

  for (let part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false;
    }
  }

  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}

module.exports = {
  cn,
  formatAmountForDisplay,
  formatAmountForStripe
};
