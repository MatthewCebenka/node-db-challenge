
exports.seed = function(knex) {
  return knex('resources').insert([
    {
      id: 1, 
      resource_name: 'google',
      resource_desc: 'google is king'
    },
    {
      id: 2, 
      resource_name: 'TK',
      resource_desc: 'training kit',
    },
    {
      id: 3, 
      resource_name: 'Your mom',
      resource_desc: 'Your moms house'
    },
  ]);
};
