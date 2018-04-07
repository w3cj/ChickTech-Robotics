#include <CTTwoMotorPinID.h>
#include <CTTwoMotorControl.h>

CCTTwoMotorPinID MotorPins(
100,  // motor 1 speed adjust
100  // motor 2 speed adjust
);

// time in milliseconds, direction M1A, speed M1B, direction M2A, speed M2B
CCTTwoMotorControl commandList[] = {
  CCTTwoMotorControl(100),
  CCTTwoMotorControl(500, 'F', 250, 'F', 250),  // move forward 0.5 seconds
  CCTTwoMotorControl(100),
  CCTTwoMotorControl(500, 'R', 250, 'R', 250),  // move backward 0.5 seconds
  CCTTwoMotorControl(100),
  CCTTwoMotorControl(500, 'F', 250, 'R', 250),  // turn left 0.5 seconds
  CCTTwoMotorControl(100),
  CCTTwoMotorControl(500, 'R', 250, 'F', 250),  // turn right 0.5 seconds
  CCTTwoMotorControl(100),
  CCTTwoMotorControl(2000, 'F', 250, 'F', 250),
  CCTTwoMotorControl(100),
  CCTTwoMotorControl(2000, 'R', 250, 'R', 250),
  CCTTwoMotorControl(100),
  CCTTwoMotorControl(4000, 'F', 250, 'F', 100),
  // the last command should always be sleep
  // otherwise your robot will go forever!
  CCTTwoMotorControl(100)
};

int commandCnt = sizeof(commandList) / sizeof(CCTTwoMotorControl);
int commandIdx = 0;

CCTTwoMotorControl varyLED;

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
