var express=require('express');
var app=express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bodyParser = require('body-parser');
const port=process.env.PORT || 3000;

app.use(bodyParser.json());
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://fyletest:fyletest@ds251799.mlab.com:51799/fyle');
var Schema=mongoose.Schema;
var Bankinfo=mongoose.model("Bankinfo",
	new Schema({ ifsc:String,bank_id:Number,branch:String,address:String,city:String
		                   ,district:String,state:String,bank_name:String }),
           "bankinfo");




app.get('*',(req,res)=>{
   res.send("invalid endpoint")
})

app.post('/details',(req,res)=>{
    return Bankinfo.findOne({ifsc:req.body.ifsc})
                   .exec()
                   .then((details)=>{
                      if(!details){
                      	return res.status(400).send("invalid ifsc")
                      }
                      res.send({details});
                   })
	       
})


app.post('/details2',(req,res)=>{
	// var city=req.body.city;
	// var bankname=req.body.bankname;
	// if(!city || !bankname){
	// 	return res.status(404).json({error:true,message:"no ifsc provided"})
	// }

	return Bankinfo.find({city:req.body.city,bank_name:req.body.bankname},)
	        .exec()
	        
	        .then(branchdetails=>{
	        	if(!branchdetails){
	        		return res.status(500).send("invaid ifsc ")
	        	}
	        	res.status(200).json({branchdetails})
	        	
	        		        })
	        .catch(e=>res.send("invalid ifsc"))

})

app.listen(port,()=>{
	console.log(`started on ${port}`)
})