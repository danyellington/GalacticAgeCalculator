// mercury .24
// venus .62
// mars 1.88
// jupiter 11.86


export class Age{
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  ageInSeconds() {
    const ageInSeconds = this.age * 365 * 24 * 60 * 60;
    return ageInSeconds;
  }

  lifeExpectancy(){
    const calcLifeExpectancy = this.expectancy - this.age;
    return Math.ceil(calcLifeExpectancy);
  }

//Mercury
  ageMercury(){
    const mercuryAge = this.age / 0.24;
    return Math.floor(mercuryAge);
  }

  lifeExpectancyMercury() {
    const mercuryExpectancy = this.expectancy / 0.24;
    return Math.ceil(mercuryExpectancy - this.ageMercury());
  }

//Venus
  ageVenus(){
    const venusAge = this.age / 0.62;
    return Math.floor(venusAge);
  }

  lifeExpectancyVenus() {
    const venusExpectancy = this.expectancy / 0.62;
    return Math.ceil(venusExpectancy - this.ageVenus());
  }

//Mars
  ageMars(){
    const marsAge = this.age / 1.88;
    return Math.floor(marsAge);
  }

  lifeExpectancyMars() {
    const marsExpectancy = this.expectancy / 1.88;
    return Math.ceil(marsExpectancy - this.ageMars());
  }

//Jupiter
  ageJupiter(){
    const jupiterAge = this.age / 11.86;
    return Math.floor(jupiterAge);
  }

  lifeExpectancyJupiter() {
    const jupiterExpectancy = this.expectancy / 11.86;
    return Math.ceil(jupiterExpectancy - this.ageJupiter());
  }




}
