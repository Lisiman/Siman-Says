var serial;
var sensorValue;
//var a;

var light = [y, b, g, r];
var y = 150;
var b = 150;
var g = 150;
var r = 150;

function setup() {
    // createCanvas(400, 400);
    serial = new p5.SerialPort(); // make a new instance of  serialport library
    serial.on('list', printList); // callback function for serialport list event
    serial.on('data', serialEvent); // callback for new data coming in
    serial.list(); // list the serial ports
    serial.open("/dev/cu.usbmodem1421"); // open a port1"); // o
}

// function draw() { 
// // a=sensorValue;
//   background(0);
//   drawElli();
//  // println
// }
// function drawElli(){
//   strokeWeight(0);
//   fill(243,234,24,y);
//   arc(200,200,350,350,HALF_PI,PI);
//    fill(104,201,242,b);
//   arc(200,200,350,350,0,HALF_PI);  
//  fill(42,178,75,g);
//   arc(200,200,350,350,3/2*PI,TWO_PI);  
//    fill(239,72,58,r);
//   arc(200,200,350,350,PI,3/2*PI);
// }


function printList(portList) {
    for (var i = 0; i < portList.length; i++) {
        // Display the list the console:
        println(i + " " + portList[i]);
    }
}

var colorTable = {
  'red': function(){
    $('#red').trigger('click');
  },
  'green': function(){
    $('#green').trigger('click');
  },
  'white': function(){
    $('#blue').trigger('click');
  },
  'yellow': function(){
    $('#yellow').trigger('click');
  }
}

function pressButton(color) {
  colorTable[color]();
}

function serialEvent() {
    var inString = serial.readLine(); // reads println string in Arduino
    if (inString.length > 0) {
        sensorValue = inString.trim();
        println(sensorValue);
        //sensorValue = Number(inString/4);
        // if (sensorValue == "white") {
        //     y = 150;
        //     b = 255;
        //     g = 150;
        //     r = 150;
        // }
        // if (sensorValue == "green") {
        //     y = 150;
        //     b = 150;
        //     g = 255;
        //     r = 150;
        // }
        // if (sensorValue == "yellow") {
        //     y = 255;
        //     b = 150;
        //     g = 150;
        //     r = 150;
        // }
        // if (sensorValue == "red") {
        //     y = 150;
        //     b = 150;
        //     g = 150;
        //     r = 255;
        // }
        pressButton(sensorValue);
    }
    //setTimeout(function(){
      
    //}, 1);
    
    // console.log(sensorValue);
    // Simon.init();
}
