export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function formatPrice(number, lang = 'RU-ru') {
  const formatter = new Intl.NumberFormat(lang, {
    currency: 'RUB',
    style: 'currency',
    minimumFractionDigits: 2,
  });

  return formatter.format(number);
}
