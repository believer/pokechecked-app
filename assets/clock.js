import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgComponent(props) {
  return (
    <Svg
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8 7.455V3.5H7v4.498l3.728 2.421.544-.838L8 7.455z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 7.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zm-1.154 0a6.346 6.346 0 11-12.692 0 6.346 6.346 0 0112.692 0z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
