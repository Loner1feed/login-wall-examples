import React from 'react'

export const FloatingLabel = ({ children }) => {
  return (
    <div style={{ position: "fixed", top: 20, right: 20 }}>{children}</div>
  )
}
