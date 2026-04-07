export default function Waves() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', willChange: 'transform' }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="wg1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="wg2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="wg3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#060b14" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Wave 1 — fastest (8s) */}
        <path fill="url(#wg1)">
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
            values="
              M0,190 Q180,100 360,190 Q540,280 720,190 Q900,100 1080,190 Q1260,280 1440,190 L1440,320 L0,320 Z;
              M0,230 Q180,320 360,230 Q540,140 720,230 Q900,320 1080,230 Q1260,140 1440,230 L1440,320 L0,320 Z;
              M0,190 Q180,100 360,190 Q540,280 720,190 Q900,100 1080,190 Q1260,280 1440,190 L1440,320 L0,320 Z
            "
          />
        </path>

        {/* Wave 2 — medium (11s) */}
        <path fill="url(#wg2)">
          <animate
            attributeName="d"
            dur="11s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
            values="
              M0,250 Q180,180 360,250 Q540,320 720,250 Q900,180 1080,250 Q1260,320 1440,250 L1440,320 L0,320 Z;
              M0,220 Q180,290 360,220 Q540,150 720,220 Q900,290 1080,220 Q1260,150 1440,220 L1440,320 L0,320 Z;
              M0,250 Q180,180 360,250 Q540,320 720,250 Q900,180 1080,250 Q1260,320 1440,250 L1440,320 L0,320 Z
            "
          />
        </path>

        {/* Wave 3 — slowest (14s) */}
        <path fill="url(#wg3)">
          <animate
            attributeName="d"
            dur="14s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
            values="
              M0,285 Q360,240 720,285 Q1080,330 1440,285 L1440,320 L0,320 Z;
              M0,265 Q360,310 720,265 Q1080,220 1440,265 L1440,320 L0,320 Z;
              M0,285 Q360,240 720,285 Q1080,330 1440,285 L1440,320 L0,320 Z
            "
          />
        </path>
      </svg>
    </div>
  )
}
