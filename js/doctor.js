var apiKey = require('./../.env').apiKey;
var apiPre = "https://api.betterdoctor.com/2016-03-01/doctors?";
var apiPost = "&location=37.773,-122.413,100&skip=2&limit=10&user_key=";

function Doctor(){
}

// exports.getDoctors = function(issue, displayDoctors) {
//   console.log("getDoctor runs");
//  $.get(apiPre + issue + apiPost + apiKey).then(function(response) {
//     displayDoctors(issue, response.data.practices.name);
//   })
//    .fail(function(error){
// 	  $('#error').text(error.responseJSON.message);
//   });
// };

exports.getDoctors = function(issue, displayDoctors) {
  console.log("getDoctor runs");
 $.get('https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=cardiologist&location=or-portland&skip=2&limit=10&user_key=faf8804b327e1667c939d01e9d89bb10').then(function(response) {
    displayDoctors(issue, response.data.practices.name);
  })
   .fail(function(error){
	  $('#error').text(error.responseJSON.message);
  });
};

exports.docModule = Doctor;


// var resource_url = apiPre + issue + apiPost + apiKey; 'https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=cardiologist&location=or-portland&skip=2&limit=10&user_key=faf8804b327e1667c939d01e9d89bb10' + apiKey;


// SEARCH BY SPECIALTY
// 'https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=' + specialty_uid + apiPost + apiKey

// SEARCH BY PRACTICIES IN CITY https://api.betterdoctor.com/2016-03-01/practices?location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=faf8804b327e1667c939d01e9d89bb10

//VARIABLE SEARCH STRING 'https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=' + specialty_uid + '&location' + location  + '&skip=2&limit=10&user_key=' + apiKey


// exports.getDoctors = function(medicalIssue) {
//   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
//    .then(function(result) {
//       console.log(result);
//     })
//    .fail(function(error){
//       console.log("fail");
//     });
// };
