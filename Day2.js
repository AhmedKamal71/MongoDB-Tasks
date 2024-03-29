// Create student collection that has (FirstName, lastName, IsFired, FacultyID, array of objects, each object has CourseID, grade). 
db.createCollection("students")
db.students.insertMany([{"FirstName":"Fons","LastName":"Fanstone","IsFired":true,"FacultyID":"F003","Courses":{"CourseID":"C005","Grade":29}},
{"FirstName":"Onfre","LastName":"Till","IsFired":true,"FacultyID":"F002","Courses":{"CourseID":"C001","Grade":69}},
{"FirstName":"Emilee","LastName":"Limrick","IsFired":true,"FacultyID":"F005","Courses":{"CourseID":"C005","Grade":92}},
{"FirstName":"Salmon","LastName":"Bundy","IsFired":true,"FacultyID":"F004","Courses":{"CourseID":"C005","Grade":1}},
{"FirstName":"Judy","LastName":"Waldera","IsFired":true,"FacultyID":"F001","Courses":{"CourseID":"C001","Grade":76}},
{"FirstName":"Sinclair","LastName":"Enrico","IsFired":true,"FacultyID":"F005","Courses":{"CourseID":"C003","Grade":87}},
{"FirstName":"Evey","LastName":"Mouan","IsFired":true,"FacultyID":"F003","Courses":{"CourseID":"C005","Grade":38}},
{"FirstName":"Abbie","LastName":"Macia","IsFired":true,"FacultyID":"F003","Courses":{"CourseID":"C005","Grade":61}},
{"FirstName":"Klaus","LastName":"Perton","IsFired":false,"FacultyID":"F003","Courses":{"CourseID":"C005","Grade":36}},
{"FirstName":"Erich","LastName":"Breissan","IsFired":true,"FacultyID":"F002","Courses":{"CourseID":"C004","Grade":53}},
{"FirstName":"Glen","LastName":"Krysztofiak","IsFired":false,"FacultyID":"F003","Courses":{"CourseID":"C001","Grade":50}},
{"FirstName":"Roger","LastName":"Raynor","IsFired":true,"FacultyID":"F005","Courses":{"CourseID":"C001","Grade":40}},
{"FirstName":"Sinclair","LastName":"Puddephatt","IsFired":true,"FacultyID":"F005","Courses":{"CourseID":"C001","Grade":96}},
{"FirstName":"Roman","LastName":"Boulden","IsFired":true,"FacultyID":"F005","Courses":{"CourseID":"C004","Grade":22}},
{"FirstName":"Anderea","LastName":"Rhys","IsFired":false,"FacultyID":"F005","Courses":{"CourseID":"C001","Grade":59}},
{"FirstName":"Dania","LastName":"Flintuff","IsFired":true,"FacultyID":"F003","Courses":{"CourseID":"C003","Grade":44}},
{"FirstName":"Giselle","LastName":"Dedham","IsFired":true,"FacultyID":"F003","Courses":{"CourseID":"C001","Grade":50}},
{"FirstName":"Brietta","LastName":"Sleath","IsFired":false,"FacultyID":"F003","Courses":{"CourseID":"C003","Grade":7}},
{"FirstName":"Bill","LastName":"Klouz","IsFired":false,"FacultyID":"F005","Courses":{"CourseID":"C001","Grade":96}},
{"FirstName":"Billy","LastName":"Loudyan","IsFired":false,"FacultyID":"F001","Courses":{"CourseID":"C001","Grade":49}},
{"FirstName":"Agnella","LastName":"Cobbled","IsFired":false,"FacultyID":"F003","Courses":{"CourseID":"C003","Grade":9}},
{"FirstName":"Cornelius","LastName":"Minney","IsFired":false,"FacultyID":"F001","Courses":{"CourseID":"C004","Grade":19}},
{"FirstName":"Emilie","LastName":"Primarolo","IsFired":true,"FacultyID":"F004","Courses":{"CourseID":"C002","Grade":89}},
{"FirstName":"Courtnay","LastName":"Norrie","IsFired":true,"FacultyID":"F002","Courses":{"CourseID":"C004","Grade":88}},
{"FirstName":"Park","LastName":"Boshers","IsFired":false,"FacultyID":"F004","Courses":{"CourseID":"C002","Grade":67}},
{"FirstName":"Mildred","LastName":"Rennard","IsFired":false,"FacultyID":"F001","Courses":{"CourseID":"C005","Grade":54}},
{"FirstName":"Hiram","LastName":"Sauniere","IsFired":true,"FacultyID":"F003","Courses":{"CourseID":"C005","Grade":34}},
{"FirstName":"Felita","LastName":"Sharma","IsFired":false,"FacultyID":"F003","Courses":{"CourseID":"C004","Grade":27}},
{"FirstName":"Allin","LastName":"Piotr","IsFired":true,"FacultyID":"F002","Courses":{"CourseID":"C001","Grade":70}},
{"FirstName":"Fiona","LastName":"Drinkel","IsFired":true,"FacultyID":"F004","Courses":{"CourseID":"C003","Grade":40}},
{"FirstName":"Meg","LastName":"Maddrah","IsFired":true,"FacultyID":"F002","Courses":{"CourseID":"C001","Grade":40}},
{"FirstName":"Phyllis","LastName":"Gare","IsFired":true,"FacultyID":"F003","Courses":{"CourseID":"C005","Grade":42}},
{"FirstName":"Kalvin","LastName":"Cantu","IsFired":false,"FacultyID":"F002","Courses":{"CourseID":"C001","Grade":5}},
{"FirstName":"Addison","LastName":"Cotman","IsFired":false,"FacultyID":"F002","Courses":{"CourseID":"C003","Grade":32}},
{"FirstName":"Verla","LastName":"Leyninye","IsFired":false,"FacultyID":"F003","Courses":{"CourseID":"C002","Grade":71}},
{"FirstName":"Sayre","LastName":"Ruzic","IsFired":true,"FacultyID":"F003","Courses":{"CourseID":"C005","Grade":53}},
{"FirstName":"Maryrose","LastName":"Binestead","IsFired":false,"FacultyID":"F003","Courses":{"CourseID":"C003","Grade":72}},
{"FirstName":"Carlie","LastName":"Wheeler","IsFired":false,"FacultyID":"F002","Courses":{"CourseID":"C004","Grade":50}},
{"FirstName":"Vonnie","LastName":"Gerler","IsFired":true,"FacultyID":"F001","Courses":{"CourseID":"C005","Grade":48}},
{"FirstName":"Vilma","LastName":"Giddens","IsFired":true,"FacultyID":"F003","Courses":{"CourseID":"C002","Grade":93}},
{"FirstName":"Louisette","LastName":"Meltetal","IsFired":true,"FacultyID":"F005","Courses":{"CourseID":"C005","Grade":92}},
{"FirstName":"Kiley","LastName":"Attlee","IsFired":true,"FacultyID":"F005","Courses":{"CourseID":"C004","Grade":67}},
{"FirstName":"Jenica","LastName":"Staunton","IsFired":false,"FacultyID":"F002","Courses":{"CourseID":"C001","Grade":4}},
{"FirstName":"Bond","LastName":"Cuxon","IsFired":false,"FacultyID":"F003","Courses":{"CourseID":"C004","Grade":31}},
{"FirstName":"Patty","LastName":"Revely","IsFired":true,"FacultyID":"F001","Courses":{"CourseID":"C003","Grade":98}},
{"FirstName":"Skippie","LastName":"Spellar","IsFired":true,"FacultyID":"F001","Courses":{"CourseID":"C005","Grade":43}},
{"FirstName":"Kirby","LastName":"Soots","IsFired":false,"FacultyID":"F003","Courses":{"CourseID":"C003","Grade":37}},
{"FirstName":"Marget","LastName":"MacFadzean","IsFired":true,"FacultyID":"F001","Courses":{"CourseID":"C005","Grade":98}},
{"FirstName":"Robbyn","LastName":"Brocks","IsFired":false,"FacultyID":"F005","Courses":{"CourseID":"C002","Grade":65}},
{"FirstName":"Fred","LastName":"Strowlger","IsFired":false,"FacultyID":"F001","Courses":{"CourseID":"C002","Grade":23}}])

