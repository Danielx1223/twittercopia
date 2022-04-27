exports.all = (req, res, next) => {
  const { query = {} } = req; // metiendo valores
  const { limit = 100, skip = 0 } = query;
  res.json({
    limit,
    skip,
  });
};

// Mostrando la info que coloco en postmant desde body.
exports.create = (req, res, next) => {
  const { body = {} } = req;
  res.json({
    body,
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
