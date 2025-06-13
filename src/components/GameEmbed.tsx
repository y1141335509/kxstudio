import React from 'react';

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
  return (
    <div className="game-embed">
      <div className="game-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      
      <div className="game-frame">
        <iframe
          src={gameUrl}
          width={width}
          height={height}
          frameBorder="0"
          allowFullScreen
          title={title}
          style={{
            maxWidth: '100%',
            border: '2px solid #ddd',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        />
      </div>
      
      <div className="game-actions">
        <a 
          href={gameUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="play-fullscreen"
        >
          🎮 全屏游戏
        </a>
      </div>
      
      <style>{`
        .game-embed {
          margin: 40px 0;
          text-align: center;
        }
        
        .game-info h2 {
          color: #333;
          margin-bottom: 10px;
        }
        
        .game-info p {
          color: #666;
          margin-bottom: 20px;
        }
        
        .game-frame {
          margin: 20px 0;
          display: flex;
          justify-content: center;
        }
        
        .play-fullscreen {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: bold;
          margin-top: 15px;
          transition: transform 0.3s ease;
        }
        
        .play-fullscreen:hover {
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .game-frame iframe {
            width: 100% !important;
            height: 400px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GameEmbed;