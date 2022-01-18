import * as React from "react"

const Number1 = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={60} height={60} {...props}>
    <g data-name={1}>
      <g data-name="Ellipse 131" fill="#fff" stroke="#dd5239" strokeWidth={10}>
        <circle cx={30} cy={30} r={30} stroke="none" />
        <circle cx={30} cy={30} r={25} fill="none" />
      </g>
      <text
        data-name={1}
        transform="translate(6 6)"
        fill="#dd5239"
        fontSize={35}
        fontFamily="Poppins-Medium, Poppins"
        fontWeight={500}
      >
        <tspan x={17} y={37}>
          {"1"}
        </tspan>
      </text>
    </g>
  </svg>
)

export default Number1
