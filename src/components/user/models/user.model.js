const BaseModel = require('../../../config/db');
const Queries = require('./user.queries');

class Users extends BaseModel {

  // Table name is the only required property.
  static get tableName() {
    return 'travel_information';
  }

  // Each model must have a column (or a set of columns) that uniquely
  // identifies the rows. The column(s) can be specified using the `idColumn`
  // property. `idColumn` returns `id` by default and doesn't need to be
  // specified unless the model's primary key is something else.
  static get idColumn() {
    return 'id';
  }


  // Optional JSON schema. This is not the database schema!
  // No tables or columns are generated based on this. This is only
  // used for input validation. Whenever a model instance is created
  // either explicitly or implicitly it is checked against this schema.
  // See http://json-schema.org/ for more info.
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['activity_id'],
      // list of properties 
      properties: {
        id: {
          type: 'integer'
        },
        activity_id: {
          type: 'integer'
        },
        name: {
          type: 'string'
        },
        height: {
          type: 'number'
        },
        weight: {
          type: 'number'
        },
        gender: {
          type: 'string'
        },
        age: {
          type: 'integer'
        }
      }
    };
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    // Importing models here is a one way to avoid require loops.
    // const Animal = require('./Animal');
    // const Movie = require('./Movie');

    // return {
    //   pets: {
    //     relation: Model.HasManyRelation,
    //     // The related model. This can be either a Model
    //     // subclass constructor or an absolute file path
    //     // to a module that exports one. We use a model
    //     // subclass constructor `Animal` here.
    //     modelClass: Animal,
    //     join: {
    //       from: 'persons.id',
    //       to: 'animals.ownerId'
    //     }
    //   },

    //   movies: {
    //     relation: Model.ManyToManyRelation,
    //     modelClass: Movie,
    //     join: {
    //       from: 'persons.id',
    //       // ManyToMany relation needs the `through` object
    //       // to describe the join table.
    //       through: {
    //         // If you have a model class for the join table
    //         // you need to specify it like this:
    //         // modelClass: PersonMovie,
    //         from: 'persons_movies.personId',
    //         to: 'persons_movies.movieId'
    //       },
    //       to: 'movies.id'
    //     }
    //   },

    //   children: {
    //     relation: Model.HasManyRelation,
    //     modelClass: Refund_Details,
    //     join: {
    //       from: 'persons.id',
    //       to: 'persons.parentId'
    //     }
    //   },

    //   parent: {
    //     relation: Model.BelongsToOneRelation,
    //     modelClass: Refund_Details,
    //     join: {
    //       from: 'persons.parentId',
    //       to: 'persons.id'
    //     }
    //   }
    // };
  }
}

module.exports = Users;
