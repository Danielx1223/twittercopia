const { Model, fields, references, virtuals } = require('./model'); // extraer el objeto
const { paginationParseParams, sortParseParams } = require('./../../../utils'); // Queremos extraer el LIMIT Y EL SKIP del query como números.

exports.all = async (req, res, next) => {
  const { query = {} } = req; // query del URL
  const { limit, skip } = paginationParseParams(query);
  const { sortBy, direction } = sortParseParams(query, fields); // encargad ade ordenar
  const populate = [
    ...Object.getOwnPropertyNames(references),
    ...Object.getOwnPropertyNames(virtuals),
  ].join(' '); // sacar array de las propiedades de un objeto

  try {
    const [data = [], total = 0] = await Promise.all([
      Model.find({})
        .limit(limit)
        .skip(skip)
        .sort({
          [sortBy]: direction, // volver sortby dinamico que quede ejemplo "likes": "asc"
        })
        .populate(populate) // traer la info del User asociado
        .exec(),
      Model.countDocuments(),
    ]);
    // otra manera de escribir lo de arriba
    // const data = await Model.find({}).limit(limit).skip(skip).exec();
    // const total = await Model.countDocuments();
    res.json({
      data,
      meta: {
        limit,
        skip,
        total,
        sortBy,
        direction,
      },
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

  const populate = Object.getOwnPropertyNames(references).join(' ');

  try {
    const data = await Model.findById(id).populate(populate).exec();

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
