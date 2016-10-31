
#include "pitches.h"

const int redButton = 2;
const int redLight = 3;
int redState;
int oldRedState = 0;

const int greenButton = 4;
const int greenLight = 5;
int greenState;
int oldGreenState = 0;

const int yellowButton = 6;
const int yellowLight = 7;
int yellowState;
int oldYellowState = 0;

const int whiteButton = 8;
const int whiteLight = 9;
int whiteState;
int oldWhiteState = 0;

const int speaker = 13;

void setup(){
Serial.begin(9600);

//set button pins
pinMode(redButton, INPUT);
pinMode(greenButton, INPUT);
pinMode(yellowButton, INPUT);
pinMode(whiteButton, INPUT);

//set lights
pinMode (redLight, OUTPUT);
pinMode (greenLight, OUTPUT);
pinMode (yellowLight, OUTPUT);
pinMode (whiteLight, OUTPUT);

}

void loop(){

//reset lights to off
//    noTone(8);
digitalWrite(redLight, LOW);
digitalWrite(greenLight, LOW);
digitalWrite (yellowLight, LOW);
digitalWrite(whiteLight, LOW);

  //narrower leads = LED; wider leads = button pressed
redState = digitalRead(redButton);
greenState = digitalRead(greenButton);
yellowState = digitalRead(yellowButton);
whiteState = digitalRead(whiteButton);

//control red button and light
if (redState == 1){
  digitalWrite(redLight, HIGH);
  tone(speaker, 277, 8); //note CS4
}
else {
  digitalWrite(redLight, LOW);
}

//control green button and light
if (greenState == 1){
  digitalWrite(greenLight, HIGH);
  tone(speaker, 349, 8); //note F4
}
else {
  digitalWrite(greenLight,LOW);
}

//control yellow button and light
if (yellowState == 1){
  digitalWrite(yellowLight, HIGH);
  tone (speaker, 311, 8); //note DS4
}
else{
  digitalWrite(yellowLight, LOW);
}

//controle white button and light
if (whiteState == 1){
  digitalWrite(whiteLight, HIGH);
  tone(speaker, 233, 8); //note AS3
}
else{
  digitalWrite(whiteLight, LOW);
}


//check for state change and print if change
if (redState != oldRedState && redState == 1){
  Serial.println("red");
    delay(50);
}

if (greenState != oldGreenState && greenState == 1){
  Serial.println("green");
    delay(50);
}

if (yellowState != oldYellowState && yellowState ==1){
  Serial.println("yellow");
    delay(50);
}

if (whiteState != oldWhiteState && whiteState ==1){
  Serial.println("white");
    delay(50);
}

oldRedState = redState;
oldGreenState = greenState;
oldYellowState = yellowState;
oldWhiteState = whiteState;

}
