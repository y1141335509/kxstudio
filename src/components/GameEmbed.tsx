import React, { useState } from 'react';

interface GameEmbedProps {
  gameUrl: string;
  title: string;
  description: string;
  width?: number;
  height?: number;
}

const GameEmbed: React.FC<GameEmbedProps> = ({ 
  gameUrl, 
  title, 
  description, 
  width = 800, 
  height = 600 
}) => {
  const [showGame, setShowGame] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleStartGame = () => {
    setIsLoading(true);
    // 在当前页面打开游戏，而不是使用 iframe
    window.open(gameUrl, '_blank', 'width=1024,height=768,scrollbars=yes,resizable=yes');
    setIsLoading(false);
  };

  const handleEmbedGame = () => {
    setShowGame(true);
  };

  return (
    <div className="game-embed">
      <div className="game-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      
      {!showGame ? (
        <div className="game-preview" style={{
          width: width,
          height: height,
          maxWidth: '100%',
          background: 'linear-gradient(135deg, #bfd9d7 0%, #ddbb4d 100%)',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          margin: '20px auto',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            fontSize: '4em',
            marginBottom: '20px'
          }}>🍉</div>
          <h3 style={{ margin: '10px 0', fontSize: '1.5em' }}>切西瓜游戏</h3>
          <p style={{ margin: '10px 0', textAlign: 'center', maxWidth: '300px' }}>
            平衡饥饿度和血糖的策略小游戏
          </p>
          
          <div style={{ marginTop: '30px' }}>
            <button 
              onClick={handleStartGame}
              disabled={isLoading}
              style={{
                background: 'rgba(255,255,255,0.9)',
                color: '#333',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '25px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                margin: '0 10px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {isLoading ? '⏳ 启动中...' : '🚀 新标签页开始游戏'}
            </button>
            
            <button 
              onClick={handleEmbedGame}
              style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.8)',
                padding: '13px 28px',
                borderRadius: '25px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                margin: '0 10px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              🎮 嵌入游戏 (实验性)
            </button>
          </div>
          
          <div style={{
            position: 'absolute',
            bottom: '20px',
            fontSize: '12px',
            opacity: 0.8
          }}>
            推荐使用 Chrome 浏览器获得最佳体验
          </div>
        </div>
      ) : (
        <div className="game-frame">
          <iframe
            src={gameUrl}
            width={width}
            height={height}
            frameBorder="0"
            allowFullScreen
            title={title}
            allow="cross-origin-isolated; web-share"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            style={{
              maxWidth: '100%',
              border: '2px solid #ddd',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          />
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <button 
              onClick={() => setShowGame(false)}
              style={{
                background: '#6c757d',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              🔙 返回预览
            </button>
          </div>
        </div>
      )}
      
      <div className="game-actions" style={{ textAlign: 'center', marginTop: '20px' }}>
        <a 
          href={gameUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="play-fullscreen"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #ddbb4d 0%, #bfd9d7 100%)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          🎮 全屏游戏
        </a>
      </div>
    </div>
  );
};

export default GameEmbed;