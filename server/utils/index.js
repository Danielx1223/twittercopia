const config = require('./../config');
const { pagination, sort } = config;

const paginationParseParams = function ({
  limit = pagination.limit, // los valores por default.
  skip = pagination.skip,
}) {
  return {
    limit: Number.parseInt(limit), // se encarga de convertir la cadena a números
    skip: Number.parseInt(skip),
  };
};

const sortParseParams = function ({ sortBy, direction }, fields = {}) {
  const sortBySafeList = [
    ...Object.getOwnPropertyNames(fields), // saca las variables y las convierte en array. ['content', 'likes']
    ...sort.sortBy.fields, // ['createdAt', 'updatedAt']
  ];
  return {
    sortBy: sortBySafeList.includes(sortBy) ? sortBy : sort.sortBy.default, // incluye da un true o false, ? si  no así, entonces se le asigna  lo otro
    direction: sort.direction.options.includes(direction)
      ? direction
      : sort.direction.default,
  };
};

module.exports = {
  paginationParseParams,
  sortParseParams,
};
