"use client";

import Image from "next/image";

const WORDS = [
  "Salary",
  "Bonus",
  "Carry",
  "Hours",
  "Sleep",
  "Health",
  "Burnout",
  "Salary",
  "Bonus",
  "Carry",
  "Hours",
  "Sleep",
  "Health",
  "Burnout",
];

function OrbitWords() {
  return (
    <div className="dial-orbit-wrapper">
      {WORDS.map((word, i) => (
        <div
          key={i}
          className={`dial-orbit-word dial-orbit-word-${i}`}
        >
          {word}
        </div>
      ))}
    </div>
  );
}

export default function DialCarousel() {
  return (
    <div className="dial-carousel-container">
      <svg
        style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
        aria-hidden="true"
      >
        <defs>
          <filter
            id="glass-distortion"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.018"
              numOctaves={1}
              seed={7}
              result="turbulence"
            />
            <feComponentTransfer in="turbulence" result="mapped">
              <feFuncR type="gamma" amplitude={1} exponent={9} offset={0.52} />
              <feFuncG type="gamma" amplitude={0} exponent={1} offset={0} />
              <feFuncB type="gamma" amplitude={0} exponent={1} offset={0.52} />
            </feComponentTransfer>
            <feGaussianBlur in="mapped" stdDeviation={2.6} result="softMap" />
            <feSpecularLighting
              in="softMap"
              surfaceScale={5}
              specularConstant={0.95}
              specularExponent={85}
              lightingColor="white"
              result="specLight"
            >
              <fePointLight x={-200} y={-200} z={260} />
            </feSpecularLighting>
            <feComposite
              in="specLight"
              operator="arithmetic"
              k1={0}
              k2={1}
              k3={1}
              k4={0}
              result="litImage"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="softMap"
              scale={85}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <Image
        src="/images/dial-new.png"
        alt="Dial"
        width={1355}
        height={1355}
        className="dial-carousel-img"
        priority
      />

      <div className="dial-carousel-text-area">
        <div className="dial-orbit-container">
          <OrbitWords />
        </div>

        <div className="dial-carousel-blur-top" />
        <div className="dial-carousel-blur-bottom" />
        <div className="dial-carousel-blur-right" />

        <div className="dial-carousel-lens">
          <div className="dial-lens-invert-top">
            <div className="dial-lens-orbit-invert-top">
              <OrbitWords />
            </div>
          </div>

          <div className="dial-lens-invert-bottom">
            <div className="dial-lens-orbit-invert-bottom">
              <OrbitWords />
            </div>
          </div>

          <div className="dial-lens-center">
            <div className="dial-lens-orbit-center">
              <OrbitWords />
            </div>
          </div>

          <div className="liquidGlass-tint" />
          <div className="liquidGlass-shine" />
        </div>
      </div>
    </div>
  );
}