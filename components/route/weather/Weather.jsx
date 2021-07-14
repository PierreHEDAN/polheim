const Weather = ({ forecast }) => forecast ? (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="550.446"
  height="354.87"
  viewBox="0 0 550.446 354.87"
>
  <defs>
    <filter
      id="Tracé_2494"
      width="550.446"
      height="323.391"
      x="0"
      y="31.478"
      filterUnits="userSpaceOnUse"
    >
      <feOffset dx="12.84" dy="14.35"></feOffset>
      <feGaussianBlur result="blur" stdDeviation="5.67"></feGaussianBlur>
      <feFlood floodOpacity="0.102"></feFlood>
      <feComposite in2="blur" operator="in"></feComposite>
      <feComposite in="SourceGraphic"></feComposite>
    </filter>
    <filter
      id="Rectangle_123"
      width="71.051"
      height="122.092"
      x="212.705"
      y="0"
      filterUnits="userSpaceOnUse"
    >
      <feOffset dy="3"></feOffset>
      <feGaussianBlur result="blur-2" stdDeviation="3"></feGaussianBlur>
      <feFlood floodOpacity="0.161"></feFlood>
      <feComposite in2="blur-2" operator="in"></feComposite>
      <feComposite in="SourceGraphic"></feComposite>
    </filter>
  </defs>
  <g data-name="Groupe 1663" transform="translate(-96.247 -3482.081)">
    <g data-name="Groupe 1662" transform="rotate(-6.02 33936.098 829.288)">
      <g
        filter="url(#Tracé_2494)"
        transform="matrix(.99 .1 -.1 .99 4.82 -85.76)"
      >
        <path
          fill="#ededed"
          d="M0 0h494.148v239.028H0z"
          data-name="Tracé 2494"
          transform="matrix(.99 -.1 .1 .99 4.17 85.79)"
        ></path>
      </g>
      <g data-name="Groupe 1660" transform="translate(32.962 19.42)">
        <text
          fill="#00374b"
          fontFamily="Poppins-Bold, Poppins"
          fontSize="27"
          fontWeight="700"
          transform="translate(0 30.761)"
        >
          <tspan x="0" y="0">
            Antarctique
          </tspan>
        </text>
        <text
          fill="#00374b"
          fontFamily="Poppins-Regular, Poppins"
          fontSize="15"
          transform="translate(0 67.074)"
        >
          <tspan x="0" y="0">
            77° 51
          </tspan>
          <tspan y="0" fontFamily="Helvetica">
            ′
          </tspan>
          <tspan y="0"> 00</tspan>
          <tspan y="0" fontFamily="Helvetica">
            ″
          </tspan>
          <tspan y="0"> sud, 166° 40</tspan>
          <tspan y="0" fontFamily="Helvetica">
            ′
          </tspan>
          <tspan y="0"> 00</tspan>
          <tspan y="0" fontFamily="Helvetica">
            ″
          </tspan>
          <tspan y="0"> est</tspan>
          <tspan x="0" y="23">
            McMurdo Station
          </tspan>
        </text>
        <g fill="#00374b" transform="translate(0 117.331)">
          <g transform="translate(145.627 13.804)">
            <path
              d="M21.584 12.617A3.87 3.87 0 0019.372 12c-1.381 0-2.533.577-2.8 1.343h-.115c-.262-.772-1.417-1.353-2.8-1.353a3.861 3.861 0 00-2.213.62v6.49a2.93 2.93 0 11-5.859 0 .646.646 0 011.292 0 1.637 1.637 0 103.274 0v-6.48A3.862 3.862 0 007.932 12c-1.381 0-2.533.577-2.8 1.343h-.116c-.262-.772-1.417-1.353-2.8-1.353A3.872 3.872 0 000 12.606C.422 8 4.752 4.345 10.146 4.073V3.59a.646.646 0 111.292 0v.483c5.398.273 9.731 3.937 10.146 8.544zM7 1.034a8.365 8.365 0 00-1.45 1.242.7.7 0 101.243.656A8.365 8.365 0 007 1.034zM9.844 0a8.365 8.365 0 00-1.45 1.242.7.7 0 001.243.658A8.363 8.363 0 009.844 0zM13.2 0a8.365 8.365 0 00-1.45 1.242.7.7 0 101.243.656A8.363 8.363 0 0013.2 0zm2.673.961A8.365 8.365 0 0014.424 2.2a.7.7 0 001.243.656 8.363 8.363 0 00.207-1.895z"
              data-name="Tracé 48"
              transform="translate(0 1.604)"
            ></path>
            <text
              fontFamily="Helvetica"
              fontSize="19"
              transform="translate(33.732 18)"
            >
              <tspan x="0" y="0">
                { forecast.humidity }%
              </tspan>
            </text>
          </g>
          <g transform="translate(247.471 13.804)">
            <g data-name="wind (1)" transform="translate(0 2.347)">
              <path
                d="M11.2 0H0v1.629h11.2A2.27 2.27 0 0113.464 3.9a2.022 2.022 0 01-2.019 2.019 1.793 1.793 0 01-1.792-1.794H8.024a3.424 3.424 0 003.42 3.42A3.652 3.652 0 0015.092 3.9 3.9 3.9 0 0011.2 0z"
                data-name="Tracé 49"
                transform="translate(4.487 12.999)"
              ></path>
              <path
                d="M22.276 0a5.146 5.146 0 00-5.14 5.14h1.629a3.516 3.516 0 013.512-3.512 3.9 3.9 0 013.89 3.892 4.308 4.308 0 01-4.3 4.3H0v1.629h21.864A5.939 5.939 0 0027.8 5.52 5.526 5.526 0 0022.276 0z"
                data-name="Tracé 50"
              ></path>
              <path
                d="M8.319 0A2.892 2.892 0 005.43 2.889h1.629a1.262 1.262 0 011.26-1.26 1.444 1.444 0 011.442 1.442 1.642 1.642 0 01-1.64 1.64H0v1.628h8.121a3.272 3.272 0 003.269-3.268A3.074 3.074 0 008.319 0z"
                data-name="Tracé 51"
                transform="translate(4.487 1.935)"
              ></path>
            </g>
            <text
              fontFamily="Helvetica"
              fontSize="19"
              transform="translate(40.978 18)"
            >
              <tspan x="0" y="0">
                {forecast.wind_speed*3.6}km/h
              </tspan>
            </text>
          </g>
          <text
            fontFamily="Poppins-Bold, Poppins"
            fontSize="36"
            fontWeight="700"
            transform="translate(0 38)"
          >
            <tspan x="0" y="0">
              {Math.round(forecast.temp)}°C
            </tspan>
          </text>
        </g>
      </g>
    </g>
    <g filter="url(#Rectangle_123)" transform="translate(96.25 3482.08)">
      <path
        fill="#fff"
        d="M0 0H37.973V99.375H0z"
        data-name="Rectangle 123"
        transform="rotate(-9 186.711 -1402.576)"
      ></path>
    </g>
  </g>
</svg>
) : null;

export default Weather;
