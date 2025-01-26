"use client";

import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const FireworksEffect = () => {
  useEffect(() => {
    const canvasEl = document.querySelector(".fireworks");
    if (!canvasEl) return;

    const ctx = canvasEl.getContext("2d");
    let numberOfParticules = 30;
    const colors = ["#0760fa", "#D9DBDB"];

    function setCanvasSize() {
      canvasEl.width = window.innerWidth * 2;
      canvasEl.height = window.innerHeight * 2;
      canvasEl.style.width = window.innerWidth + "px";
      canvasEl.style.height = window.innerHeight + "px";
      ctx.scale(2, 2);
    }

    function createParticule(x, y) {
      const p = {
        x,
        y,
        color: colors[Math.floor(Math.random() * colors.length)],
        radius: Math.random() * 16 + 16,
        endPos: setParticuleDirection(x, y),
      };

      p.draw = function () {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = p.color;
        ctx.fill();
      };
      return p;
    }

    function setParticuleDirection(x, y) {
      const angle = (Math.random() * 360 * Math.PI) / 180;
      const value = Math.random() * 130 + 50;
      const radius = [-1, 1][Math.floor(Math.random() * 2)] * value;
      return {
        x: x + radius * Math.cos(angle),
        y: y + radius * Math.sin(angle),
      };
    }

    function animateParticules(x, y) {
      const particules = [];
      for (let i = 0; i < numberOfParticules; i++) {
        particules.push(createParticule(x, y));
      }

      anime.timeline().add({
        targets: particules,
        x: (p) => p.endPos.x,
        y: (p) => p.endPos.y,
        radius: 0.1,
        duration: Math.random() * 600 + 1200,
        easing: "easeOutExpo",
        update: function (anim) {
          ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
          for (let i = 0; i < anim.animatables.length; i++) {
            anim.animatables[i].target.draw();
          }
        },
        complete: function () {
          ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
        },
      });
    }

    function updateCoords(e) {
      if (e.type === "click") {
        animateParticules(e.clientX, e.clientY);
      }
    }

    document.addEventListener("click", updateCoords);
    window.addEventListener("resize", setCanvasSize);

    setCanvasSize(); // Set the initial canvas size

    return () => {
      document.removeEventListener("click", updateCoords);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return <canvas className="fireworks"></canvas>;
};

export default FireworksEffect;
