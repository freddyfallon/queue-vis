const randomNumberBetween = (min, max) => {
  Math.floor(Math.random() * (max * 1000) + 1) + min * 1000;
};

module.exports = { randomNumberBetween };