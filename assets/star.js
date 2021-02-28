import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={8}
      height={8}
      fill="none"
      viewBox="0 0 8 8"
      {...props}
    >
      <Path
        fill="#B5985A"
        d="M4 0l.898 2.764h2.906l-2.35 1.708.897 2.764L4 5.528 1.649 7.236l.898-2.764L.196 2.764h2.906L4 0z"
      />
    </Svg>
  )
}

export default SvgComponent
