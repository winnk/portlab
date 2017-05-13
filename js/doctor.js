var apiKey = require('./../.env').apiKey;
var apiPre = "https://api.betterdoctor.com/2016-03-01/doctors?query=";
var apiLocation = "&location=";
var apiPost = "&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=";

exports.doctorModule = Doctor;

function Doctor() {}

Doctor.prototype.getDoctors = function(symptom, location, displayDoctors) {
  console.log("getDoctor runs");
  var searchString = (apiPre + symptom + apiLocation + location + apiPost + apiKey);
  console.log("api string is: " + searchString);
  return $.get(searchString).then(function(response) {
      var doctors = [];
      response.data.forEach(function(doctor){
      doctors.push({
        "firstName": doctor.profile.first_name,
        "lastName": doctor.profile.last_name,
        "drtitle": doctor.profile.title});
      });
       return doctors;
       console.log("got response" + doctors);
     }).fail(function(error){
       console.log(error);
    });
  };
