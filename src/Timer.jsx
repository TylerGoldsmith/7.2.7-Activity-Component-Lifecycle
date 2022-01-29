import React, { useEffect } from 'react'

const Timer = (props) => {
  let count = 0

  useEffect(() => {
    const tick = () => console.log(count += 1)
    console.log('mount')
    let interval = setInterval(tick, 1000)
  })

  return (
    <p>Timer is on</p>
  )
}

export default Timer