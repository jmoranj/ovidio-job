interface ReactIconProps {
  size?: number
  className?: string
}

export default function ReactIcon({ size = 24, className = "" }: ReactIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Círculo central */}
      <circle
        cx="12"
        cy="12"
        r="2"
        fill="#61DAFB"
        stroke="#61DAFB"
        strokeWidth="0.5"
      />
      
      {/* Órbitas elípticas */}
      <ellipse
        cx="12"
        cy="12"
        rx="11"
        ry="4.2"
        fill="none"
        stroke="#61DAFB"
        strokeWidth="1"
        opacity="0.8"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="11"
        ry="4.2"
        fill="none"
        stroke="#61DAFB"
        strokeWidth="1"
        opacity="0.8"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="11"
        ry="4.2"
        fill="none"
        stroke="#61DAFB"
        strokeWidth="1"
        opacity="0.8"
        transform="rotate(120 12 12)"
      />
    </svg>
  )
}
