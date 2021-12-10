import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"

// Define gesture description
export const LetterA = new GestureDescription('A')

// Thumb
LetterA.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
LetterA.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9)
LetterA.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.5);

// // Index
// LetterA.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
// LetterA.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// // Pinky
// LetterA.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
// LetterA.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

// Middle finger and Ring finger
for(let finger of [Finger.Middle, Finger.Index, Finger.Pinky, Finger.Ring]){
  LetterA.addCurl(finger, FingerCurl.FullCurl, .75); 
  LetterA.addDirection(finger, FingerDirection.HorizontalRight, 0.25);
  // LetterA.addDirection(finger, FingerDirection.HorizontalLeft, 0.25);
}