/**
 * BrokerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    consent: async function(req, res) {

        var empName = req.body.emp_name;
        var empEmail = req.body.emp_email;
        var empSalary = req.body.emp_salary;
        var empDuration = req.body.emp_duration;
        var mortageNumber = req.body.mortgage_no;

        sails.log.info(" Consent requested values from employer ==>" + "Name: " +empName+ "," + "Email: "+empEmail+ "," + "Salary: "+empSalary+ "," + "Duration: "+empDuration+
            "," + "Mortgage number: "+mortageNumber);

        var updatedRecord = await Broker.update({where: {  
       
           
            id:mortageNumber
           
       
        }}).set({
            
            applicationStatus:"Employee Data Submitted To Broker",
            emp_salary:empSalary,
            emp_duration:empDuration
    
    }).fetch();

        if(updatedRecord.length==0)
        {
            sails.log.info("Invalid employee email" + "<br>")
            return res.json({"response":"Invalid Employee Email"});
        }
        else if(updatedRecord.length>0 && updatedRecord[0]["id"]==mortageNumber)
        {
            sails.log.info(" Details from Employer successfully received to broker" + "<br>")
            return res.json({"response":"success"});
        }
        else
        {
            sails.log.info("Invalid Mortgage number" + "<br>")
            return res.json({"response":"Invalid Mortage Number"});
        }
    },
};

