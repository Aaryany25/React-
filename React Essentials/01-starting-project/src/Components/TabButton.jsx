import React from 'react'

function TabButton({children,onSelect}) {
 
  return (
    <div>
      <li>
        <button onClick={onSelect}>{children}</button>
        </li>
    </div>
  )
}

export default TabButton
