/**
 * Insurance.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 * 
 * cname: this attribute will store the insurance customer user name
 * mortid: this attribute will store the Mortgage ID of the user
 * apno: this attribute will store the appraisal number for the user
 * dp: this attribute will store the percent to be deducted for the user
 * iv: this attribute will store the insurance value for the user
 * istatus: this attribute will store the status of the insurance for the user
 * ip: this attribute will store the insurance percentage for the user
 * itype: this attribute will store the type of the insurance
 * pid: this attribute will store the property id of the property to be evaluated for the user
 */

module.exports = {

  attributes: {

    customerName: {
      type: 'string'
    },
    
    mortid: {
      type: 'string'
    },

    appraisalValue: {
      type: 'number'
    },

    insuranceStatus: { //
      type: 'string'
    },

    insuredValue: { //
      type: 'number'
    },
    
    deductableValue: { //
      type: 'number'
    },

   
    propertyId: {
      type: 'string'
    }
  },

};

