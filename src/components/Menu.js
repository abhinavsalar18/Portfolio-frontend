import React from 'react'

import "../css_files/menu.css"
const Menu = ({toggle}) => {
  return (
    <>
        {
            toggle ? (
                <>
                    <div className='navbar-profile-pic'>
                        <img 
                            className='profile-pic'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZlQZfQdzLu4FDubq5dmk3hB41mR2XWR8OQ&usqp=CAU" 
                            alt="profile_pic"
                        />
                    </div>
                </>
            ) : (
                <>

                </>
            )
        }
    </>
  )
}

export default Menu