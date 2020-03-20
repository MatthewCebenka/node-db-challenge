
exports.seed = function(knex) {
  return knex('projects').insert([
    {
      id: 1, 
      project_name: 'simmr',
      project_desc: 'website for chefs',
      project_completed: false
    },
    {
      id: 2, 
      project_name: 'fitness finder',
      project_desc: 'Helps you find a gym',
      project_completed: false
    },
    {
      id: 3, 
      project_name: 'igloo',
      project_desc: 'helps eskimos',
      project_completed: false
    }
  ]);
};
