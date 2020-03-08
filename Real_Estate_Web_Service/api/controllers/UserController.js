/**
 * AppraisalRequestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
   
    login: async function(req, res) {
  
        
        User.find({username:req.body.username}).exec(function(err, item) {
            if(item.length==0)
            {
                sails.log.info("Invalid password");
                return res.json({ "response": "Invalid Password" });
            }            
            
            if(item[0].password == req.body.password)
            {
                item[0]["response"]="success";
                sails.log.info(" Real estate user login authorization Request ==>" + "Username" +  req.body.username);
                sails.log.info(" Successfully logged In");
                return res.json(item);
            }
            else
            {
                sails.log.info("Invalid password");
                return res.json({ "response": "Invalid Password" });
            }
        });
    },
    
};