// Create Faculty collection that has (Faculty Name, Address).
db.createCollection("faculty")
db.faculty.insertMany([{"FacultyName":"Guss","address":"Waterstone"},
{"FacultyName":"Sonni","address":"Krout"},
{"FacultyName":"Irwin","address":"Falconer-Taylor"},
{"FacultyName":"Kat","address":"Chucks"},
{"FacultyName":"Karlan","address":"Farquhar"},
{"FacultyName":"Ranique","address":"Symms"},
{"FacultyName":"Valerie","address":"Seeney"},
{"FacultyName":"Abigail","address":"Douberday"},
{"FacultyName":"Jaclyn","address":"Noone"},
{"FacultyName":"Emalee","address":"Nowland"},
{"FacultyName":"Philipa","address":"Marsters"},
{"FacultyName":"Tabbitha","address":"Mistry"},
{"FacultyName":"Tobias","address":"Weldon"},
{"FacultyName":"Tanitansy","address":"Atcherley"},
{"FacultyName":"Glynda","address":"Corner"},
{"FacultyName":"Cozmo","address":"Butner"},
{"FacultyName":"Tomlin","address":"Jurisch"},
{"FacultyName":"Edie","address":"Mackstead"},
{"FacultyName":"Paulita","address":"Conrath"},
{"FacultyName":"Rhea","address":"Speke"},
{"FacultyName":"Eunice","address":"Pasterfield"},
{"FacultyName":"Wendel","address":"Emerine"},
{"FacultyName":"Kaleb","address":"Claasen"},
{"FacultyName":"Blaire","address":"Ivett"},
{"FacultyName":"Tammara","address":"Roeby"},
{"FacultyName":"Marillin","address":"Woodage"},
{"FacultyName":"Susanna","address":"Mathonnet"},
{"FacultyName":"Karlie","address":"Davidofski"},
{"FacultyName":"Reagan","address":"Chivrall"},
{"FacultyName":"Giraldo","address":"Wormell"},
{"FacultyName":"Clay","address":"Poschel"},
{"FacultyName":"Giordano","address":"Oulner"},
{"FacultyName":"Amberly","address":"Chazier"},
{"FacultyName":"Retha","address":"Guidoni"},
{"FacultyName":"Ruperta","address":"Yankov"},
{"FacultyName":"Katharyn","address":"Stourton"},
{"FacultyName":"Babbette","address":"Trevaskis"},
{"FacultyName":"Magdaia","address":"Fullegar"},
{"FacultyName":"Jeanne","address":"Steptoe"},
{"FacultyName":"Gaylord","address":"Kidstoun"},
{"FacultyName":"Shawn","address":"Towle"},
{"FacultyName":"Marion","address":"Hrinishin"},
{"FacultyName":"Verina","address":"Geraldini"},
{"FacultyName":"Vilhelmina","address":"Snoding"},
{"FacultyName":"Shermy","address":"Chillingworth"},
{"FacultyName":"Tatiania","address":"Scopyn"},
{"FacultyName":"Olag","address":"Calafato"},
{"FacultyName":"Janie","address":"Del Checolo"},
{"FacultyName":"Arline","address":"Lescop"},
{"FacultyName":"Isador","address":"Houlahan"}])

