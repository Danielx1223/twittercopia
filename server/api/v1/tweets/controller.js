const Model = require('./model');

exports.all = async (req, res, next) => {
  try {
    const data = await Model.find({}).exec();
    res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
};

// Mostrando la info que coloco en postmant desde body.
exports.create = async (req, res, next) => {
  const { body = {} } = req;

  const document = new Model(body); // Document variable de toda base de dato y new nuevo. (libreria)
  try {
    const data = await document.save();
    res.status(201); // todo OK pero se agregó algo.
    res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
};

//  midelware para encontrar el id
exports.id = async (req, res, next) => {
  const { params = {} } = req;
  const { id = '' } = params; // const id = params.id

  try {
    const data = await Model.findById(id).exec();

    if (data) {
      req.doc = data;
      next();
    } else {
      next({
        statusCode: 404,
        message: 'Document not Found',
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.read = async (req, res, next) => {
  const { doc = {} } = req;

  res.json({
    data: doc,
  });
};

exports.update = async (req, res, next) => {
  const { body = {}, doc = {} } = req;

  Object.assign(doc, body); // Mezclar documentos.

  try {
    const data = await doc.save();
    res.json({
      data,
    });
  } catch (error) {
    netxt(error);
  }
};

exports.delete = async (req, res, next) => {
  const { params = {} } = req;
  const { id = '' } = params; // const id = params.id

  try {
    const data = await Model.findByIdAndDelete(id);
    res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
};
