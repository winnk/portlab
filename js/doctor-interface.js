var Doctor = require('./../js/doctor.js').doctorModule;
// var getDoctors = require('./../js/doctor.js').getDoctors;

var currentDoc = new Doctor();

function displayDoctors(doctors) {
  $('#symptom').val();
  $('#showDocs').empty();
    doctors.forEach(function(doctor) {
    $('#showDocs').append( doctor.first_name + doctor.last_name);
  });
}

$(document).ready(function() {
  $('#symptomSearch').submit(function() {
    $('#showDocs').empty();
    var location = $('#location').val();
    var symptom = $('#symptom').val();
      console.log("symptom: " + symptom + "Location: " + location);
    currentDoc.getDoctors(symptom, location, displayDoctors);

    }); // end search
}); // end ready function
