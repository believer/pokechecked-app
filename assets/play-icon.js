import * as React from 'react'
import Svg, { G, Path, Defs } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={38}
      height={38}
      fill="none"
      viewBox="0 0 38 38"
      {...props}
    >
      <G fill="#fff" filter="url(#prefix__filter0_d)">
        <Path d="M25.286 17.51a.5.5 0 00.008-.856l-8.442-5.19a.5.5 0 00-.762.422l-.083 10.23a.5.5 0 00.755.434l8.524-5.04z" />
        <Path d="M34 17c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C4 8.716 10.716 2 19 2c8.284 0 15 6.716 15 15zm-2.609 0c0 6.843-5.547 12.391-12.391 12.391S6.609 23.844 6.609 17 12.156 4.609 19 4.609c6.843 0 12.391 5.547 12.391 12.391z" />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default SvgComponent
