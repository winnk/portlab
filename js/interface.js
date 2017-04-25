var Doctor = require('./../js/backend.js').docModule;
// var apiKey = require('./../.env').apiKey;
//
function displayDoctors(docs){
  docs.forEach(function(doc){
    $('.showDocs').append("<a href=https://api.betterdoctor.com/2016-03-01/doctors/" + npi + "?user_key=" + apiKey + ">Doctor: </a>" + doc.title + doc.name + "<br>");
  });
};

$(document).ready(function() {
  var currentDocObject = new Doctor();
  $('#symptomSearch').click(function() {
      console.log("search triggered");
    event.preventDefault();
    var issue = $('#issue').val;
    $('#issue').val('');
    console.log(issue);
    currentDocObject.getSpecialtyLocation(issue, displayDoctors);
    }); // end search
 }); // end ready function



 // // VARIABLE SEARCH STRING"<span><a href=https://api.betterdoctor.com/2016-03-01/doctors/" + npi + "?user_key=faf8804b327e1667c939d01e9d89bb10"
 //
 // // SEARCH BY NPI https://api.betterdoctor.com/2016-03-01/doctors/npi/1992773295?user_key=faf8804b327e1667c939d01e9d89bb10
