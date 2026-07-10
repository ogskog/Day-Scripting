/*
#Device Information

  BOARD:  "PICO_R1_3",
  
#Programm Logistics

#Debugg Information

*/

var n = 0;l = 0;
var temperature = [ new(require("FlashEEPROM"))() ];
var fahrenheit  = (E.getTemperature() * (9/5) + 32).toFixed(2);
  console.log(             /*>E.getTemperature();=30.44795164539> */
              "Tempurature Conversions:" + "\n"
              + "     " + E.getTemperature().toFixed(2) + " °C " 
              + "     " + (E.getTemperature() * (9/5) + 32).toFixed(2) + " °F\n"
              + "     " + (E.getTemperature() * (9/5) + 459.67).toFixed(2) + " °K"
              + "     " + (E.getTemperature() + 459.67).toFixed(2) + " °R "
              + "     number: "+ n + " | " + E.toString(temperature[n].read(n)) + "°F\n"  );
for (let n = 0; n < 100; n++ ) { temperature[n] = new(require("FlashEEPROM"))(); }
setWatch(function () { LED1.write(1); if (n > 98) n=0; n++; fahrenheit  = (E.getTemperature() * (9/5) + 32).toFixed(2); setTimeout(function () { LED1.write(0); temperature[n].write(n, fahrenheit.toString()); console.log("ok number: " + n + " | " + E.toString(temperature[n].read(n)) + " °F\n"); }, 1000); } , BTN1 , { repeat: true } );

function list() {
  console.log("print");
  for (let l = 0; l < n; l++ ) {
  console.log("ok number: " + l + " | " + E.toString(temperature[l].read(l)) + " °F\n");
  }
}