//Create Course collection, which has (Course Name, Final Mark).
db.createCollection("course")
db.course.insertMany([{"CourseName":"Butchard","FinalMark":86},
{"CourseName":"Toynbee","FinalMark":18},
{"CourseName":"Leuren","FinalMark":41},
{"CourseName":"Benduhn","FinalMark":28},
{"CourseName":"Drysdall","FinalMark":85},
{"CourseName":"L'Homme","FinalMark":55},
{"CourseName":"Kelway","FinalMark":52},
{"CourseName":"Biddiss","FinalMark":13},
{"CourseName":"Madle","FinalMark":14},
{"CourseName":"Webber","FinalMark":36},
{"CourseName":"Faux","FinalMark":86},
{"CourseName":"Frankiewicz","FinalMark":71},
{"CourseName":"Kimmons","FinalMark":67},
{"CourseName":"Cleeton","FinalMark":86},
{"CourseName":"McAuslene","FinalMark":93},
{"CourseName":"Gardener","FinalMark":77},
{"CourseName":"Gadaud","FinalMark":14},
{"CourseName":"Rockcliffe","FinalMark":51},
{"CourseName":"Wiggall","FinalMark":12},
{"CourseName":"Slany","FinalMark":20},
{"CourseName":"Cormode","FinalMark":92},
{"CourseName":"Terrell","FinalMark":14},
{"CourseName":"Jefferson","FinalMark":48},
{"CourseName":"Darrington","FinalMark":2},
{"CourseName":"Simmons","FinalMark":72},
{"CourseName":"Gozard","FinalMark":29},
{"CourseName":"Union","FinalMark":56},
{"CourseName":"Mees","FinalMark":81},
{"CourseName":"Lewis","FinalMark":55},
{"CourseName":"Hinnerk","FinalMark":68},
{"CourseName":"MacHostie","FinalMark":7},
{"CourseName":"Whittock","FinalMark":85},
{"CourseName":"Banton","FinalMark":73},
{"CourseName":"Wasbey","FinalMark":25},
{"CourseName":"Jacklin","FinalMark":51},
{"CourseName":"Billyard","FinalMark":92},
{"CourseName":"Sainsberry","FinalMark":30},
{"CourseName":"Wedmore.","FinalMark":12},
{"CourseName":"Marsters","FinalMark":33},
{"CourseName":"Hardcastle","FinalMark":45},
{"CourseName":"Blincoe","FinalMark":49},
{"CourseName":"Baal","FinalMark":46},
{"CourseName":"Bedle","FinalMark":82},
{"CourseName":"Southan","FinalMark":44},
{"CourseName":"Freebury","FinalMark":60},
{"CourseName":"Skally","FinalMark":44},
{"CourseName":"Betz","FinalMark":20},
{"CourseName":"Drewitt","FinalMark":64},
{"CourseName":"Pittford","FinalMark":25},
{"CourseName":"Schuelcke","FinalMark":37}])

