import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"

// Define gesture description
export const loveYouGesture = new GestureDescription('Merry Chirstmas')

// Thumb
loveYouGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// Index
loveYouGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
loveYouGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// Pinky
loveYouGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
loveYouGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.25);

// Middle finger and Ring finger
for(let finger of [Finger.Middle, Finger.Ring]){
  loveYouGesture.addCurl(finger, FingerCurl.FullCurl, .75); 
  loveYouGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
}