/* eslint-disable react-hooks/exhaustive-deps */

///////// NEW STUFF ADDED USE STATE
import React, { useRef, useState, useEffect } from 'react';
///////// NEW STUFF ADDED USE STATE

// import logo from './logo.svg';
// eslint-disable-next-line no-unused-vars
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import './App.css';
import { drawHand } from './utilities';
// import { loveYouGesture } from './components/LoveYou';
import { LetterA, LetterB, loveYouGesture } from './components';

///////// NEW STUFF IMPORTS
import * as fp from 'fingerpose';
import { Hate } from './components/Hate';
///////// NEW STUFF IMPORTS

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const alphabet = [LetterA, LetterB, loveYouGesture, Hate]
  ///////// NEW STUFF ADDED STATE HOOK
  const [wish, setWish] = useState(null);
  // const [emoji, setEmoji] = useState(null);
  // const images = { thumbs_up: thumbs_up, victory: victory };
  ///////// NEW STUFF ADDED STATE HOOK

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const runHandpose = async () => {
    const net = await handpose.load();
    console.log('Handpose model loaded.');
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      // console.log(hand);

      ///////// NEW STUFF ADDED GESTURE HANDLING

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator(alphabet);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          console.log(gesture.gestures);

          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          // console.log(gesture.gestures[maxConfidence].name);
          setWish(gesture.gestures[maxConfidence].name);
          // console.log(emoji);
        }
      }

      ///////// NEW STUFF ADDED GESTURE HANDLING

      // Draw mesh
      const ctx = canvasRef.current.getContext('2d');
      drawHand(hand, ctx);
    }
  };

  useEffect(() => {
    runHandpose();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <Webcam
          ref={webcamRef}
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
        {/* NEW STUFF */}
        {wish !== null ? (
          // eslint-disable-next-line jsx-a11y/alt-text
          <h1
            style={{
              position: 'absolute',
              marginLeft: 'auto',
              marginRight: 'auto',
              top: 0,
              left: 0,
              bottom: 500,
              right: 0,
              textAlign: 'center',
              height: 100,
            }}
          >
            {wish}
          </h1>
        ) : (
          ''
        )}

        {/* NEW STUFF */}
      </header>
    </div>
  );
}

export default App;
