// import { useEffect, useState } from 'react'
import { ThemeSwitcherContainer } from './styles'
// import settingsButton from '../../assets/settings.svg'
import colorSwitcher from '../../assets/ColorSwitcher.svg'
import { useTheme } from './context'

// const themes = {
//   light:{
//     className: 'light'
//   },
//   dark:{
//     className: 'dark'
//   },
//   blueOrange:{
//     className: 'blue_orange'
//   },
//   greenTeal:{
//     className: 'green_teal'
//   },
//   purpleYellow:{
//     className: 'purple_yellow'
//   }
// }
// const themeNames = ['dark', 'light', 'blueOrange', 'greenTeal', 'purpleYellow']

const ThemeSwitcher = () => {

  // const [colormode, setColorMode] = useState(themeNames[0])
  // const toggleColorMode = () =>{
  //   const currentColorModeIndex = themeNames.indexOf(colormode)
  //   if(currentColorModeIndex >= themeNames.length-1)
  //     setColorMode(themeNames[0])
  //   else
  //     setColorMode(themeNames[currentColorModeIndex+1])
  // }

  // useEffect(() => {
  //   // Add the class when the component mounts
  //   if(themes[colormode]?.className){
  //     console.log(themes[colormode].className)
  //     document.body.className = ''
  //     document.body.classList.add(themes[colormode].className);
  //   }

  //   // Cleanup: Remove the class when the component unmounts
  //   return () => {
  //     if(themes[colormode]?.className)
  //       document.body.classList.remove(colormode);
  //   };
  // }, [colormode])

  const { toggleColorMode } = useTheme()
  return (
    <ThemeSwitcherContainer>
      <span className='text' onClick={toggleColorMode}>
        <img src={colorSwitcher} alt='setting' className='setting_styles' />
      </span>
    </ThemeSwitcherContainer>
  )
}

export default ThemeSwitcher