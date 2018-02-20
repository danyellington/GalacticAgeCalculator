import { Age } from "./../js/spaceAge.js";

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    let age = new Age(parseInt($('#ageInput').val()), parseInt($('#expectancy').val()));
    let mercury = age.ageMercury();
    let mercuryExpectancy = age.lifeExpectancyMercury();
    let venus = age.ageVenus();
    let venusExpectancy = age.lifeExpectancyVenus();
    let mars = age.ageMars();
    let marsExpectancy = age.lifeExpectancyMars();
    let jupiter = age.ageJupiter();
    let jupiterExpectancy = age.lifeExpectancyJupiter();
    let earth = age.ageInSeconds();
    $('#mercuryAge').append(mercury);
    $('#mercuryExpectancy').append(mercuryExpectancy);
    $('#venusAge').append(venus);
    $('#venusExpectancy').append(venusExpectancy);
    $('#marsAge').append(mars);
    $('#marsExpectancy').append(marsExpectancy);
    $('#jupiterAge').append(jupiter);
    $('#jupiterExpectancy').append(jupiterExpectancy);
    $('#ageSeconds').append(earth);//ageInSeconds
  });
});
