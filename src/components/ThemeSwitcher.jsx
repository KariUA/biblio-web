import React, { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export function ThemeSwitcher() {


    const [isDarkTheme, setIsDarkTheme] = useState(true); // Estado para saber si el tema es oscuro o no

  useEffect(() => {

    const theme = localStorage.getItem("theme"); // Obtenemos el tema guardado en localStorage
    if (theme === "dark") { 
      setIsDarkTheme(true);

    } else if (theme === "light") {
      setIsDarkTheme(false);
    }
  }, []); 

  useEffect(() => { 
    if (isDarkTheme ) {
      document.documentElement.classList.add("dark"); //Se aplica la clase 'dark' a todo el documento
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark"); //Se elimina la clase 'dark' de todo el documento
      localStorage.setItem("theme", "light");
    }
  }, [isDarkTheme]);

  return (
    <Switch
      defaultSelected={isDarkTheme}
      size="lg"
      color="default"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? <MoonIcon className={className} /> : <SunIcon className={className} />
      }
      onChange={() => setIsDarkTheme(!isDarkTheme)}
      
    />
  );
}


