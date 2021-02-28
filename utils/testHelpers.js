import { render as rtlRender } from '@testing-library/react-native'
import React from 'react'

export const render = (children) => {
  return rtlRender(<>{children}</>)
}
