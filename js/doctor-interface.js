var Doctor = require('./../js/doctor.js').docModule;
var getDoctors = require('./../js/doctor.js').getDoctors;

function displayDoctors(issue, doctor){
  doctors.forEach(function(doctor){
    $('.showDocs').append('<p> doctor.data.practices.name</p>');
  });
};

$(document).ready(function() {
  var currentDoc= new Doctor();
  $('#symptomSearch').submit(function() {
    console.log("search triggered");
    event.preventDefault();
    var issue = $('#symptom').val;
    $('#symptom').val('');
    console.log(issue);
    currentDoc.getDoctors(issue, displayDoctors);
    }); // end search
 }); // end ready function
