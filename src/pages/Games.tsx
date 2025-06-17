import React from 'react';

const Games: React.FC = () => {
  const handlePlayGame = () => {
    // 直接跳转到游戏页面，不使用 iframe
    window.location.href = '/games/watermelon/';
  };

  const handlePlayInNewTab = () => {
    window.open('/games/watermelon/', '_blank');
  };

  return (
    <div className="games-page">
      <header className="page-header">
        <h1>🎮 我的游戏作品</h1>
        <p>使用Godot引擎开发的Web游戏</p>
      </header>
      
      <main className="games-content">
        <div className="featured-game">
          {/* 游戏预览卡片，不使用 iframe */}
          <div className="game-preview-card">
            <div className="game-icon">🍉</div>
            <div className="game-details">
              <h2>切西瓜游戏</h2>
              <p>一个需要平衡饥饿度和血糖的策略小游戏。切西瓜来填饱肚子，但要小心不要血糖过高！</p>
              
              <div className="game-features">
                <span className="feature-tag">🍉 多种西瓜类型</span>
                <span className="feature-tag">⚖️ 平衡机制</span>
                <span className="feature-tag">🎨 精美特效</span>
                <span className="feature-tag">📱 移动支持</span>
              </div>
              
              <div className="game-actions">
                <button 
                  onClick={handlePlayGame}
                  className="play-button primary"
                >
                  🎮 开始游戏
                </button>
                <button 
                  onClick={handlePlayInNewTab}
                  className="play-button secondary"
                >
                  🔗 新标签页打开
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="game-info-sections">
          <div className="info-section">
            <h3>🎯 游戏特点</h3>
            <ul>
              <li>🍉 多种特殊西瓜类型（金色、甜味、迷你、巨型）</li>
              <li>⚖️ 创新的饥饿度与血糖反比关系机制</li>
              <li>🎨 华丽的粒子特效和动画</li>
              <li>🏆 连击系统和评级机制</li>
              <li>📱 支持移动端触屏操作</li>
            </ul>
          </div>
          
          <div className="info-section">
            <h3>🕹️ 操作方法</h3>
            <ul>
              <li>🖱️ 鼠标滑动切割西瓜</li>
              <li>📱 触屏设备支持手指滑动</li>
              <li>⏸️ 空格键暂停/继续</li>
              <li>🔄 游戏结束后可重新开始</li>
            </ul>
          </div>
        </div>
      </main>
      
      <style>{`
        .games-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        
        .page-header {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .page-header h1 {
          font-size: 3em;
          background: linear-gradient(135deg,rgb(203, 241, 244) 0%, #bfd9d7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
        }
        
        .page-header p {
          font-size: 1.2em;
          color: #666;
        }
        
        .featured-game {
          background: #f8f9fa;
          border-radius: 15px;
          padding: 40px;
          margin-bottom: 40px;
        }
        
        .game-preview-card {
          display: flex;
          align-items: center;
          gap: 40px;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .game-icon {
          font-size: 8em;
          min-width: 200px;
          text-align: center;
          background: linear-gradient(135deg, #ddbb4d 0%, #bfd9d7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .game-details {
          flex: 1;
        }
        
        .game-details h2 {
          font-size: 2.5em;
          color: #333;
          margin-bottom: 15px;
        }
        
        .game-details p {
          font-size: 1.1em;
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .game-features {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 25px;
        }
        
        .feature-tag {
          background: linear-gradient(135deg, #ddbb4d 0%, #bfd9d7 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.9em;
          font-weight: 500;
        }
        
        .game-actions {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }
        
        .play-button {
          padding: 15px 30px;
          border: none;
          border-radius: 25px;
          font-size: 1.1em;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        
        .play-button.primary {
          background: linear-gradient(135deg, #ddbb4d 0%, #bfd9d7 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(221, 187, 77, 0.4);
        }
        
        .play-button.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(221, 187, 77, 0.6);
        }
        
        .play-button.secondary {
          background: transparent;
          color: #ddbb4d;
          border: 2px solid #ddbb4d;
        }
        
        .play-button.secondary:hover {
          background: #ddbb4d;
          color: white;
          transform: translateY(-2px);
        }
        
        .game-info-sections {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-top: 40px;
        }
        
        .info-section h3 {
          color: #333;
          margin-bottom: 15px;
          font-size: 1.3em;
        }
        
        .info-section ul {
          list-style: none;
          padding: 0;
        }
        
        .info-section li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          color: #666;
        }
        
        .info-section li:last-child {
          border-bottom: none;
        }
        
        @media (max-width: 768px) {
          .games-page {
            padding: 20px 15px;
          }
          
          .page-header h1 {
            font-size: 2.5em;
          }
          
          .featured-game {
            padding: 20px;
          }
          
          .game-preview-card {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          
          .game-icon {
            font-size: 6em;
            min-width: auto;
          }
          
          .game-actions {
            justify-content: center;
          }
          
          .game-info-sections {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Games;