import { useState } from "react";

const DarkMode = () => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') :  setTheme('light');

        theme === 'light' ? document.querySelector('body').classList.add('dark-body') : document.querySelector('body').classList.remove('dark-body')
    }

    return [theme, toggleTheme];
}
 
export default DarkMode;