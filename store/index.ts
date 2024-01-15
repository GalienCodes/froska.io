
import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, useGlobalState, getGlobalState }=createGlobalState({
  darkMode: true,
  modal:false,
 })

 export {
  useGlobalState,
  setGlobalState,
  getGlobalState}