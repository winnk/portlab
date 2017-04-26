var Doctor = require('./../js/doctor.js').doctorModule;
var getDoctors = require('./../js/doctor.js').getDoctors;

var currentDoc = new Doctor();

function displayDoctors(doctors) {
  console.log("displayDoctors run");
  doctors.forEach(function(doctor) {
    $('#showDocs').append('<span>' + doctor.first_name + '<span><br>');
  });
};

$(document).ready(function() {
  $('#symptomSearch').submit(function(){
    console.log("search triggered");
    event.preventDefault();
    var symptom = $('#symptom').val();
    // $('#symptom').val('');
    console.log(symptom + "is symptom entered");
    currentDoc.getDoctors(symptom, displayDoctors);
    }); // end search
 }); // end ready function
