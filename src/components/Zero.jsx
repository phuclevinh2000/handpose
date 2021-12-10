import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"

// Define gesture description
export const Zero = new GestureDescription('Hello, ')

// Thumb
Zero.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1)
Zero.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
Zero.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// // Index
// Zero.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
// Zero.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// // Pinky
// Zero.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
// Zero.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

// All other fingers
for(let finger of [Finger.Middle, Finger.Ring, Finger.Index, Finger.Pinky]){
  Zero.addCurl(finger, FingerCurl.FullCurl, .75); 
  Zero.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}