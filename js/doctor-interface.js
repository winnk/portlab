var Doctor = require('./../js/doctor.js').doctorModule;
// var getDoctors = require('./../js/doctor.js').getDoctors;
var currentDoc = new Doctor();

function Display(result){
  $('#symptom').empty();
  $('#showDocs').empty();
  result.forEach(function(doc){
    $('#showDocs').append('<li><strong>First Name:</strong> ' + doc.profile.first_name + '</li>');
  });
};

$(document).ready(function() {
  $('#symptomSearch').submit(function(){
    $('#showDocs').empty();
    var location = $('#location').val();
    var symptom = $('#symptom').val();
    event.preventDefault();
    currentDoc.getDoctors(symptom, location, Display);
      });
    });
