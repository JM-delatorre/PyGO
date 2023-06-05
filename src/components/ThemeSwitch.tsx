"use client"
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import lightMode from '/public/icons/si_Light_mode.svg';
import darkMode from '/public/icons/si_Dark_mode.svg';
import Image from "next/image";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const {systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleButton = () =>{
    if(currentTheme === 'light'){
      setTheme('dark')
    }else {
      setTheme('light')
    }
  }
  if (!mounted) {
    return null;
  }
  

  return (
    
<button
  className="inline-block rounded-lg p-3 border border-sky-400 bg-sky-500  active:bg-indigo-500 
  dark:border-sky-800 dark:bg-sky-900  dark:active:bg-sky-800
  transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"
  onClick={handleButton}
  >
  <span className="sr-only"> Change Theme </span>
  {currentTheme === 'dark' ?
    <Image src={lightMode} alt="" />
    :
    <Image src={darkMode} alt="" />
  }
</button>
  );
};

export default ThemeSwitch


