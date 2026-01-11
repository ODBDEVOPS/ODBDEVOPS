document.addEventListener('DOMContentLoaded', function() {
   // Variables globales
   
   // Initialisation des étoiles
      function initStars() {
        const starsContainer = document.getElementById('stars-container');
        const starCount = 200;
        
        for (let i = 0; i < starCount; i++) {
          const star = document.createElement('div');
          star.className = 'stars-layer';
          
          // Position aléatoire
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const size = Math.random() * 2 + 1;
          const delay = Math.random() * 3;
          
          star.style.left = `${x}%`;
          star.style.top = `${y}%`;
          star.style.width = `${size}px`;
          star.style.height = `${size}px`;
          star.style.animationDelay = `${delay}s`;
          
          starsContainer.appendChild(star);
        }
      }
      // Animation des particules sur canvas
      function initParticles() {
        const canvas = document.getElementById('particles-canvas');
        const ctx = canvas.getContext('2d');
        
        // Redimensionnement du canvas
        function resizeCanvas() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Configuration des particules
        const particles = [];
        const particleCount = 100;
        
        // Création des particules
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.5 + 0.2})`
          });
        }
        
        // Animation des particules
        function animateParticles() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          particles.forEach(particle => {
            // Mise à jour de la position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Rebond sur les bords
            if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
            
            // Dessin de la particule
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Connexions entre particules
            particles.forEach(otherParticle => {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - distance/100)})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
              }
            });
          });
          
          requestAnimationFrame(animateParticles);
        }
        
        animateParticles();
      }
    // Initialisation au chargement
      initStars();
      initParticles();
    });
