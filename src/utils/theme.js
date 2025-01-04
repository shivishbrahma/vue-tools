/*
* ====================================================================
*                           THEMES - LIGHT
* ====================================================================
* 1. Base Color : #302b27
* 2. Primary Color : #00374d
* 3. Secondary Color : #a50d12
* 4. Tertiary Color : #02642c
* 5. Base Background Color: #f3ffe9;
* 6. Primary Background Color: #e6f9ff;
* ====================================================================
*                           THEMES - DARK
* ====================================================================
* 1. Base Color : #f4f2f1
* 2. Primary Color : #00a8e8
* 3. Secondary Color : #f15156
* 4. Tertiary Color : #04f06a
* 5. Base Background Color: #00171f
* 6. Primary Background Color: #00171f;
*/

export const themes = {
    light: {
        base: "#302b27",
        primary: "#00374d",
        secondary: "#a50d12",
        tertiary: "#02642c",
        quaternary: "#d7a801",
        baseBg: "#ffffff",
        primaryBg: "#e6f8ff"
    },
    dark: {
        base: "#f4f2f1",
        primary: "#00a8e8",
        secondary: "#ff006e",
        tertiary: "#04f06a",
        quaternary: "#ffe066",
        baseBg: "#00171f",
        primaryBg: "#00394d"
    }
};

export function setCSSVariables(theme) {
    for (const value in theme) {
        document.documentElement.style.setProperty(`--${value}`, theme[value]);
    }
}
