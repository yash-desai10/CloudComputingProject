/**
 * BrokerFunctionsBoomController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    

    formSubmissionBoom: function(req, res) {
        if(req.param('Name') && req.param('Email') && req.param('Password') && req.param('Address') && req.param('City') && req.param('Province') && req.param('Zip') &&  req.param('Phoneno') && req.param('CompanyName') ) {
          
            Broker.create({
                emp_name : req.param('Name'),
                emp_address: req.param('Address'),
                emp_phone : req.param('Phoneno'),
                emp_email: req.param('Email'),
                emp_password: req.param('Password'),
                emp_companyName : req.param('CompanyName'),
                applicationStatus: req.param('Submitted'),

            }).then(Broker => {
                return res.ok("Ok request");
            }).catch(err => res.serverError(err))




        } else {
          res.badRequest('The request wasnot successful - Bad Request.');
        }
      }
  

};

