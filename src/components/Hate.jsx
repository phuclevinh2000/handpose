import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"

// Define gesture description
export const Hate = new GestureDescription('hate')

// Thumb
Hate.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
Hate.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
Hate.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// Index
Hate.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
Hate.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// Middle finger and Ring finger
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]){
  Hate.addCurl(finger, FingerCurl.FullCurl, .75); 
  Hate.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}