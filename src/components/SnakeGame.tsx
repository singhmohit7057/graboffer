import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../hooks/use-mobile";

export default function SnakeGame() {
    const isMobile = useIsMobile();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [expanded, setExpanded] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const width = expanded ? 240 : 140;
  const height = expanded ? 240 : 48;

  const grid = 10;
  const tilesX = Math.floor(width / grid);
  const tilesY = Math.floor(height / grid);

  const COLLAPSED_MIN_X = 1;
  const COLLAPSED_MAX_X = tilesX - 2;
  const COLLAPSED_MIN_Y = 0;
  const COLLAPSED_MAX_Y = Math.floor((height - grid) / grid);


  const snakeRef = useRef([{ x: 6, y: 0 }]);
  const dirRef = useRef({ dx: 1, dy: 0 });
  const foodRef = useRef({ x: 10, y: 5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const speed = expanded ? 140 : isHovered ? 180 : 260;

    const loop = setInterval(() => {
   

      /* ---------- background ---------- */
     /* ---------- grid background ---------- */
    const bgColor = expanded ? "#f8fafc" : "#f1f5f9";
    const gridColor = "#cbd5e1"; // slate-300

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(0, 0, width, height, expanded ? 18 : 10);
    ctx.clip();

    const glow = ctx.createLinearGradient(0, 0, 0, height);
    glow.addColorStop(0, "rgba(255,255,255,0.6)");
    glow.addColorStop(1, "rgba(0,100,201,0.04)");

    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);


    ctx.strokeStyle = gridColor;
    ctx.strokeStyle = "rgba(148, 163, 184, 0.35)"; // slate-400 w/ opacity
    ctx.lineWidth = 0.5;

    for (let x = 0; x <= width; x += grid) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
    }

    for (let y = 0; y <= height; y += grid) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
    }


      /* ---------- snake body ---------- */
      snakeRef.current.forEach((seg, index) => {
        const x = seg.x * grid + grid / 2;
        const y = seg.y * grid + grid / 2;

        const radius =
          index === 0
            ? grid * 0.6
            : Math.max(grid * 0.22, grid * (0.5 - index * 0.035));

        const gradient = ctx.createRadialGradient(
          x,
          y,
          radius * 0.2,
          x,
          y,
          radius
        );

        gradient.addColorStop(0, "#5fb4ff");
        gradient.addColorStop(1, "#0064c9");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      /* ---------- eyes ---------- */
      const head = snakeRef.current[0];
      if (head) {
        const hx = head.x * grid + grid / 2;
        const hy = head.y * grid + grid / 2;

        const eyeOffsetX = grid * 0.15;
        const eyeOffsetY = grid * 0.15;
        const eyeDX = dirRef.current.dx * grid * 0.15;
        const eyeDY = dirRef.current.dy * grid * 0.15;

        ctx.fillStyle = "#0f172a";
        ctx.beginPath();
        ctx.arc(
          hx - eyeOffsetX + eyeDX,
          hy - eyeOffsetY + eyeDY,
          1.5,
          0,
          Math.PI * 2
        );
        ctx.arc(
          hx + eyeOffsetX + eyeDX,
          hy - eyeOffsetY + eyeDY,
          1.5,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      /* ---------- food (only expanded) ---------- */
      if (expanded) {
        const fx = foodRef.current.x * grid + grid / 2;
        const fy = foodRef.current.y * grid + grid / 2;

        ctx.beginPath();
        ctx.fillStyle = "#fb923c";
        ctx.arc(fx, fy, grid * 0.4, 0, Math.PI * 2);
        ctx.fill();
      }

      /* ---------- movement ---------- */
      const nextHead = {
        x: snakeRef.current[0].x + dirRef.current.dx,
        y: snakeRef.current[0].y + dirRef.current.dy
      };

      nextHead.x = (nextHead.x + tilesX) % tilesX;

      if (expanded) {
        nextHead.y = (nextHead.y + tilesY) % tilesY;
        } else {
        // perimeter loop logic (collapsed mode)

        // right →
        if (
            dirRef.current.dx === 1 &&
            nextHead.x >= COLLAPSED_MAX_X
        ) {
            dirRef.current.dx = 0;
            dirRef.current.dy = 1;
        }

        // down ↓
        else if (
            dirRef.current.dy === 1 &&
            nextHead.y >= COLLAPSED_MAX_Y
        ) {
            dirRef.current.dx = -1;
            dirRef.current.dy = 0;
        }

        // left ←
        else if (
            dirRef.current.dx === -1 &&
            nextHead.x <= COLLAPSED_MIN_X
        ) {
            dirRef.current.dx = 0;
            dirRef.current.dy = -1;
        }

        // up ↑
        else if (
            dirRef.current.dy === -1 &&
            nextHead.y <= COLLAPSED_MIN_Y
        ) {
            dirRef.current.dx = 1;
            dirRef.current.dy = 0;
        }

        nextHead.x = (nextHead.x + tilesX) % tilesX;
        nextHead.y = (nextHead.y + tilesY) % tilesY;
        }


      snakeRef.current.unshift(nextHead);
      // keep snake short in navbar mode
        if (!expanded && snakeRef.current.length > 8) {
        snakeRef.current.pop();
        }

      if (
        expanded &&
        nextHead.x === foodRef.current.x &&
        nextHead.y === foodRef.current.y
      ) {
        foodRef.current = {
          x: Math.floor(Math.random() * tilesX),
          y: Math.floor(Math.random() * tilesY)
        };
      } else {
        snakeRef.current.pop();
      }

    }, speed);

    return () => clearInterval(loop);
  }, [expanded, width, height, isHovered]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!expanded) return;

        if (e.key === "Escape") {
        setExpanded(false);
        return;
        }

      const d = dirRef.current;

      if (e.key === "ArrowUp" && d.dy === 0) (d.dx = 0), (d.dy = -1);
      if (e.key === "ArrowDown" && d.dy === 0) (d.dx = 0), (d.dy = 1);
      if (e.key === "ArrowLeft" && d.dx === 0) (d.dx = -1), (d.dy = 0);
      if (e.key === "ArrowRight" && d.dx === 0) (d.dx = 1), (d.dy = 0);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [expanded]);

// 🔥 ONLY NOW do conditional return
  if (isMobile) return null;

  return (
    <div
        onClick={() => !expanded && setExpanded(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`overflow-hidden border border-slate-700 shadow-xl cursor-pointer transition-all duration-300 bg-white/70 backdrop-blur-md
            ${
            expanded
                ? "fixed top-[72px] right-6 z-[9999] w-[240px] h-[240px] rounded-2xl"
                : "relative w-[140px] h-[48px] rounded-lg"
            }
        `}
        >
        {/* Close button (only when expanded) */}
        {expanded && (
            <button
            onClick={(e) => {
                e.stopPropagation();
                setExpanded(false);
            }}
            className="absolute top-2 right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full
                        bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white
                        transition"
            aria-label="Close snake game"
            >
            ✕
            </button>
        )}

        {!expanded && (
        <span
            className="pointer-events-none absolute inset-0 flex items-center justify-center
                    text-[10px] font-semibold tracking-widest text-[#0064c9] opacity-80 group-hover:opacity-100 group-hover:tracking-widest transition-all"
        >
            PLAY
        </span>
        )}

        <canvas ref={canvasRef} width={width} height={height} />
        </div>
  );
}
