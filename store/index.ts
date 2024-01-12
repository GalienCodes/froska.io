
import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, useGlobalState, getGlobalState }=createGlobalState({
  darkMode: true,
 })

 export {
  useGlobalState,
  setGlobalState,
  getGlobalState}