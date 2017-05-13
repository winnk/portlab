var Doctor = require('./../js/doctor.js').doctorModule;
// var getDoctors = require('./../js/doctor.js').getDoctors;

var currentDoc = new Doctor();

function displayDoctors(doctors){
  $('#symptom').val();
  $('#showDocs').empty();
    doctors.forEach(function(doctor) {
      results.forEach(function(doctorDetail){
        $('showDocs').append("<strong>First Name:</strong> " + doctorDetail.first_name);
        });
});
}

$(document).ready(function() {
  $('#symptomSearch').submit(function() {
    $('#showDocs').empty();
    var location = $('#location').val();
    var symptom = $('#symptom').val();
      event.preventDefault();
    currentDoc.getDoctors(symptom, location, displayDoctors).done(function(results){
      results.forEach(function(docDetail){
        console.log("results returned");
        $('showDocs').append("<strong>First Name:</strong> " + docDetail.firstName);
      });
    });
    }); // end search
}); // end ready function
