export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg width="50" height="50" viewBox="0 0 259 259" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="129.453" width="183.075" height="183.075" rx="20" transform="rotate(45 129.453 0)" fill="#FF6B35" />
        <circle cx="129" cy="129" r="30" fill="white" />
      </svg>
    </div>
  );
}
