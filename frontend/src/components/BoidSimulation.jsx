import React, { useEffect, useRef } from 'react';

const BoidSimulation = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const boidsRef = useRef([]);

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

    // Boid class
    class Boid {
      constructor(x, y) {
        this.position = { x, y };
        this.velocity = {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2
        };
        this.acceleration = { x: 0, y: 0 };
        this.maxSpeed = 1.5;
        this.maxForce = 0.03;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
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

      flock(boids) {
        const sep = this.separate(boids);
        const ali = this.align(boids);
        const coh = this.cohesion(boids);

        // Weight the forces
        sep.x *= 2.0;
        sep.y *= 2.0;
        ali.x *= 1.0;
        ali.y *= 1.0;
        coh.x *= 1.0;
        coh.y *= 1.0;

        this.applyForce(sep);
        this.applyForce(ali);
        this.applyForce(coh);
      }

      separate(boids) {
        const desiredSeparation = 25;
        const steer = { x: 0, y: 0 };
        let count = 0;

        for (let other of boids) {
          const distance = Math.sqrt(
            (this.position.x - other.position.x) ** 2 +
            (this.position.y - other.position.y) ** 2
          );

          if (distance > 0 && distance < desiredSeparation) {
            const diff = {
              x: this.position.x - other.position.x,
              y: this.position.y - other.position.y
            };
            
            if (distance > 0) {
              diff.x /= distance;
              diff.y /= distance;
            }
            
            steer.x += diff.x;
            steer.y += diff.y;
            count++;
          }
        }

        if (count > 0) {
          steer.x /= count;
          steer.y /= count;

          const steerMag = Math.sqrt(steer.x ** 2 + steer.y ** 2);
          if (steerMag > 0) {
            steer.x = (steer.x / steerMag) * this.maxSpeed;
            steer.y = (steer.y / steerMag) * this.maxSpeed;
          }

          steer.x -= this.velocity.x;
          steer.y -= this.velocity.y;

          const finalMag = Math.sqrt(steer.x ** 2 + steer.y ** 2);
          if (finalMag > this.maxForce) {
            steer.x = (steer.x / finalMag) * this.maxForce;
            steer.y = (steer.y / finalMag) * this.maxForce;
          }
        }

        return steer;
      }

      align(boids) {
        const neighborDist = 50;
        const sum = { x: 0, y: 0 };
        let count = 0;

        for (let other of boids) {
          const distance = Math.sqrt(
            (this.position.x - other.position.x) ** 2 +
            (this.position.y - other.position.y) ** 2
          );

          if (distance > 0 && distance < neighborDist) {
            sum.x += other.velocity.x;
            sum.y += other.velocity.y;
            count++;
          }
        }

        if (count > 0) {
          sum.x /= count;
          sum.y /= count;

          const sumMag = Math.sqrt(sum.x ** 2 + sum.y ** 2);
          if (sumMag > 0) {
            sum.x = (sum.x / sumMag) * this.maxSpeed;
            sum.y = (sum.y / sumMag) * this.maxSpeed;
          }

          const steer = {
            x: sum.x - this.velocity.x,
            y: sum.y - this.velocity.y
          };

          const steerMag = Math.sqrt(steer.x ** 2 + steer.y ** 2);
          if (steerMag > this.maxForce) {
            steer.x = (steer.x / steerMag) * this.maxForce;
            steer.y = (steer.y / steerMag) * this.maxForce;
          }

          return steer;
        }

        return { x: 0, y: 0 };
      }

      cohesion(boids) {
        const neighborDist = 50;
        const sum = { x: 0, y: 0 };
        let count = 0;

        for (let other of boids) {
          const distance = Math.sqrt(
            (this.position.x - other.position.x) ** 2 +
            (this.position.y - other.position.y) ** 2
          );

          if (distance > 0 && distance < neighborDist) {
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

    // Initialize boids - moderate amount (not too many, not too few)
    const initBoids = () => {
      boidsRef.current = [];
      const numBoids = Math.floor((canvas.width * canvas.height) / 25000); // Responsive to screen size
      const actualBoids = Math.min(Math.max(numBoids, 30), 80); // Between 30-80 boids

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

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let boid of boidsRef.current) {
        boid.flock(boidsRef.current);
        boid.update();
        boid.draw(ctx);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
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