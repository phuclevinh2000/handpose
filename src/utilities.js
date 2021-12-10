// Points for fingers
const finderJoints = {
  thumb: [0,1,2,3,4],
  indexFinger: [0,5,6,7,8],
  middleFinger: [0,9,10,11,12],
  ringFinger: [0,13,14,15,16],
  pinky: [0,17,18,19,20]
}

// Drawing function
export const drawHand = (predictions, ctx) => {
  // Check if we have predictions
  if(predictions.length > 0) {
  
    // Loop through each prediction
    predictions.forEach(prediction => {
      // Grab landmarks
      // There are 20 landmarks as written in the doc
      // https://github.com/tensorflow/tfjs-models/tree/master/hand-pose-detection#keypoint-diagram
      const landmarks = prediction.landmarks

      // Loop through fingers
      for(let j=0; j<Object.keys(finderJoints).length; j++) {
        let finger = Object.keys(finderJoints)[j];
        // Loop throught pairs of joints
        for(let k=0; k<finderJoints[finger].length -1; k++){
          // Get pairs of joints
          const firstJointIndex = finderJoints[finger][k]
          const secondJointIndex = finderJoints[finger][k+1]

           // Draw path
           ctx.beginPath();
           ctx.moveTo(
             landmarks[firstJointIndex][0],
             landmarks[firstJointIndex][1]
           );
           ctx.lineTo(
             landmarks[secondJointIndex][0],
             landmarks[secondJointIndex][1]
           );
           ctx.strokeStyle = "plum";
           ctx.lineWidth = 4;
           ctx.stroke();
        }

      }

      // Loop through landmarks and draw em
      for( let i=0; i< landmarks.length; i++){
        // Get x point
        const x = landmarks[i][0]
        
        // Get y point
        const y = landmarks[i][1]

        // console.log(x, y)
        // Start drawing
        ctx.beginPath();
        ctx.arc(x, y , 4 , 0 , 2 * Math.PI)

        // Set line color
        ctx.fillStyle = "indigo"
        ctx.fill()
      }
    })
  }
}