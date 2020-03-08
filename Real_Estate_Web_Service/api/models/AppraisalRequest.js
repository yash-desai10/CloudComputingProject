/**
 * AppraisalRequest.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    msid:  { 
      type: 'number'
    },

    mortid:  { 
      type: 'number'
    },

    firstname: {
      type: 'string'
    },

    lastname: {
      type: 'string'
    },

    appraisalinfo: {
      type: 'number'
    },

    status: {
      type: 'string'
    },

    evaluatedBy: {
      type: 'string'
    },
    
    email: {
      type: 'string'
    },



  },

};

