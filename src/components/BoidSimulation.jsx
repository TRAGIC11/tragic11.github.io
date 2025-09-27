import React, { useEffect, useRef } from 'react';

const BoidSimulation = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const boidsRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const gridRef = useRef({});
  const cellSize = 50; // Neighbor search cell size

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Boid class
    class Boid {
      constructor(x, y) {
        this.position = { x, y };
        this.velocity = {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2
        };
        this.acceleration = { x: 0, y: 0 };
        this.maxSpeed = 2;
        this.maxForce = 0.1;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      avoidMouse(mouse) {
        const avoidRadius = 100; // "big obstacle" size
        const steer = { x: 0, y: 0 };

        const dx = this.position.x - mouse.x;
        const dy = this.position.y - mouse.y;
        const distSq = dx * dx + dy * dy;

        if (distSq > 0 && distSq < avoidRadius * avoidRadius) {
          const dist = Math.sqrt(distSq);
          steer.x = (dx / dist) * this.maxSpeed - this.velocity.x;
          steer.y = (dy / dist) * this.maxSpeed - this.velocity.y;

          const steerMag = Math.sqrt(steer.x ** 2 + steer.y ** 2);
          if (steerMag > this.maxForce * 3) { // stronger than normal steering
            steer.x = (steer.x / steerMag) * this.maxForce * 3;
            steer.y = (steer.y / steerMag) * this.maxForce * 3;
          }
        }

        return steer;
      }

      update() {
        // Update velocity
        this.velocity.x += this.acceleration.x;
        this.velocity.y += this.acceleration.y;

        // Limit speed
        const speed = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2);
        if (speed > this.maxSpeed) {
          this.velocity.x = (this.velocity.x / speed) * this.maxSpeed;
          this.velocity.y = (this.velocity.y / speed) * this.maxSpeed;
        }

        // Update position
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // Wrap around edges
        if (this.position.x < 0) this.position.x = canvas.width;
        if (this.position.x > canvas.width) this.position.x = 0;
        if (this.position.y < 0) this.position.y = canvas.height;
        if (this.position.y > canvas.height) this.position.y = 0;

        // Reset acceleration
        this.acceleration.x = 0;
        this.acceleration.y = 0;
      }

      applyForce(force) {
        this.acceleration.x += force.x;
        this.acceleration.y += force.y;
      }

      seek(target) {
        const desired = {
          x: target.x - this.position.x,
          y: target.y - this.position.y
        };

        const distance = Math.sqrt(desired.x ** 2 + desired.y ** 2);
        if (distance > 0) {
          desired.x = (desired.x / distance) * this.maxSpeed;
          desired.y = (desired.y / distance) * this.maxSpeed;
        }

        const steer = {
          x: desired.x - this.velocity.x,
          y: desired.y - this.velocity.y
        };

        const steerMag = Math.sqrt(steer.x ** 2 + steer.y ** 2);
        if (steerMag > this.maxForce) {
          steer.x = (steer.x / steerMag) * this.maxForce;
          steer.y = (steer.y / steerMag) * this.maxForce;
        }

        return steer;
      }

      // Uses only nearby boids from grid
      flock(grid, mouse) {
        const neighbors = getNearbyBoids(this, grid);
        const sep = this.separate(neighbors);
        const ali = this.align(neighbors);
        const coh = this.cohesion(neighbors);
        const avoid = this.avoidMouse(mouse);

        sep.x *= 2.0; sep.y *= 2.0;
        ali.x *= 1.0; ali.y *= 1.0;
        coh.x *= 1.0; coh.y *= 1.0;

        this.applyForce(sep);
        this.applyForce(ali);
        this.applyForce(coh);
        this.applyForce(avoid);
      }

      separate(boids) {
        const desiredSeparation = 25;
        const steer = { x: 0, y: 0 };
        let count = 0;

        for (let other of boids) {
          const dx = this.position.x - other.position.x;
          const dy = this.position.y - other.position.y;
          const distSq = dx * dx + dy * dy;
          if (distSq > 0 && distSq < desiredSeparation * desiredSeparation) {
            steer.x += dx / Math.sqrt(distSq);
            steer.y += dy / Math.sqrt(distSq);
            count++;
          }
        }
        if (count > 0) {
          steer.x /= count;
          steer.y /= count;
          const mag = Math.sqrt(steer.x ** 2 + steer.y ** 2);
          if (mag > 0) {
            steer.x = (steer.x / mag) * this.maxSpeed - this.velocity.x;
            steer.y = (steer.y / mag) * this.maxSpeed - this.velocity.y;
            const steerMag = Math.sqrt(steer.x ** 2 + steer.y ** 2);
            if (steerMag > this.maxForce) {
              steer.x = (steer.x / steerMag) * this.maxForce;
              steer.y = (steer.y / steerMag) * this.maxForce;
            }
          }
        }
        return steer;
      }

      align(boids) {
        const neighborDist = 50;
        const sum = { x: 0, y: 0 };
        let count = 0;
        for (let other of boids) {
          const dx = this.position.x - other.position.x;
          const dy = this.position.y - other.position.y;
          const distSq = dx * dx + dy * dy;
          if (distSq > 0 && distSq < neighborDist * neighborDist) {
            sum.x += other.velocity.x;
            sum.y += other.velocity.y;
            count++;
          }
        }
        if (count > 0) {
          sum.x /= count;
          sum.y /= count;
          const mag = Math.sqrt(sum.x ** 2 + sum.y ** 2);
          if (mag > 0) {
            sum.x = (sum.x / mag) * this.maxSpeed - this.velocity.x;
            sum.y = (sum.y / mag) * this.maxSpeed - this.velocity.y;
            const steerMag = Math.sqrt(sum.x ** 2 + sum.y ** 2);
            if (steerMag > this.maxForce) {
              sum.x = (sum.x / steerMag) * this.maxForce;
              sum.y = (sum.y / steerMag) * this.maxForce;
            }
          }
          return sum;
        }
        return { x: 0, y: 0 };
      }

      cohesion(boids) {
        const neighborDist = 50;
        const sum = { x: 0, y: 0 };
        let count = 0;
        for (let other of boids) {
          const dx = this.position.x - other.position.x;
          const dy = this.position.y - other.position.y;
          const distSq = dx * dx + dy * dy;
          if (distSq > 0 && distSq < neighborDist * neighborDist) {
            sum.x += other.position.x;
            sum.y += other.position.y;
            count++;
          }
        }
        if (count > 0) {
          sum.x /= count;
          sum.y /= count;
          return this.seek(sum);
        }
        return { x: 0, y: 0 };
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        
        // Calculate angle based on velocity
        const angle = Math.atan2(this.velocity.y, this.velocity.x);
        ctx.rotate(angle);

        // Draw boid as a small triangle with cyan color
        ctx.fillStyle = `rgba(34, 211, 238, ${this.opacity})`;
        ctx.beginPath();
        ctx.moveTo(this.size * 2, 0);
        ctx.lineTo(-this.size, -this.size);
        ctx.lineTo(-this.size, this.size);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }
    }

    // Spatial grid helper functions
    function buildGrid(boids) {
      const grid = {};
      for (let boid of boids) {
        const cellX = Math.floor(boid.position.x / cellSize);
        const cellY = Math.floor(boid.position.y / cellSize);
        const key = `${cellX},${cellY}`;
        if (!grid[key]) grid[key] = [];
        grid[key].push(boid);
      }
      return grid;
    }

    function getNearbyBoids(boid, grid) {
      const neighbors = [];
      const cellX = Math.floor(boid.position.x / cellSize);
      const cellY = Math.floor(boid.position.y / cellSize);
      for (let gx = -1; gx <= 1; gx++) {
        for (let gy = -1; gy <= 1; gy++) {
          const key = `${cellX + gx},${cellY + gy}`;
          if (grid[key]) {
            neighbors.push(...grid[key]);
          }
        }
      }
      return neighbors;
    }

    // Init boids
    const initBoids = () => {
      boidsRef.current = [];
      const numBoids = Math.floor((canvas.width * canvas.height) / 15000); // Responsive to screen size
      const actualBoids = Math.min(numBoids, 500); // Between 30-80 boids

      for (let i = 0; i < actualBoids; i++) {
        boidsRef.current.push(
          new Boid(
          Math.random() * canvas.width,
          Math.random() * canvas.height
          )
        );
      }
    };

    initBoids();

    // Animation
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Build spatial grid
      gridRef.current = buildGrid(boidsRef.current);

      for (let boid of boidsRef.current) {
        boid.flock(gridRef.current, mouseRef.current);
      }
      for (let boid of boidsRef.current) {
        boid.update();
        boid.draw(ctx);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default BoidSimulation;