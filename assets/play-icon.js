import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="none"
      viewBox="0 0 30 30"
      {...props}
    >
      <Path
        fill="#fff"
        d="M27.391 15c0 6.843-5.547 12.391-12.391 12.391S2.609 21.844 2.609 15 8.156 2.609 15 2.609c6.843 0 12.391 5.547 12.391 12.391zM30 15c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0c8.284 0 15 6.716 15 15zm-8.714.51a.5.5 0 00.008-.856l-8.442-5.19a.5.5 0 00-.762.422l-.083 10.23a.5.5 0 00.755.434l8.524-5.04z"
      />
    </Svg>
  )
}

export default SvgComponent
