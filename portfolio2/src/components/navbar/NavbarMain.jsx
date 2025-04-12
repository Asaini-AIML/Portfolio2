import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react'
function NavbarMain() {
  const[menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2 '>
        <div className='flex items-center justify-between w-full max-w-[1200px] mx-auto bg-black rounded-r-full  p-6 rounded-l-full border-[0.5px] border-orange'>
        <NavbarLogo />
      <div className={`${menuOpen? 'sm:block':'sm:hidden'} lg:block`}>
        <NavbarLinks />
        </div>
        <NavbarBtn />
        </div>
        <div className='flex lg:hidden :block sm:block p-6 bg-black item-center justify-center rounded-full border-[0.5px] border-orange '>
<button className='text-2xl p-3 border border-orange rounded-full text-white ' onClick={handleMenuToggle}>
  <GiHamburgerMenu/></button>
        </div>
    </nav>
  )
}

export default NavbarMain