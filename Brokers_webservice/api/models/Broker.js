/**
 * Broker.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    createdAt:false,
    updatedAt:false,


    emp_name:{
      type:"string",
      required:true
    },
    id: { type: 'number', autoIncrement: true , columnName: 'applicationNo'},
   
    

    emp_address:{
      type:"string",
      required:true
    },

    emp_city:{
      type:"string",
      required:true
    },

    emp_province:{
      type:"string",
      required:true
    },

    emp_zip:{
      type:"string",
      required:true
    },

    emp_phone:{
    type:"number",
    required:true
    },

    emp_email:{
      type:"string",
      required:true
    },

    emp_password:{
      type:"string",
      required:true
    },

    emp_companyName:{
      type:"string",
      required:true
    },
    
    applicationStatus:{
      type:"string"
    },

    emp_salary:{
      type:"number"
    },

    emp_duration:{
      type:"integer"
    },

    house_id:{
      type:"integer"
    },

    mortgage_value:{
      type:"integer"
    },

    insured_amount:{
      type:"integer"
    },

    deductible_amount:{
      type:"integer"
    },

  },

};

