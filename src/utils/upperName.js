const upperName = name => {
  let array = name
    .split('-')
    .map(value => value.charAt(0).toUpperCase() + value.slice(1));

  return array.join(' ');
};

module.exports = upperName;
