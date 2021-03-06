#include <CTTwoMotorPinID.h>
#include <CTTwoMotorControl.h>

CCTTwoMotorPinID MotorPins(
  100,  // motor 1 speed adjust
  100  // motor 2 speed adjust
);

// time in milliseconds, direction M1A, speed M1B, direction M2A, speed M2B
CCTTwoMotorControl commandList[] = {
  CCTTwoMotorControl(500, 'F', 250, 'F', 250),  // move forward 0.5 seconds
  CCTTwoMotorControl(500, 'R', 250, 'R', 250),  // move backward 0.5 seconds
  CCTTwoMotorControl(500, 'F', 250, 'R', 250),  // turn left 0.5 seconds
  CCTTwoMotorControl(500, 'R', 250, 'F', 250),  // turn right 0.5 seconds
  CCTTwoMotorControl(2000, 'F', 250, 'F', 250),
  CCTTwoMotorControl(2000, 'R', 250, 'R', 250),
  CCTTwoMotorControl(4000, 'F', 250, 'F', 100),
};

int commandCnt = sizeof(commandList) / sizeof(CCTTwoMotorControl);
int commandIdx = 0;

void setup() {
  Serial.begin(115200);
  delay(2000);
}

void loop() {
  Serial.println(commandIdx);
  if(commandList[commandIdx].Engage(MotorPins)) commandIdx++;
  if(commandIdx >= commandCnt) {
    CCTTwoMotorControl(100).Engage(MotorPins); // Stop the motors
    Serial.println("Stop");
    while(1);
  }
}
