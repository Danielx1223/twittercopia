const tweets = [];

exports.all = (req, res, next) => {
  const { query = {} } = req; // metiendo valores
  res.json({
    data: tweets,
    included: {
      query,
    },
  });
};

// Mostrando la info que coloco en postmant desde body.
exports.create = (req, res, next) => {
  const { body = {} } = req;
  tweets.push(body);
  res.json({
    data: body,
  });
};

exports.read = (req, res, next) => {
  const { params = {} } = req;
  const { id = '' } = params;

  const data = tweets.find(function (item) {
    return item.id === id;
  });
  res.json({
    data: {
      id: params.id, // Guardo los valores del id que ponga en la URL en la variable params
    },
  });
};

exports.update = (req, res, next) => {
  const { body = {}, params = {} } = req;
  res.json({
    data: body,
    included: {
      params,
    },
  });
};

exports.delete = (req, res, next) => {
  res.json({
    message: 'List of Tweets',
  });
};
