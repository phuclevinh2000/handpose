import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"

// Define gesture description
export const LetterC = new GestureDescription('B')

// Thumb
LetterC.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.7)
LetterC.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.25);
LetterC.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.25);
// LetterC.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);

// Index
LetterC.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.7)
LetterC.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.25);

// Pinky
LetterC.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
LetterC.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

// Middle finger and Ring finger
// for(let finger of [Finger.Middle, Finger.Index, Finger.Pinky, Finger.Ring]){
//   LetterC.addCurl(finger, FingerCurl.HalfCurl, 0.5); 
//   LetterC.addDirection(finger, FingerDirection.HorizontalLeft, 0.25);
//   // LetterC.addDirection(finger, FingerDirection.HorizontalRight, 0.25);
// }