//2. Display each student Full Name along with his average grade in all courses. $concat
db.students.aggregate([
  {
    $addFields: {
      FullName: { $concat: ["$FirstName", " ", "$LastName"] }
    }
  },
  {
    $project: {
      FullName: 1,
      Average: { $avg: "$Courses.Grade" }
    }
  }
])

//3. Using aggregation display the sum of final mark for all courses in Course collection
db.course.aggregate([
  {
    $group: {
      _id: null,
      TotalMarks: { $sum: "$FinalMark" }
    }
  },{
      $project:{_id:0,TotalMarks:1}
  }
])

//4. Implement (one to many) relation between Student and Course, by adding array of Courses IDs in the student object.
let student = db.students.findOne({ FirstName: "Dania" });
    let courseIds = student.Courses;
    courseIds.forEach(courseId => {
        let course = db.Course.findOne({ _id: courseId });
        print(`Course Name: ${course.CourseName}, Final Mark: ${course.FinalMark}`);
})

// ----------------------------------------------------------------------------------------------------------------------
db.students.aggregate([
  {
    $match: { FirstName: "Dania" } // Example student name
  },
  {
    $lookup: {
      from: "faculty",
      localField: "FacultyID",
      foreignField: "_id",
      as: "faculty"
    }
  },
  {
    $unwind: "$faculty"
  },
  {
    $project: {
      FirstName: 1,
      LastName: 1,
      Faculty: "$faculty.FacultyName"
    }
  }
])
// ----------------------------------------------------------------------------------------------------------------------






