/**
 * AppraisalRequestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    requestAppraisal: async function(req, res) {

        var msid = req.body.msid;
        var mortid = req.body.mortid;
        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var email = req.body.email;
        var status = 'Requested';

        AppraisalRequest.create({
            msid : msid,
            mortid : mortid,
            firstname : firstname,
            lastname : lastname,
            status : status,
            email:email
           
        }).then(AppraisalRequest => {
            sails.log.info(" Appraisal Request ==> "+ "MSID: " + req.body.msid + "," + "Mortgage ID: " + req.body.mortid + "," + "Firstname: " + req.body.firstname + "," + "lastname: " + req.body.lastname + "," + "Email ID: " + req.body.email + "," + "Status: " + status);
            sails.log.info(" Appraisal Request Successfully Submitted");
            return res.json({ "response": "success" });
        }).catch(err => {
            sails.log.info("Response ==> Error");
            return res.json({ "response": "error" });
        })


    },
    listRequestAppraisal: async function(req, res) {
  
        AppraisalRequest.find({'status':'Requested'}).exec(function(err, items) {            
            return (res.json(items));
        });
    },
    AppraisalStatus: async function(req, res) {
  
        AppraisalRequest.find().exec(function(err, items) {            
            return (res.json(items));
        });
    },
    listEvaluatedAppraisal: async function(req, res) {
  
        AppraisalRequest.find({'status':'Evaluated'}).exec(function(err, items) {            
            return (res.json(items));
        });
    },
    evaluate: async function(req, res) {

        var mortid = req.body.mortid;
        var appraisalinfo = req.body.appraisalinfo;
        var status = 'Evaluated';

        var updatedRecord = await AppraisalRequest.update({
            where: {
                mortid: mortid
            }
        }).set({ status: status,appraisalinfo:appraisalinfo,evaluatedBy:'adam'}).fetch();
        
        if(updatedRecord.length == 0)
        {
            sails.log.info("Response ==> Error");
            return res.json({ "response": "error" });
        }
        else{
            updatedRecord[0]["response"] = "success";
            sails.log.info(" Appraisal Evaluated ==> " + "Mortgage ID: " + req.body.mortid + "," + "Appraisal Amount: "+ req.body.appraisalinfo); 
            sails.log.info(" Appraisal amount succesfully updated ==> " +  updatedRecord[0]["response"]);
            return res.json(updatedRecord);
        }

    },
};

