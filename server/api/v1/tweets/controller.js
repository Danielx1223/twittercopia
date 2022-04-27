exports.create = (req, res, next) => {
  res.json({
    message: 'List of Tweets POST',
  });
};

exports.all = (req, res, next) => {
  res.json({
    message: 'List of Tweets GET',
  });
};
exports.read = (req, res, next) => {
  res.json({
    message: 'List of Tweets GET ',
  });
};

exports.update = (req, res, next) => {
  res.json({
    message: 'List of Tweets UPDATE',
  });
};

exports.delete = (req, res, next) => {
  res.json({
    message: 'List of Tweets',
  });
};
