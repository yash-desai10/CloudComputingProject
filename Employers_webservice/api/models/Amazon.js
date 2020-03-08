/**
 * Google.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

   
    attributes: {

        createdAt: false,
        updatedAt: false,
        emp_id: {
            type: 'string',
        },  
     
        emp_name: {
            type: 'string',
        },

        emp_pass: {
            type: 'string',
        },
   
        emp_salary: {
            type: 'number',
        },
   
        emp_duration: {
            type: 'integer',
        },
   
        callback_url: {
            type: 'string',
        },

        broker_permission: {
            type: 'boolean',
            defaultsTo: false,
        },

        emp_email: {
            type: 'string',
        },
    },
  
  };
  
  