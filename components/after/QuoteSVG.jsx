import * as React from "react"

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={122} height={89.99} opacity={0.5} {...props}>
    <defs>
      <clipPath id="a">
        <path data-name="Rectangle 297" fill="#fff" d="M0 0h122v89.99H0z" />
      </clipPath>
    </defs>
    <g data-name="Groupe 1890" clipPath="url(#a)" fill="#fff" opacity={0.5}>
      <path
        data-name="Trac\xE9 2126"
        d="M67.556 48.989v41H122v-41H91.77c-.106-27.09 10.738-24.869 17.459-25.542V.119c-8.234-.532-42.177-1.372-41.673 48.871"
      />
      <path
        data-name="Trac\xE9 2127"
        d="M.005 48.989v41h54.444v-41h-30.23C24.113 21.9 34.957 24.12 41.678 23.448V.119C33.445-.413-.5-1.253.005 48.989"
      />
    </g>
  </svg>
)

export default SvgComponent
