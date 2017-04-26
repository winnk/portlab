var Doctor = require('./../js/doctor.js').doctorModule;
var getDoctors = require('./../js/doctor.js').getDoctors;

var displayDoctors = function(symptom, doctor) {
  console.log("displayDoctors run");
  doctors.forEach(function(doctor) {
        $('#showDocs').append('<tr class="warning">'+
                          "<td>doctor.data.practices.name</td>"+
                        '</tr>');
  });
};

$(document).ready(function() {
  var currentDoc = new Doctor();
  $('#symptomSearch').submit(function(){
    console.log("search triggered");
    event.preventDefault();
    var symptom = $('#symptom').val();
    $('#symptom').val('');
    console.log(symptom);
    currentDoc.getDoctors(symptom, displayDoctors);
    }); // end search
 }); // end ready function
