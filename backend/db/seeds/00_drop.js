function deleteTables(knex, tables){
  return tables.reduce((acc, ele) => {
    return acc.then(() => knex(ele).del())
  }, Promise.resolve())
};

exports.seed = function(knex, Promise) {
  const tables = [
    'friends',
    'q_items',
    'users',
  ]
  return deleteTables(knex, tables);
};
