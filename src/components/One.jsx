import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"

// Define gesture description
export const One = new GestureDescription('I just want to say')

// Thumb
One.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0)
One.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
One.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// Index
One.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
One.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// // Pinky
// Zero.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
// Zero.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

// All other fingers
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]){
  One.addCurl(finger, FingerCurl.FullCurl, .75); 
  One.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}