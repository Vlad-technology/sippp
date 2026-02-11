import { useState, useEffect } from 'react';

function App() {
  const [glitch, setGlitch] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 3000);

    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    }));
    setParticles(newParticles);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0f',
      color: '#fff',
      fontFamily: '"Orbitron", "Courier New", monospace',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Фоновые частицы */}
      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          left: `${p.left}%`,
          top: '-10px',
          width: '2px',
          height: '2px',
          background: '#ff006e',
          borderRadius: '50%',
          animation: `fall ${p.duration}s linear ${p.delay}s infinite`,
          opacity: 0.6,
          boxShadow: '0 0 10px #ff006e'
        }} />
      ))}

      {/* Градиентный оверлей */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(ellipse at 20% 80%, rgba(120, 0, 200, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(255, 0, 110, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Главный контент */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px'
      }}>
        
        {/* ЛОГО Si++ */}
        <div style={{
          position: 'relative',
          marginBottom: '40px',
          transform: glitch ? 'translate(3px, -3px)' : 'none',
          transition: 'transform 0.05s'
        }}>
          {/* Glow эффект */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255,0,110,0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'pulse 2s ease-in-out infinite'
          }} />
          
          {/* ЛОГО ИЗ ФАЙЛА */}
          <img 
            src="/logo.jpg" 
            alt="Si++" 
            style={{
              width: 'clamp(150px, 30vw, 300px)',
              height: 'auto',
              filter: glitch ? 'drop-shadow(4px 4px 0 #00fff9) drop-shadow(-4px -4px 0 #ff006e)' : 'drop-shadow(0 0 30px rgba(255,0,110,0.5))',
              transition: 'filter 0.05s',
              position: 'relative',
              zIndex: 2
            }}
          />
          
          {/* Декоративные линии */}
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #ff006e, #8338ec, transparent)',
            animation: 'scan 3s linear infinite'
          }} />
        </div>

        {/* Подзаголовок */}
        <p style={{
          fontSize: 'clamp(16px, 3vw, 24px)',
          color: '#a0a0a0',
          textAlign: 'center',
          maxWidth: '600px',
          marginBottom: '50px',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          <span style={{ color: '#ff006e' }}>//</span> Код, который чувствует{' '}
          <span style={{ 
            color: '#8338ec',
            animation: 'flicker 2s infinite'
          }}>ТВОЙ ВАЙБ</span>
        </p>

        {/* КНОПКИ */}
        <div style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          
          {/* Кнопка СКАЧАТЬ — скачивает compilator.exe */}
          <a
            href="/compilator.exe"
            download="compilator.exe"
            style={{ textDecoration: 'none' }}
          >
            <button
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) skew(-5deg)';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(255,0,110,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) skew(0deg)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255,0,110,0.3)';
              }}
              style={{
                padding: '20px 50px',
                fontSize: '18px',
                fontWeight: 'bold',
                fontFamily: 'inherit',
                background: 'linear-gradient(135deg, #ff006e 0%, #8338ec 100%)',
                border: 'none',
                borderRadius: '5px',
                color: '#fff',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(255,0,110,0.3)',
                transition: 'all 0.3s',
                clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)'
              }}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>⬇⬇ СКАЧАТЬ ⬇⬇</span>
              <div style={{
                position: 'absolute',
                top: 0, left: '-100%',
                width: '100%', height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                animation: 'shine 2s infinite',
                zIndex: 1
              }} />
            </button>
          </a>

          {/* Кнопка ЧАТ */}
          <a
            href="https://t.me/Siplusplussiplus"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) skew(5deg)';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(58,134,255,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) skew(0deg)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              style={{
                padding: '20px 50px',
                fontSize: '18px',
                fontWeight: 'bold',
                fontFamily: 'inherit',
                background: 'transparent',
                border: '2px solid #3a86ff',
                borderRadius: '5px',
                color: '#3a86ff',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s',
                clipPath: 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)'
              }}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>💬 ВОЙТИ В ЧАТ</span>
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(135deg, #3a86ff 0%, #8338ec 100%)',
                opacity: 0,
                transition: 'opacity 0.3s',
                zIndex: 1
              }} className="hover-overlay" />
              <style>{`
                button:hover .hover-overlay {
                  opacity: 0.2 !important;
                }
              `}</style>
            </button>
          </a>
        </div>

        {/* Версия и инфо */}
        <div style={{
          marginTop: '60px',
          textAlign: 'center',
          color: '#555',
          fontSize: '12px',
          letterSpacing: '3px'
        }}>
          <div style={{ marginBottom: '10px' }}>v0.1.0</div>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <span>new era</span>
            <span style={{ color: '#ff006e' }}>•</span>
            <span>future</span>
            <span style={{ color: '#8338ec' }}>•</span>
            <span>fast</span>
          </div>
        </div>

        {/* Описание с ФОТО */}
        <div style={{
          marginTop: '80px',
          padding: '30px',
          border: '1px solid #333',
          borderRadius: '10px',
          background: 'rgba(255,255,255,0.02)',
          maxWidth: '500px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}>
          <div style={{
            position: 'absolute',
            top: '-15px',
            left: '20px',
            background: '#0a0a0f',
            padding: '0 15px',
            color: '#ff006e',
            fontSize: '12px',
            letterSpacing: '2px'
          }}>
            ОПИСАНИЕ
          </div>

          {/* ФОТО */}
          <img 
            src="/photo.png" 
            alt="Si++ demo" 
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '8px',
              border: '2px solid #333',
              boxShadow: '0 0 30px rgba(131, 56, 236, 0.3)'
            }}
          />

          <p style={{
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#aaa',
            textAlign: 'center',
            margin: 0
          }}>
            Si++ — это не просто язык. Это стиль жизни для тех, 
            кто кодит на скорости света и не признаёт компромиссов.
          </p>
        </div>

      </div>

      {/* CSS анимации */}
      <style>{`
        @keyframes fall {
          to { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
        }
        @keyframes scan {
          0% { transform: scaleX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: scaleX(1); opacity: 0; }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes shine {
          to { left: 100%; }
        }
      `}</style>
    </div>
  );
}

export default App;