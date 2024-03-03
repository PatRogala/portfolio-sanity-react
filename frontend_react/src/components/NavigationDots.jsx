import React from 'react'

const MENU_ITEMS = ['home', 'about', 'work', 'skills', 'testimonials', 'contact']

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {MENU_ITEMS.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#313BAC'} : {}}
        />
      ))}
    </div>
  )
}

export default NavigationDots
