var apiKey = require('./../.env').apiKey;
// var apiPre =
// var apiIssue =
// var apiPost =



// var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=cardiologist&location=or-portland&skip=2&limit=10&user_key=faf8804b327e1667c939d01e9d89bb10' + apiKey;

function Doctor(){
}

// SEARCH BY SPECIALTY
// 'https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=' + specialty_uid + '+&location=37.773,-122.413,100&skip=2&limit=10&user_key=' + apiKey

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

exports.getDoctors = function(co, displayDoctors) {
  console.log("complaint runs");
 $.get('https://api.betterdoctor.com/2016-03-01/practices?location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key='+ apiKey).then(function(response) {
        var allDocs = [];
          response.docs.forEach(function(doc){
          var docObject = {};
          docObject.uid = doc.uid;
          docObject.location_slug = doc.location_slug;
          docObject.name = doc.name;
          docObject.first_name = doc.first_name;
          docObject.last_name = doc.last_name;
          // docObject. = doc.;
          docObject.city = doc.city;
          docObject.npi = doc.npi;
          docObject.title = doc.title;
          allDocs.push(docObject);
        });
        displayDoctors(allDocs);
      })
      .fail(function(error){
	      $('#error').text(error.responseJSON.message);
	    });
};

exports.docModule = Doctor;
