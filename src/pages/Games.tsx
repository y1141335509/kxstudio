import React from 'react';
import GameEmbed from '../components/GameEmbed';

const Games: React.FC = () => {
  return (
    <div className="games-page">
      <header className="page-header">
        <h1>🎮 我的游戏作品</h1>
        <p>使用Godot引擎开发的Web游戏</p>
      </header>
      
      <main className="games-content">
        <div className="featured-game">
          <GameEmbed
            gameUrl="/games/watermelon/"
            title="🍉 切西瓜游戏"
            description="一个需要平衡饥饿度和血糖的策略小游戏。切西瓜来填饱肚子，但要小心不要血糖过高！"
            width={800}
            height={600}
          />
        </div>
        
        <div className="game-details">
          <h3>🎯 游戏特点</h3>
          <ul>
            <li>🍉 多种特殊西瓜类型（金色、甜味、迷你、巨型）</li>
            <li>⚖️ 创新的饥饿度与血糖反比关系机制</li>
            <li>🎨 华丽的粒子特效和动画</li>
            <li>🏆 连击系统和评级机制</li>
            <li>📱 支持移动端触屏操作</li>
          </ul>
          
          <h3>🕹️ 操作方法</h3>
          <ul>
            <li>🖱️ 鼠标滑动切割西瓜</li>
            <li>📱 触屏设备支持手指滑动</li>
            <li>⏸️ 空格键暂停/继续</li>
            <li>🔄 游戏结束后可重新开始</li>
          </ul>
        </div>
      </main>
      
      <style>
        {`
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
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
        
        .game-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-top: 40px;
        }
        
        .game-details h3 {
          color: #333;
          margin-bottom: 15px;
        }
        
        .game-details ul {
          list-style: none;
          padding: 0;
        }
        
        .game-details li {
          padding: 8px 0;
          border-bottom: 1px solid #eee;
        }
        
        .game-details li:last-child {
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
          
          .game-details {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        `}
      </style>
    </div>
  );
};

export default Games;