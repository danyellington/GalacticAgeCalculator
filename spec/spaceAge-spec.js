import { Age } from './../js/spaceAge.js';

describe('spaceAge', function() {


  it('should return the user age', function() {
    let userAge = new Age("12");
    expect(userAge instanceof Age);
  });


  it('should return the user age in seconds', function() {
    let secondsAge = new Age("1");
    expect(secondsAge.ageInSeconds()).toEqual(31536000);
  });

  it('should calculate user age on Mercury', function() {
    let userAge = new Age("12");
    expect(userAge.ageMercury()).toEqual(50);
  });

  it('should calculate user age on Venus', function() {
    let userAge = new Age("12");
    expect(userAge.ageVenus()).toEqual(19);
  });

  it('should calculate user age on Mars', function() {
    let userAge = new Age("45");
    expect(userAge.ageMars()).toEqual(23);
  });

  it('should calculate user age on Jupiter', function() {
    let userAge = new Age("30");
    expect(userAge.ageJupiter()).toEqual(2);
  });

  it('should calculate the amount of time remaining on user life expectancy', function() {
    let userAge = new Age("3", "5");
    expect(userAge.lifeExpectancy()).toEqual(2);
  });

  it('should calculate the amount of time remaining on user life expectancy on Mercury', function() {
    let userAge = new Age("3", "5");
    expect(userAge.lifeExpectancyMercury()).toEqual(9);
  });

  it('should calculate the amount of time remaining on user life expectancy on Venus', function() {
    let userAge = new Age("12", "13");
    expect(userAge.lifeExpectancyVenus()).toEqual(2);
  });

  it('should calculate the amount of time remaining on user life expectancy on Mars', function() {
    let userAge = new Age("12", "25");
    expect(userAge.lifeExpectancyMars()).toEqual(8);
  });

  it('should calculate the amount of time remaining on user life expectancy on Jupiter', function() {
    let userAge = new Age("39", "82");
    expect(userAge.lifeExpectancyJupiter()).toEqual(4);
  });
});
