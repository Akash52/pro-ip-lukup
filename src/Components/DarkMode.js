import React, { useEffect } from 'react'

const DarkMode = () => {
  useEffect(() => {
    const root = window.document.documentElement

    root.classList.add('dark')
  }, [])
}

export default DarkMode
