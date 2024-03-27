// LAB:1

//start create new collection named instructors following with inserts 
db.createCollection("Instructors");
db.Instructors.insertMany([{_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},

                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},

                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},

                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
 ]);
//-----------------------------------------------------------------------------------------------
 
// b. Insert instructor without firstName and LastName (mongo will raise an error or not ?)
 db.Instructors.insertMany([{_id:10,
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]} // No Error, data will be inserted successfully
]);
//--------------------------------------------------------------------------------------------------
//a. Display all documents for instructors collection
db.Instructors.find();
//--------------------------------------------------------------------------------------------------
//b. Display all instructors with fields firstName, lastName and address
db.Instructors.find({}, {_id:0, firstName: 1, lastName: 1, address: 1 });
//--------------------------------------------------------------------------------------------------
//c. Display firstName and city(not full address) for instructors with age 21
db.Instructors.find({age:21} ,{_id:0, firstName:1,"address.city":1});
//--------------------------------------------------------------------------------------------------
// Display firstName and age for instructors live in Mansoura city.
db.Instructors.find({"address.city":"mansoura"},{_id:0, firstName:1});
//--------------------------------------------------------------------------------------------------
// Try To Run These Commands:
//command:1:
db.Instructors.find({firstName:"ryhab"},{lastName:"farouq"},{firstName:1,lastName:1}); // => No Outputs because "ryhab" doesn't exist
//--------------------------------------------------------------------------------------------------
//command:2
db.Instructors.find({courses:"mvc"},{firstName:1,courses:1}); // => return all objects which courses contain "mvc" course 
//----------------------------------------------------------------------------------------------------------------------------------------------
//LAB:2

//a. Display all documents in instructors collection
db.Instructors.find();
//-------------------------------------------------------------------------------------------------------------
//b. Display all instructors with salaries greater than 4000 (only show firstName and salary)
db.Instructors.find({salary:{$gt:4000}},{_id:0,firstName:1, salary:1});
//-------------------------------------------------------------------------------------------------------------
//c. Display all instructors with ages less than or equal 25
db.Instructors.find({age:{$lte:25}});
//-------------------------------------------------------------------------------------------------------------
//d. Display all instructors with city mansoura and sreet number 10 or 14 
db.Instructors.find({$and:[
    {"address.city":"mansoura"},
    {"address.street":{$in:[10,14]}}
    ]},
    {_id:0,firstName:1,salary:1,address:1});
//-------------------------------------------------------------------------------------------------------------
//e. Display all instructors who have js and jquery in their courses (both of them not one of them).
db.Instructors.find({courses:{$all:["js","jquery"]}})
//-------------------------------------------------------------------------------------------------------------
//f. Display number of courses for each instructor and display first name with number of courses.
db.Instructors.find().forEach(ele=>{
    print(`${ele.firstName} : ${ele.courses.length}`);
})
//-------------------------------------------------------------------------------------------------------------
//g- Write mongodb query to get all instructors that have firstName and lastName properties , sort them by firstName ascending then by 
//lastName descending and finally display their data FullName and age 

db.Instructors.find({firstName:{$exists:true},lastName:{$exists:true}},
{_id:0, age:1,fullName:{$concat:["$firstName"," ","$lastName"]}})
.sort({firstName:1,lastName:-1}).forEach(ele=>{
    print(`FullName: ${ele.fullName} Age: ${ele.age}`);
});
//-------------------------------------------------------------------------------------------------------------
//h. Find all instructors that have fullName that contains “mohammed”.
db.Instructors.find({
  $or: [
    { firstName: { $regex: /mohammed/i } },
    { lastName: { $regex: /mohammed/i } }
  ]
})
//-------------------------------------------------------------------------------------------------------------
//i. Delete instructor with first name “ebtesam” and has only 5 courses in courses array
db.Instructors.deleteOne({firstName: "ebtesam","courses": { $size: 5 }});
//-------------------------------------------------------------------------------------------------------------
// j. Add active property to all instructors and set its value to true.
db.Instructors.updateMany({},{$set:{active:true}})
//-------------------------------------------------------------------------------------------------------------
//k. Change “EF” course to “jquery” for “mazen mohammed” instructor
db.Instructors.updateOne({firstName:"mazen", lastName:"mohammed", courses: "EF"},{$set:{"courses.$":"jquery"}})
//-------------------------------------------------------------------------------------------------------------
//l. Add jquery course for “noha hesham”.
db.Instructors.updateOne({firstName:"noha", lastName: "hesham"}, {$push:{courses: "jquery"}});
//-------------------------------------------------------------------------------------------------------------
//m. Remove courses property for “ahmed mohammed ” instructor
db.Instructors.updateOne({firstName:"ahmed",lastName:"mohamed"},{$unset:{courses:""}})
//-------------------------------------------------------------------------------------------------------------
//n. Decrease salary by 500 for all instructors that has only 3 courses in their list ($inc)
db.Instructors.updateMany({courses:{$size:3}},{$inc:{salary:-500}})
//-------------------------------------------------------------------------------------------------------------
//o. Rename address field for all instructors to fullAddress.
db.Instructors.updateMany({},{$rename:{address:"fullAddress"}})
//-------------------------------------------------------------------------------------------------------------
//p. Change street number for noha hesham to 20
db.Instructors.updateOne({firstName:"noha",lastName:"hesham"},{$set:{"fullAddress.street":20}})
//-------------------------------------------------------------------------------------------------------------







