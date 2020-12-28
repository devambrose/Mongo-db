const mongoose=require('mongoose');

 mongoose.connect('mongodb://localhost/my_first_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


//connecting and creating the database if database name is not found
mongoose.connection.once('open',function(data){
  console.log("  ------Connected Succesfully-------------- \n ");


}).on('error',error=>{
   console.log("connection error:" ,error);
});


let data=[
    {name:"James Olson",home_state:'Carlifornia (San Jessup Campus)',lucky_number:3,birthday:{month:11,day:30,year:1992}},
    {name:"James Brooke",home_state:'New York (San Jessup Campus)',lucky_number:6,birthday:{month:1,day:16,year:1994}},
    {name:"James Megan",home_state:'Dumbar (San Jessup Campus)',lucky_number:7,birthday:{month:5,day:15,year:1999}},
    {name:"Fetty Olson",home_state:'loisiana (San Jessup Campus)',lucky_number:4,birthday:{month:8,day:20,year:1997}},
    {name:"Migos Olson",home_state:'Highlight (San Jessup Campus)',lucky_number:6,birthday:{month:7,day:20,year:1996}},
    {name:"Tinker Olson",home_state:'Carlifornia (San Jessup Campus)',lucky_number:2,birthday:{month:4,day:22,year:1994}}
]
//creating the database schema
const Schema =mongoose.Schema({
    name:String,
    home_state:String,
    lucky_number:Number,
    birthday:{
        month:Number,
        day:Number,
    }
});
const MarioChar=mongoose.model('student',Schema);
/*
data.forEach(studen=>{
    const student=new MarioChar({
       ...studen
    });
    student.save().then(function(){
        console.log(student.isNew==false ? student.name +"\n added Succesfully" : " Error my guy");
    });
});//inserting student data into the database

*/
//show all the values in the datase
MarioChar.find({}).then(function(result){
    console.log(result);
    console.log("---select all students from California (San Jose Jessup Campus).\n ")
});



MarioChar.findOne({home_state:'Carlifornia (San Jessup Campus)'}).then(function(result){
   console.log(result);
   console.log("---select all students whose lucky number is greater that three")
});

MarioChar.find({lucky_number : 3 }).then(function(result){
    console.log(result);
    console.log("---select all students from California (San Jose Jessup Campus).\n ")
});