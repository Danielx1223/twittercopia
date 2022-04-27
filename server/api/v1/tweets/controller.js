exports.create = (req, res, next) => {
  const { query = {} } = req; // metiendo valores
  const { limit = 100, skip = 0 } = query;
  res.json({
    limit,
    skip,
  });
};

exports.all = (req, res, next) => {
  res.json({
    message: 'List of Tweets GET',
  });
};
exports.read = (req, res, next) => {
  const { params = {} } = req;
  res.json({
    id: params.id, // Guardo los valores del id que ponga en la URL en la variable params
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
