export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Diamond/Square background - rotated square */}
        <rect
          x="16"
          y="2"
          width="19.8"
          height="19.8"
          rx="4"
          transform="rotate(45 16 16)"
          fill="#ff6b35"
          opacity="0.2"
        />
        
        {/* Main circle */}
        <circle cx="16" cy="16" r="8" fill="#ff6b35" />
        
        {/* Inner highlight circle */}
        <circle cx="13" cy="13" r="2.5" fill="#ffffff" opacity="0.4" />
      </svg>
    </div>
  );
}
