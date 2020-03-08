/**
 * IncControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    addAppraisalInfo: async function(req, res) {

        if(req.body){
            var statusBoolean = req.body.firstname && req.body.lastname && req.body.mortid && req.body.appraisalinfo && req.body.msid;
            if(!!statusBoolean){
                var insurancePercentage = 40/100;
                var decPercentage = 10/100;
                var insVal = parseFloat(insurancePercentage) * req.body.appraisalinfo;
                var decVal = parseFloat(decPercentage) * insVal;

               var record = await Insurance.create({
                    customerName : req.body.firstname+' '+req.body.lastname,
                    mortid: req.body.mortid,
                    appraisalValue: req.body.appraisalinfo,
                    insuredValue: insVal,
                    deductableValue: decVal,
                    propertyId: req.body.msid,
                }).fetch();
                record["response"]="success";
                record["email"]=req.body.email;

                sails.log.info(" Insert Appraisal Info ==> " + "Firstname: " + req.body.firstname + "," + "Lastname: " + req.body.lastname
                + "," + "Mortgage ID: " + req.body.mortid + "," + "Appraisal Amount: " + req.body.appraisalinfo + "," + "property ID: " + req.body.msid);
                
                sails.log.info("Appraisal Info Successfully Inserted ==> " + record["response"]);

                res.json(record);
  }
  else {
      sails.log.info("Bad Request");
          res.badRequest('The request wasnot successful - Bad Request.');
  }
  
  }
     else{
        sails.log.info("Bad Request");
        res.badRequest('The request wasnot successful - Bad Request.');
     }      
    },
};

