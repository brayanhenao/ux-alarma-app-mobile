import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 184 163" {...props}>
    <Path
      fill="url(#a)"
      d="M125.12 77.65c-8.94.4-18.18 2.55-24.73 8.42-12.53 11.23-8.77 28.65 5 37.84 17.35 11.62 47.14 15.78 56.21 16.81l-36.48-63.07z"
    />
    <Path
      fill="url(#b)"
      d="M125.12 77.65c-7.22 2.55-8.22 1.55-14.77 7.42-12.53 11.23-7.77 29.65 6 38.84a108.185 108.185 0 0 0 45.25 16.81l-36.48-63.07z"
    />
    <Path fill="url(#c)" d="M119.04 67.22 92.34 21 58.4 79.74c18.1-10.8 39.21-16.03 60.64-12.52z" />
    <Path
      fill="url(#d)"
      d="M23 141c19.3-35.47 58.72-95.39 117.43-63.5 0 0-30.8-8.92-48.09 6.57C60.97 112.18 97.19 141 97.19 141H23z"
    />
    <Path
      fill="url(#e)"
      d="M47.43 141c9.32-36.27 36.66-88.58 93-63.5 0 0-30.8-8.92-48.09 6.57C60.97 112.18 97.19 141 97.19 141H47.43z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={139.59}
        x2={94.19}
        y1={128.85}
        y2={78.04}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="#7D2B20" />
        <Stop offset={1} stopColor="#FFB4A7" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={156.96}
        x2={105.07}
        y1={146.51}
        y2={82.73}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="#FFB4A7" />
        <Stop offset={1} stopColor="#7D2B20" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={85.66}
        x2={99.17}
        y1={87.18}
        y2={26.64}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="#7D2B20" />
        <Stop offset={1} stopColor="#FFB4A7" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={113}
        x2={52.35}
        y1={58.49}
        y2={155.84}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="#7D2B20" />
        <Stop offset={1} stopColor="#FFB4A7" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={119.05}
        x2={65.16}
        y1={62.47}
        y2={148.98}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="#FFB4A7" />
        <Stop offset={1} stopColor="#7D2B20" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgComponent;
