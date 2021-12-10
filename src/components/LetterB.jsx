import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"

// Define gesture description
export const LetterB = new GestureDescription('B')

// Thumb
LetterB.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0)
LetterB.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);
// LetterB.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);

// // Index
// LetterA.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
// LetterA.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// // Pinky
// LetterA.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
// LetterA.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

// Middle finger and Ring finger
for(let finger of [Finger.Middle, Finger.Index, Finger.Pinky, Finger.Ring]){
  LetterB.addCurl(finger, FingerCurl.NoCurl, .75); 
  LetterB.addDirection(finger, FingerDirection.VerticalUp, 0.25);
}