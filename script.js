function formatNumber(num) {
    if (typeof num !== 'number')
        throw Error('Not a Number');
  return String(num).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

module.exports = formatNumber;
