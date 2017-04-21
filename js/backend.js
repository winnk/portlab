var apiKey = require('./../.env').apiKey;

// var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=cardiologist&location=or-portland&skip=2&limit=10&user_key=faf8804b327e1667c939d01e9d89bb10' + apiKey;

function Doctor(){
}

// SEARCH BY SPECIALTY
// 'https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=' + specialty_uid + '+&location=37.773,-122.413,100&skip=2&limit=10&user_key=' + apiKey

// SEARCH BY PRACTICIES IN CITY https://api.betterdoctor.com/2016-03-01/practices?location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=faf8804b327e1667c939d01e9d89bb10

//VARIABLE SEARCH STRING 'https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=' + specialty_uid + '&location' + location  + '&skip=2&limit=10&user_key=' + apiKey

Bike.prototype.getSpecialtyLocation = function(location, displaySpecialty) {
  console.log("specialty runs");
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
        displaySpecialtyLocation(allDocs);
      })
      .fail(function(error) {
       $('.showDocs').text(error.responseJSON.message);
     });
};

exports.docModule = Doctor;
