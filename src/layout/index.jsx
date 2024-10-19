import Header from './header'
import './styles.css'
import ThemeSwitcher from './themeSwitcher'

const Layout = (props) => {
  const { children } = props



  return (
    <div className='layout'>
      <Header />
      <div className='layout_secondary'>
        {children}
      </div>
      <ThemeSwitcher />
    </div>
  )
}

export default Layout