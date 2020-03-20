
exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      id: 1, 
      task_desc: 'buy jello',
      task_notes: 'eat it',
      task_completed: false,
      project_id: 2
    },
    {
      id: 2, 
      task_desc: 'Go to the gym',
      task_notes: '',
      task_completed: false,
      project_id: 1
    },
    {
      id: 3, 
      task_desc: 'buy fruit',
      task_notes: '',
      task_completed: false,
      project_id: 2
    },
    {
      id: 4, 
      task_desc: 'watch the market',
      task_notes: '',
      task_completed: false,
      project_id: 3
    },
    {
      id: 5, 
      task_desc: 'build an igloo',
      task_notes: '',
      task_completed: false,
      project_id: 3
    },
    {
      id: 6, 
      task_desc: 'fix laptop',
      task_notes: '',
      task_completed: false,
      project_id: 1
    }
  ]);
};
