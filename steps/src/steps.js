export default [
  {
    title: 'Build an Arduino Powered Robot',
    video: 'https://i.imgur.com/bgnKn8f.mp4',
    steps: []
  },
  {
    title: 'Attach Wires',
    parts: [{
      text: 'Create a hook/bend in the end of the wire with pliers',
      image: './external/image10.jpg'
    }, {
      text: 'Hook the wire into the motor terminal',
      image: './external/image11.jpg'
    }, {
      text: 'Squeeze wire closed with pliers to ensure a secure connection',
      image: './external/image12.jpg'
    }]
  },
  {
    title: 'Solder Wires to Motors',
    image: './external/image30.png',
    parts: [{
      text: 'Place the soldering iron on the wire/terminal to heat it up'
    }, {
      text: 'Don\'t hold for too long, the plastic will melt! (Avoid touching the plastic with the iron)'
    }, {
      text: 'Apply the solder'
    }, {
      text: 'Remove soldering iron and check that you have a secure connection'
    }]
  },
  {
    title: 'Assemble Robot: Attach pivot wheel',
    parts: [{
      text: 'You will need the chassis plate, the pivot wheel, 4 long nuts and 8 small screws with the rounded head',
      image: 'https://i.imgur.com/kpvpQaQ.jpg'
    }, {
      text: 'Insert the screws from the bottom (the side with the wheel) and attach the nut to the other side',
      image: 'https://i.imgur.com/tBItbFr.jpg'
    }, {
      text: 'Repeat this for all 4 nuts/screws.',
      image: 'https://i.imgur.com/MqN4Wn5.jpg'
    }, {
      text: 'Attach the pivot wheel to the chassis with the screws in a diagonal pattern. Don\'t tighten them all the way just yet. Leave them a little loose so they can be adjusted.',
      image: 'https://i.imgur.com/VYLIXtX.jpg'
    }, {
      text: 'Attach all 4 screws. Leave them a little loose.',
      image: 'https://i.imgur.com/nLdoKof.jpg'
    }, {
      text: 'Tighten all 4 screws.',
      image: 'https://i.imgur.com/0BFg6Ho.jpg'
    }]
  },
  {
    title: 'Assemble Robot: Attach Motors',
    parts: [{
      text: 'You will need: 2 wheels, 2 plastic discs, 2 motors (with wires soldered), 4 long screws, 4 nuts, 4 plastic motor mounts, 1 chassis with pivot wheel attached.',
      image: 'https://i.imgur.com/PuOkyd2.jpg'
    }, {
      text: 'Insert the plastic motor mounts from the top of the chasis.',
      image: 'https://i.imgur.com/4kMq5up.jpg'
    }, {
      text: 'Place the motor in between the plastic mounts. The wires should be facing the pivot wheel.',
      image: 'https://i.imgur.com/aNXSxH2.jpg'
    }, {
      text: 'Insert the long screws from the outside, through the plastic mount, into the motor. Attach the top nut on the inside. Leave the bottom screw sticking out a little.',
      image: 'https://i.imgur.com/1XPPr8l.jpg'
    }, {
      text: 'Hold the bottom nut in place, and screw the screw in.',
      image: 'https://i.imgur.com/aAaJ2Df.jpg'
    }, {
      text: 'Use the large screw driver.',
      image: 'https://i.imgur.com/uMF9ELj.jpg'
    }, {
      text: 'Attach the wheel to the outside of the motor.',
      image: 'https://i.imgur.com/mkwXZGq.jpg'
    }, {
      text: 'Attach the plastic disk to the inside of the motor.',
      image: 'https://i.imgur.com/cq09P2H.jpg'
    }, {
      text: 'Make sure the wheel can spin freely and is not caught on the screws.',
      image: 'https://i.imgur.com/ohciaFR.jpg'
    }, {
      text: 'Repeat with the other motor on the other side.'
    }]
  }, {
    title: 'Assemble Robot: Attach Battery Pack',
    parts: [{
      text: 'Place some foam tape to the back of the battery pack.',
      image: 'https://i.imgur.com/MnfI1XS.jpg'
    }, {
      text: 'Make sure the wires are facing towards the front of the robot.'
    }, {
      text: 'Place the battery pack at the back of the robot (above the pivot wheel)',
      image: 'https://i.imgur.com/j9a1I4u.jpg'
    }]
  }, {
    title: 'Attach Motor Controller to Arduino',
    parts: [{
      text: 'Place a piece of electrical tape on the USB connector',
      image: './external/image18.jpg'
    }, {
      text: 'Make sure the USB opening is not obstructed.',
      image: './external/image20.jpg'
    }, {
      text: 'Make sure the motor controller is lined up correctly.',
      image: './external/image27.jpg'
    }, {
      text: 'SLOWLY PRESS DOWN! Do not bend the pins.',
      image: './external/image29.jpg'
    }]
  }, {
    title: 'Attach Arduino to Robot',
    parts: [{
      text: 'Place foam tape underneath the Arduino',
      image: 'https://i.imgur.com/nl5kUAM.jpg'
    }, {
      text: 'Place the arduino at the front of the robot. Make sure the USB port is facing outwards, and the battery connecting points are facing towards the battery pack.',
      image: 'https://i.imgur.com/nG73uoC.jpg'
    }]
  }, {
    title: 'Connect Battery Wires',
    parts: [{
      text: 'Loosen the screw to the connector marked M+',
      image: 'https://i.imgur.com/SiFHsXU.jpg'
    }, {
      text: 'Insert the red wire from the battery pack into the connector and tighten the screw',
      image: 'https://i.imgur.com/dTMu20m.jpg'
    }, {
      text: 'Repeat with the black wire (connect to GND)',
      image: 'https://i.imgur.com/VqnRFp6.jpg'
    }, {
      text: 'Insert 4 batteries into the battery holder'
    }, {
      text: 'If the green light turns on its working!!! If not, adjust the connections until the green light comes on.',
      image: 'https://i.imgur.com/uW8JeeE.jpg'
    }, {
      text: 'Remove one of the batteries for now',
      image: 'https://i.imgur.com/XbBbtZv.jpg'
    }]
  }, {
    title: 'Connect Motor Wires',
    image: './external/image28.png',
    parts: [{
      text: 'Left motor top wire connects to M1A'
    }, {
      text: 'Left motor bottom wire connects to M1B'
    }, {
      text: 'Right motor top wire connects to M2A'
    }, {
      text: 'Right motor bottom wire connects to M2B'
    }, {
      text: 'It Should look like this: (your wire colors may be different)',
      image: 'https://i.imgur.com/pvVeFO8.jpg'
    }]
  },
  {
    title: 'Robot Complete!',
    video: 'https://i.imgur.com/bgnKn8f.mp4',
    parts: []
  }
];
