import React from 'react'
import { useLocation } from 'react-router-dom'

function Gallary() {
    let location = useLocation()

  return (
    <div>
        {location?.state?.userName}
    </div>
  )
}

export default Gallary