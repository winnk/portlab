var Doctor = require('./../js/doctor.js').docModule;

function displayDoctors(issue, doctor){
  doctors.forEach(function(doctor){
    $('.showDocs').append('<p> doctor.data.practices.name</p>');
  });
}

$(document).ready(function() {
  var currentDocObject = new Doctor();
  $('#symptomSearch').click(function() {
      console.log("search triggered");
    event.preventDefault();
    var issue = $('#issue').val;
    $('#issue').val('');
    console.log(issue);
    currentDocObject.getDoctors(issue, displayDoctors);
    }); // end search
 }); // end ready function
