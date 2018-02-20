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
    
    $('#mercuryAge').empty(mercury);
    $('#mercuryAge').append(mercury);

    $('#mercuryExpectancy') .empty(mercuryExpectancy);
    $('#mercuryExpectancy').append(mercuryExpectancy);

    $('#venusAge').empty(venus);
    $('#venusAge').append(venus);

    $('#venusExpectancy').empty(venusExpectancy);
    $('#venusExpectancy').append(venusExpectancy);

    $('#marsAge').empty(mars);
    $('#marsAge').append(mars);

    $('#marsExpectancy').empty(marsExpectancy);
    $('#marsExpectancy').append(marsExpectancy);

    $('#jupiterAge' + "years").empty(jupiter);
    $('#jupiterAge').append(jupiter);

    $('#jupiterExpectancy').empty(jupiterExpectancy);
    $('#jupiterExpectancy').append(jupiterExpectancy);

    $('#ageSeconds').empty(earth);
    $('#ageSeconds').append(earth);
  });
});
