
import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, useGlobalState, getGlobalState }=createGlobalState({
  darkMode: true,
  modal:false,
  connectedAccount: "",
 })


 const truncate = (text:string, startChars:number, endChars:number, maxLength:number) => {
  if (text.length > maxLength) {
    var start = text.substring(0, startChars);
    var end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + '.';
    }
    return start + end;
  }
  return text;
};

 export {
  useGlobalState,
  setGlobalState,
  getGlobalState,
  truncate}