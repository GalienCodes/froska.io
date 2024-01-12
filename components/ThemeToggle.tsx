'use cleint';

import { setGlobalState, useGlobalState } from "@/store";
import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";


const ThemeToggle = () => {
    const [darkMode] = useGlobalState('darkMode');

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") setGlobalState('darkMode',true);
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])
    return (
        <div className="relative w-16 h-8 flex items-center dark:bg-[#FFFFFF] bg-[#2B2F38]  cusor-pointer rounded-3xl p-1"
            onClick={() => setGlobalState('darkMode',!darkMode)}>
            <FaMoon className="text-white" size={18} />
            <div className="absolute bg-white dark:bg-[#2B2F38] w-6 h-6 rounded-full shadow-md transition-transform duration-300"
                style={
                    darkMode ? { left: "2xp" } : { right: "2px" }
                }>
            </div>
            <BsSunFill className="ml-auto  text-yellow-400" size={20} />
        </div>
    )
}

export default ThemeToggle