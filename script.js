buienradar.load(function () {
    let wanneerZonsopgang = buienradar.sunrise();
    buienradar.date.time('zonsopgang', wanneerZonsopgang);
    buienradar.load(function (){
      buienradar.currentLocation.temperature.actual('temperatuur')
    });
  });
  