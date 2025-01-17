import React, {useState} from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 1024) 
    {
      return {right: !menuOpened && "-100%"}
    }
  }

  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./logo.png" alt="logo" width={100}/>

            {/* <OutsideClickHandler
              onOutsideClick={()=> {
                setMenuOpened(false)
              }}
            > */}
              <div className="flexCenter h-menu"
                style={getMenuStyles(menuOpened)} //Anything from the right side from the screen in Header section
              >
                  <a href="#residencies">Residencies</a>
                  <a href="#ourValue">Our Value</a>
                  <a href="#contactUs">Contact Us</a>
                  <a href="#getStarted">Get Started</a>
                  <button className="button">
                      <a href="#">Contact</a>
                  </button>

              </div>
            {/* </OutsideClickHandler> */}

            <div className="menu-icon" 
                onClick={() => {
                  (menuOpened===true ? setMenuOpened(false) : setMenuOpened(true) )
                 }}> {/* Just know that we can use this "prev" */}
              <BiMenuAltRight size={30}/>
            </div>
        </div>

    </section>
  )
}

export default Header