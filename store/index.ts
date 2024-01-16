
import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, useGlobalState, getGlobalState }=createGlobalState({
  darkMode: true,
  modal:false,
  initDepositAmount:'',
  hasClaimed:false,
  modalToast: 'scale-0',
  connectedAccount: "",
  founderAccount: "",
  alert: { show: false, msg: '', color: '' },
  loaddata: { show: false, msg: '' },
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


const setAlert = (msg: any, color = 'green') => {
  setGlobalState('loaddata', {msg:"",show: false})
  setGlobalState('alert', { show: true, msg, color })
  setTimeout(() => {
    setGlobalState('alert', { show: false, msg: '', color })
  }, 3000)
}

const setLoadingMsg = (msg: any) => {
  const loading = getGlobalState('loaddata')
  setGlobalState('loaddata', {show: true, msg })
}
 export {
  useGlobalState,
  setGlobalState,
  getGlobalState,
  truncate,
  setAlert,
  setLoadingMsg
}