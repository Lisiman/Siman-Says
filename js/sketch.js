var serial;
var sensorValue;


function setup() {
    
    serial = new p5.SerialPort(); // make a new instance of  serialport library
    serial.on('list', printList); // callback function for serialport list event
    serial.on('data', serialEvent); // callback for new data coming in
    serial.list(); // list the serial ports
    serial.open("/dev/cu.usbmodem1421"); // open a port1"); // o
}




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
        
        pressButton(sensorValue);
    }
}
