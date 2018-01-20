#include <CTTwoMotorPinID.h>
#include <CTTwoMotorControl.h>

CCTTwoMotorPinID MotorPins(
400,  // motor 1 speed adjust
400  // motor 2 speed adjust
);

// Object to control two robot motors
// CCTTwoMotorControl MC;

// MotorPins - Is used for motor controllers that do not use a logic IC. The Chicktech 
// robot uses a logic IC. 'MotorPins' in the Chicktech robot is used to compensate for 
// one motor being stronger than the other.
// 
// Parameters: pin assignment object, direction M1, speed M1, direction M2, speed M2
// MC.Go(MotorPins, 'F', 240, 'F', 240);  // Move the robot forward forever.

// time in milliseconds, direction M1, speed M1, direction M2, speed M2
CCTTwoMotorControl commandList[] = {
  CCTTwoMotorControl(100),
  CCTTwoMotorControl(500, 'F', 250, 'F', 250),  // move forward .5 seconds
  CCTTwoMotorControl(100),
  CCTTwoMotorControl(500, 'R', 250, 'R', 250),  // move backward .5 seconds
  CCTTwoMotorControl(100),
  CCTTwoMotorControl(500, 'F', 250, 'R', 250),  // turn left .5 seconds
  CCTTwoMotorControl(100),
  CCTTwoMotorControl(500, 'R', 250, 'F', 250),  // turn right .5 seconds
  CCTTwoMotorControl(100),
  CCTTwoMotorControl(2000, 'F', 250, 'F', 250),
  CCTTwoMotorControl(100),
  CCTTwoMotorControl(2000, 'R', 250, 'R', 250),
  CCTTwoMotorControl(100),
  CCTTwoMotorControl(4000, 'F', 250, 'F', 100),
  CCTTwoMotorControl(100) 
};
int commandCnt = sizeof(commandList) / sizeof(CCTTwoMotorControl);
int commandIdx = 0;

CCTTwoMotorControl varyLED;

// generial use index variable
int idx;

void setup() {
  Serial.begin(115200);
  MotorPins.Setup();   
  
  delay(2000);
}


void loop() {
  delay(100);
  Serial.print("Idx: ");
  Serial.print(commandIdx, DEC);
  Serial.println(" ");

/*
commandList is an array of CCTTwoMotorControl objects. The CCTTwoMotorControl
object method Engage is a polling method.
Polling methods or functions are continuously called until a certain condition is met.
In this case Engage is called until a certain amount of time has elapsed.
Engage will return 1 (true) if the specified time has elapsed or 0 (false) if not.
*/
  if(commandList[commandIdx].Engage(MotorPins)) commandIdx++;
  if(commandIdx >= commandCnt) {
    Serial.println("Stop");
    while(1);
  }
}




