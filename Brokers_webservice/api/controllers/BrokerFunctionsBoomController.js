/**
 * BrokerFunctionsBoomController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const bcrypt = require("bcrypt");
const saltRounds = 10;
module.exports = {
  chkAuth: async function (req, res){
    const jwt=require("jsonwebtoken");
    var decoded;
    try {
        sails.log.info("Response ==> Success");
        decoded = jwt.verify(req.body.token, "private_key");
        return res.json({ "response": "success" });

      } catch(err) {
        sails.log.info("The user is not verified");
        return res.json({ "response": "The user is not verified" });
      }
},
  formSubmissionBoom: async function(req, res) {
    bcrypt.hash(req.param("Password"), saltRounds, function(err,hashedPassword) 
    {
      if (req.param("Name") && req.param("Email") && req.param("Password") && req.param("Address") && req.param("City") &&
        req.param("Province") && req.param("Zip") && req.param("Phoneno") && req.param("Houseid") &&
        req.param("Mortgagevalue") && req.param("CompanyName")) 
        {
          var params = {
            emp_name: req.param("Name"),
            emp_address: req.param("Address"),
            emp_phone: req.param("Phoneno"),
            emp_email: req.param("Email"),
            emp_password: hashedPassword,
            emp_companyName: req.param("CompanyName"),
            applicationStatus: "Submitted",
            emp_city: req.param("City"),
            emp_province: req.param("Province"),
            emp_zip: req.param("Zip"),
            house_id: req.param("Houseid"),
            mortgage_value: req.param("Mortgagevalue")
          };

          Broker.create(params)
          .then(async function(obj){
            var findData = await Broker.find( {emp_email: params.emp_email} );
              
            sails.log.info(" Customer to Broker - Request - Customer Registration ==> "+ "Name: "+ req.body.Name, "," + "Address: "+ req.body.Address, "," + "Phone No: "+ req.body.Phoneno, "," + 
            "City:" + req.body.City, "," + "Province: " + req.body.Province, "," + "Postal Code: "+ req.body.Zip, "," +
            "Email ID: " + req.body.Email, "," + "Company Name: " +req.body.CompanyName);

            sails.log.info(" Customer to Broker - Response - Successfully Registered");
            return  res.json({"response": "success" , data : findData });
          })
          .catch(
            err => {
              sails.log.info("Error: ", err);
              res.serverError(err);
            }
            );
      } else {
        sails.log.info("Bad Request");
        res.badRequest("The request wasnot successful - Bad Request.");
      }
    });
  },

  getApplicationStatus: function(req, res) {
    if (req.param("AppNo")) {
      var appno = req.param("AppNo");
      Broker.find({ id: appno })
        .then(function(Broker) 
        {
          Broker = Broker[0];

          if (Broker == undefined) 
          {
            sails.log.info("Wrong Application Number");
            return res.json({ Message: "Wrong Application Number" });
          }
          else
          {
            sails.log.info(" Customer to Broker - Request: Mortgage Application Number ==> "+ req.body.AppNo);
            sails.log.info(" Customer to Broker - Response: application status ==> "+ Broker.applicationStatus);
            return res.send(Broker);
          }
        })
        .catch({ name: "UsageError" }, function(err) {
          sails.log.info("Error: ", err);
          return res.json(err);
        })
        .catch(function(err) {
          sails.log.info("Error: ", err);
          return res.json(err);
        });
    } else {
      sails.log.info("Bad Request");
      res.badRequest("The request wasnot successful - Bad Request.");
    }
  },


  loginAuthorization: async function (req, res) {
    debugger;

    var appno = req.body.app_no;
    var password = req.body.password;
   
    Broker.find({ id: appno })
      .then(function(Broker) 
      {
        console.log(Broker[0].emp_password);
        console.log(password);
        console.log(Broker[0]);
        bcrypt.compare(password, Broker[0].emp_password, function(err, valid) 
                    {
                        if(valid)
                        {
                          const jwt=require("jsonwebtoken");
                          const token=jwt.sign(
                              {appno: req.body.app_no,
                                password: req.body.password
                              },
                              "private_key",
                              {expiresIn:"1h"}
                              );
                            sails.log.info(" Customer to Broker - Request - Login: Mortgage Application Number ==> "+ req.body.app_no);  
                            sails.log.info("Successfully Logged In");
                            sails.log.info("Token Generated");
                            return res.send({"Message":"Authoriztion approved" ,  token:token});
                        }
                        else
                        {
                            sails.log.info("Wrong Password");
                            res.json({"Message": "Wrong Password"})   
                        }

                    });
      }).catch(function(err){
        sails.log.info("Invalid Application ID");
        return res.json({ "Message": "Invalid Application ID" });
      }); 
    }
  };
