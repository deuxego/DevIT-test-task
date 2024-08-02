const delay = (cb) => {
  const ms = Math.floor(1 + Math.random() * 999);

  setTimeout(() => {
    cb();
  }, ms);
};

module.exports = {
  delay
};
