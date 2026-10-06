"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  radius: number;
  color: string;
};

type Mouse = {
  x: number;
  y: number;
  radius: number;
  active: boolean;
};

const palette = [
  "54, 197, 240",  // cyan
  "124, 58, 237",  // purple
  "46, 182, 125",  // green
  "224, 30, 90",   // pink
];

export default function InteractiveNetwork() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    let animationFrameId = 0;

    let points: Point[] = [];

    const mouse: Mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
      active: false,
    };

    const connectionDistance = 145;

    /*
     * -------------------------------------------------------
     * Canvas setup
     * -------------------------------------------------------
     */

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0
      );

      createPoints();
    };

    /*
     * -------------------------------------------------------
     * Generate network
     * -------------------------------------------------------
     */

    const createPoints = () => {
      points = [];

      /*
       * Number of points adapts to screen size.
       *
       * Desktop receives more particles.
       * Mobile receives fewer particles for performance.
       */

      const area = width * height;

      let numberOfPoints = Math.floor(area / 22000);

      numberOfPoints = Math.max(
        35,
        Math.min(numberOfPoints, 90)
      );

      if (width < 768) {
        numberOfPoints = Math.min(numberOfPoints, 45);
      }

      for (let i = 0; i < numberOfPoints; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;

        points.push({
          x,
          y,

          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,

          baseX: x,
          baseY: y,

          radius: Math.random() * 1.3 + 0.65,

          color:
            palette[
              Math.floor(Math.random() * palette.length)
            ],
        });
      }
    };

    /*
     * -------------------------------------------------------
     * Draw particle
     * -------------------------------------------------------
     */

    const drawPoint = (point: Point) => {
      const dx = point.x - mouse.x;
      const dy = point.y - mouse.y;

      const distance = Math.sqrt(
        dx * dx + dy * dy
      );

      const nearMouse =
        mouse.active &&
        distance < mouse.radius;

      const opacity = nearMouse ? 0.95 : 0.62;

      const radius = nearMouse
        ? point.radius * 1.35
        : point.radius;

      /*
       * Glow
       */

      if (nearMouse) {
        context.beginPath();

        context.arc(
          point.x,
          point.y,
          radius * 4,
          0,
          Math.PI * 2
        );

        context.fillStyle =
          `rgba(${point.color}, 0.055)`;

        context.fill();
      }

      /*
       * Particle
       */

      context.beginPath();

      context.arc(
        point.x,
        point.y,
        radius,
        0,
        Math.PI * 2
      );

      context.fillStyle =
        `rgba(${point.color}, ${opacity})`;

      context.fill();
    };

    /*
     * -------------------------------------------------------
     * Draw connections
     * -------------------------------------------------------
     */

    const drawConnections = () => {
      for (let i = 0; i < points.length; i++) {
        for (
          let j = i + 1;
          j < points.length;
          j++
        ) {
          const a = points[i];
          const b = points[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < connectionDistance) {
            /*
             * Normal network visibility.
             */

            const baseOpacity =
              (1 -
                distance /
                  connectionDistance) *
              0.18;

            /*
             * Find center of connection.
             */

            const middleX = (a.x + b.x) / 2;
            const middleY = (a.y + b.y) / 2;

            const mouseDx =
              middleX - mouse.x;

            const mouseDy =
              middleY - mouse.y;

            const mouseDistance = Math.sqrt(
              mouseDx * mouseDx +
                mouseDy * mouseDy
            );

            /*
             * Connections near the pointer become
             * brighter.
             */

            const mouseInfluence =
              mouse.active &&
              mouseDistance < mouse.radius
                ? (1 -
                    mouseDistance /
                      mouse.radius) *
                  0.38
                : 0;

            const opacity = Math.min(
              baseOpacity + mouseInfluence,
              0.55
            );

            /*
             * Gradient between the colors
             * of the two connected particles.
             */

            const gradient =
              context.createLinearGradient(
                a.x,
                a.y,
                b.x,
                b.y
              );

            gradient.addColorStop(
              0,
              `rgba(${a.color}, ${opacity})`
            );

            gradient.addColorStop(
              1,
              `rgba(${b.color}, ${opacity})`
            );

            context.beginPath();

            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);

            context.strokeStyle = gradient;

            context.lineWidth =
              mouseInfluence > 0
                ? 0.9
                : 0.55;

            context.stroke();
          }
        }
      }
    };

    /*
     * -------------------------------------------------------
     * Particle physics
     * -------------------------------------------------------
     */

    const updatePoint = (point: Point) => {
      /*
       * Natural movement.
       */

      point.x += point.vx;
      point.y += point.vy;

      /*
       * Mouse interaction.
       */

      if (mouse.active) {
        const dx = mouse.x - point.x;
        const dy = mouse.y - point.y;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        if (
          distance < mouse.radius &&
          distance > 0
        ) {
          const force =
            (mouse.radius - distance) /
            mouse.radius;

          /*
           * Very subtle attraction.
           *
           * This creates the effect of the network
           * following the pointer without making
           * particles aggressively chase it.
           */

          point.x +=
            (dx / distance) *
            force *
            0.32;

          point.y +=
            (dy / distance) *
            force *
            0.32;
        }
      }

      /*
       * Very gentle tendency to return toward
       * the original position.
       */

      point.x +=
        (point.baseX - point.x) * 0.0007;

      point.y +=
        (point.baseY - point.y) * 0.0007;

      /*
       * Screen boundaries.
       */

      if (point.x < -20) {
        point.x = width + 20;
        point.baseX = point.x;
      }

      if (point.x > width + 20) {
        point.x = -20;
        point.baseX = point.x;
      }

      if (point.y < -20) {
        point.y = height + 20;
        point.baseY = point.y;
      }

      if (point.y > height + 20) {
        point.y = -20;
        point.baseY = point.y;
      }
    };

    /*
     * -------------------------------------------------------
     * Render
     * -------------------------------------------------------
     */

    const render = () => {
      context.clearRect(
        0,
        0,
        width,
        height
      );

      drawConnections();

      for (const point of points) {
        drawPoint(point);
      }
    };

    /*
     * -------------------------------------------------------
     * Animation loop
     * -------------------------------------------------------
     */

    const animate = () => {
      for (const point of points) {
        updatePoint(point);
      }

      render();

      animationFrameId =
        window.requestAnimationFrame(animate);
    };

    /*
     * -------------------------------------------------------
     * Mouse
     * -------------------------------------------------------
     */

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;

      mouse.x = -1000;
      mouse.y = -1000;
    };

    /*
     * -------------------------------------------------------
     * Touch
     * -------------------------------------------------------
     */

    const handleTouchMove = (
      event: TouchEvent
    ) => {
      const touch = event.touches[0];

      if (!touch) return;

      mouse.x = touch.clientX;
      mouse.y = touch.clientY;
      mouse.active = true;
    };

    const handleTouchEnd = () => {
      mouse.active = false;

      mouse.x = -1000;
      mouse.y = -1000;
    };

    /*
     * -------------------------------------------------------
     * Initialize
     * -------------------------------------------------------
     */

    resizeCanvas();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true }
    );

    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    window.addEventListener(
      "touchmove",
      handleTouchMove,
      { passive: true }
    );

    window.addEventListener(
      "touchend",
      handleTouchEnd,
      { passive: true }
    );

    /*
        * Start animation loop
    */

    animate();

    /*
     * -------------------------------------------------------
     * Cleanup
     * -------------------------------------------------------
     */

    return () => {
      window.cancelAnimationFrame(
        animationFrameId
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      window.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      window.removeEventListener(
        "touchend",
        handleTouchEnd
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-full w-full"
    />
  );
}
