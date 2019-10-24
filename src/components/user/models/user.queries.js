/**
 * This class is basically created to store the queries 
 * NOTE : it doesnt triger any operation 
 */
const Model = 'User';
const Fields = 'name, email, password';

// Queries Class 
class Queries {
  project = (conditions, fieldsToProject) => {
    return `SELECT ${fieldsToProject} FROM ${Model} WHERE ${conditions}`;
  }
}

module.exports = new Queries();
