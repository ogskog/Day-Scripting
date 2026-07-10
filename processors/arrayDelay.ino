/*

:-: Author:   SKOG
:-: Email:    skog@icontrolsystems.net
:-: Date:     19/04/2018
:-: Revision: version# 0.1
:-: License:  Public Domain w/contract

:-: Board:    Mega
:-: Pins:     54
:-: io:       38
:-: serial    12
:-: analog    8
:-: power:    Mini jack usb, 2-wire (3v), connector jack

:-: :-: Default Set up
            All ports are declared
            Power sequencing initialized
            Device connectivity established
            
:-: :-: ReadMe.txt
  
  untested 
  
  Remainder :-: 
    1) create external value for module to be created into a library componant
    2) Serial.write requires exact values - no good for substitutes
    3) activate the indicator does not yet toggle, so it has to be held
    4) should go through the array index to set the port to communicate
    5) toggle or digital trigger should also have an array for assignm

*/
// :-: SD - Version: Latest 
#include <SD.h> // includes librarys <SD cards>

#define btn;    // defines a constant prior to compile


// :-: Parameters get declared here
// :-: global variables get declared here

int           p; //ports

bool        sSt; //functional serial string digital indicator
bool      sStFb; //functional serial string digital feedback


int           i; //index value

String   s[100]; //reference for the serial index number being adjusted
String       tS; //temp string value
String       nS; //new string value

String concant = String("print: ");


// :-: hardware configurations get declared here

void setup() {
    
}

void loop() {
    
}
