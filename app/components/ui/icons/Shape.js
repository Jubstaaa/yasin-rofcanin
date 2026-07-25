import * as React from "react"
const Shape = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    viewBox="0 0 2600 131.1"
    {...props}
  >
    <path d="M0 0h2600v69.1L0 0z" className="elementor-shape-fill" />
    <path
      d="M0 0h2600v69.1H0z"
      className="elementor-shape-fill"
      style={{
        opacity: 0.5,
      }}
    />
    <path
      d="M2600 0H0v130.1l2600-61z"
      className="elementor-shape-fill"
      style={{
        opacity: 0.25,
      }}
    />
  </svg>
)
export default Shape
