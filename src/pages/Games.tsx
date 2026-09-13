import React, { useState } from 'react';

const Games: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringImmortal, setIsHoveringImmortal] = useState(false);
  const [isHoveringMihoyo, setIsHoveringMihoyo] = useState(false);
  const [isHoveringChuxin, setIsHoveringChuxin] = useState(false);
  const [isHoveringDahunye, setIsHoveringDahunye] = useState(false);

  const handlePlayGame = () => {
    window.location.href = '/games/watermelon/';
  };

  const handlePlayInNewTab = () => {
    window.open('/games/watermelon/', '_blank');
  };

  const handlePlayImmortalGame = () => {
    window.location.href = '/games/immortality/';
  };

  const handlePlayImmortalInNewTab = () => {
    window.open('/games/immortality/', '_blank');
  };

  const handlePlayMihoyoGame = () => {
    window.location.href = '/games/mihoyo/';
  };

  const handlePlayMihoyoInNewTab = () => {
    window.open('/games/mihoyo/', '_blank');
  };

  const handlePlayChuxinGame = () => {
    window.location.href = '/games/chuxin/';
  };

  const handlePlayChuxinInNewTab = () => {
    window.open('/games/chuxin/', '_blank');
  };

  const handlePlayDahunyeGame = () => {
    window.location.href = '/games/dahunye/';
  };

  const handlePlayDahunyeInNewTab = () => {
    window.open('/games/dahunye/', '_blank');
  };

  return (
    <div className="games-page">
      {/* 背景装饰 */}
      <div className="bg-decoration">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <header className="page-header">
        <div className="header-content">
          <h1>🎮 我的游戏世界</h1>
          <p className="subtitle">精心打造的Web游戏体验</p>
          <div className="header-line"></div>
        </div>
      </header>
      
      <main className="games-content">
        <div className="games-grid">
          <div className="game-card" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className="game-preview">
              <div className="game-icon">
                <span className={`game-emoji ${isHovering ? 'bounce' : ''}`}>🍉</span>
                <div className="icon-glow"></div>
              </div>

              <div className="game-info">
                <div className="game-badge">🏆 原创作品</div>
                <h2 className="game-title">切西瓜大师</h2>
                <p className="game-description">
                  一个融合策略与反应的创新小游戏。在享受切西瓜乐趣的同时，
                  你需要巧妙平衡饥饿度和血糖水平，体验前所未有的游戏机制！
                </p>

                <div className="game-features">
                  <div className="feature-item">
                    <span className="feature-icon">🍉</span>
                    <span>多种特殊西瓜</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">⚖️</span>
                    <span>平衡策略</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✨</span>
                    <span>华丽特效</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">📱</span>
                    <span>移动支持</span>
                  </div>
                </div>

                <div className="game-actions">
                  <button
                    onClick={handlePlayGame}
                    className="play-button primary"
                  >
                    <span className="button-icon">🎮</span>
                    开始游戏
                    <div className="button-shine"></div>
                  </button>
                  <button
                    onClick={handlePlayInNewTab}
                    className="play-button secondary"
                  >
                    <span className="button-icon">🔗</span>
                    新窗口打开
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="game-card" onMouseEnter={() => setIsHoveringImmortal(true)} onMouseLeave={() => setIsHoveringImmortal(false)}>
            <div className="game-preview">
              <div className="game-icon">
                <span className={`game-emoji ${isHoveringImmortal ? 'bounce' : ''}`}>⚱️</span>
                <div className="icon-glow"></div>
              </div>

              <div className="game-info">
                <div className="game-badge">🏆 原创作品</div>
                <h2 className="game-title">永生之战</h2>
                <p className="game-description">
                  一个关于人生选择与命运的策略游戏。从童年到老年，
                  每一个决定都会影响你的健康、财富和心智，目标是活到100岁迎接永生时代！
                </p>

                <div className="game-features">
                  <div className="feature-item">
                    <span className="feature-icon">🎯</span>
                    <span>人生策略</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">⚖️</span>
                    <span>平衡机制</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🎭</span>
                    <span>随机事件</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">📈</span>
                    <span>成长系统</span>
                  </div>
                </div>

                <div className="game-actions">
                  <button
                    onClick={handlePlayImmortalGame}
                    className="play-button primary"
                  >
                    <span className="button-icon">🎮</span>
                    开始游戏
                    <div className="button-shine"></div>
                  </button>
                  <button
                    onClick={handlePlayImmortalInNewTab}
                    className="play-button secondary"
                  >
                    <span className="button-icon">🔗</span>
                    新窗口打开
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="game-card" onMouseEnter={() => setIsHoveringMihoyo(true)} onMouseLeave={() => setIsHoveringMihoyo(false)}>
            <div className="game-preview">
              <div className="game-icon">
                <span className={`game-emoji ${isHoveringMihoyo ? 'bounce' : ''}`}>💼</span>
                <div className="icon-glow"></div>
              </div>

              <div className="game-info">
                <div className="game-badge">🏆 原创作品</div>
                <h2 className="game-title">收购米哈游</h2>
                <p className="game-description">
                  一个关于资本运作与战略决策的模拟游戏。作为基金掌舵人，
                  你需要通过精妙的投资策略、时机把握和风险管理，完成对目标公司的收购！
                </p>

                <div className="game-features">
                  <div className="feature-item">
                    <span className="feature-icon">💰</span>
                    <span>资本运作</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">📊</span>
                    <span>策略决策</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">📰</span>
                    <span>舆论影响</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🎯</span>
                    <span>多重结局</span>
                  </div>
                </div>

                <div className="game-actions">
                  <button
                    onClick={handlePlayMihoyoGame}
                    className="play-button primary"
                  >
                    <span className="button-icon">🎮</span>
                    开始游戏
                    <div className="button-shine"></div>
                  </button>
                  <button
                    onClick={handlePlayMihoyoInNewTab}
                    className="play-button secondary"
                  >
                    <span className="button-icon">🔗</span>
                    新窗口打开
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="game-card" onMouseEnter={() => setIsHoveringChuxin(true)} onMouseLeave={() => setIsHoveringChuxin(false)}>
            <div className="game-preview">
              <div className="game-icon">
                <span className={`game-emoji ${isHoveringChuxin ? 'bounce' : ''}`}>💫</span>
                <div className="icon-glow"></div>
              </div>

              <div className="game-info">
                <div className="game-badge">🏆 原创作品</div>
                <h2 className="game-title">初心</h2>
                <p className="game-description">
                  一个探索内心与选择的互动叙事游戏。在天赋与期待之间，
                  你将经历12回合的人生旅程，最终发现你真正想要走向的方向。
                </p>

                <div className="game-features">
                  <div className="feature-item">
                    <span className="feature-icon">🎭</span>
                    <span>互动叙事</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">💭</span>
                    <span>深度问卷</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🎯</span>
                    <span>多重结局</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✨</span>
                    <span>内心探索</span>
                  </div>
                </div>

                <div className="game-actions">
                  <button
                    onClick={handlePlayChuxinGame}
                    className="play-button primary"
                  >
                    <span className="button-icon">🎮</span>
                    开始游戏
                    <div className="button-shine"></div>
                  </button>
                  <button
                    onClick={handlePlayChuxinInNewTab}
                    className="play-button secondary"
                  >
                    <span className="button-icon">🔗</span>
                    新窗口打开
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="game-card" onMouseEnter={() => setIsHoveringDahunye(true)} onMouseLeave={() => setIsHoveringDahunye(false)}>
            <div className="game-preview">
              <div className="game-icon">
                <span className={`game-emoji ${isHoveringDahunye ? 'bounce' : ''}`}>👑</span>
                <div className="icon-glow"></div>
              </div>

              <div className="game-info">
                <div className="game-badge">🆕 修史馆系列 · 纸上秦</div>
                <h2 className="game-title">大婚之夜</h2>
                <p className="game-description">
                  【嬴政×你】纸上秦章节的互动改编demo。大婚当夜，
                  他问你怕不怕、问你喜不喜欢这份礼物——你的每一个选择，他都会记住。
                </p>

                <div className="game-features">
                  <div className="feature-item">
                    <span className="feature-icon">📖</span>
                    <span>原著改编</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🔀</span>
                    <span>分支选择</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🎯</span>
                    <span>3种结局</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">💭</span>
                    <span>专一被记得</span>
                  </div>
                </div>

                <div className="game-actions">
                  <button
                    onClick={handlePlayDahunyeGame}
                    className="play-button primary"
                  >
                    <span className="button-icon">🎮</span>
                    开始游戏
                    <div className="button-shine"></div>
                  </button>
                  <button
                    onClick={handlePlayDahunyeInNewTab}
                    className="play-button secondary"
                  >
                    <span className="button-icon">🔗</span>
                    新窗口打开
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 游戏特色和操作指南部分已隐藏 */}
        {/* <div className="game-details-section">
          <div className="details-grid">
            <div className="detail-card">
              <div className="card-header">
                <h3>🎯 游戏特色</h3>
                <div className="header-accent"></div>
              </div>
              <div className="feature-list">
                <div className="feature-row">
                  <span className="feature-emoji">🍉</span>
                  <span>五种独特西瓜类型（普通、金色、甜味、迷你、巨型）</span>
                </div>
                <div className="feature-row">
                  <span className="feature-emoji">⚖️</span>
                  <span>创新的饥饿度与血糖反比关系机制</span>
                </div>
                <div className="feature-row">
                  <span className="feature-emoji">🎨</span>
                  <span>精美的粒子特效和流畅动画</span>
                </div>
                <div className="feature-row">
                  <span className="feature-emoji">🏆</span>
                  <span>连击系统和成就评级机制</span>
                </div>
                <div className="feature-row">
                  <span className="feature-emoji">📱</span>
                  <span>完美适配移动端触屏操作</span>
                </div>
              </div>
            </div>

            <div className="detail-card">
              <div className="card-header">
                <h3>🕹️ 操作指南</h3>
                <div className="header-accent"></div>
              </div>
              <div className="control-list">
                <div className="control-item">
                  <div className="control-icon">🖱️</div>
                  <div className="control-text">
                    <strong>鼠标操作</strong>
                    <span>滑动鼠标进行精准切割</span>
                  </div>
                </div>
                <div className="control-item">
                  <div className="control-icon">📱</div>
                  <div className="control-text">
                    <strong>触屏操作</strong>
                    <span>手指滑动，直观自然</span>
                  </div>
                </div>
                <div className="control-item">
                  <div className="control-icon">⏸️</div>
                  <div className="control-text">
                    <strong>暂停功能</strong>
                    <span>空格键随时暂停/继续</span>
                  </div>
                </div>
                <div className="control-item">
                  <div className="control-icon">🔄</div>
                  <div className="control-text">
                    <strong>重新开始</strong>
                    <span>游戏结束后一键重启</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </main>
      
      <style>{`
        .games-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fdfc 0%, #e8f5f3 100%);
          position: relative;
          overflow-x: hidden;
        }

        .bg-decoration {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, #bfd9d7, #e0f0ee);
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 120px;
          height: 120px;
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 80px;
          height: 80px;
          top: 60%;
          left: 5%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          right: 15%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .page-header {
          text-align: center;
          padding: 60px 20px 40px;
          position: relative;
          z-index: 2;
        }

        .header-content h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          background: linear-gradient(135deg, #2d5a56 0%, #bfd9d7 50%, #4a8a84 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 15px;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .subtitle {
          font-size: 1.3rem;
          color: #5a7a75;
          margin-bottom: 20px;
          font-weight: 300;
        }

        .header-line {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #bfd9d7, #94c5c1);
          margin: 0 auto;
          border-radius: 2px;
        }

        .games-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .games-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 40px;
          margin-bottom: 60px;
        }

        .game-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 24px;
          padding: 30px;
          box-shadow:
            0 10px 40px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(191, 217, 215, 0.2);
        }

        .game-card:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(191, 217, 215, 0.3);
        }

        .game-preview {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
          text-align: center;
        }

        .game-icon {
          position: relative;
          min-width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .game-emoji {
          font-size: 5rem;
          transition: transform 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .game-emoji.bounce {
          animation: bounce 0.6s ease;
        }

        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .icon-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, rgba(191, 217, 215, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .game-card:hover .icon-glow {
          opacity: 1;
        }

        .game-info {
          width: 100%;
        }

        .game-badge {
          display: inline-block;
          background: linear-gradient(135deg, #bfd9d7, #94c5c1);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .game-title {
          font-size: 2rem;
          color: #2d5a56;
          margin-bottom: 15px;
          font-weight: 700;
          line-height: 1.2;
        }

        .game-description {
          font-size: 1rem;
          color: #6b7d79;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .game-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 25px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: rgba(191, 217, 215, 0.1);
          border-radius: 12px;
          border: 1px solid rgba(191, 217, 215, 0.2);
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background: rgba(191, 217, 215, 0.2);
          transform: translateY(-2px);
        }

        .feature-icon {
          font-size: 1.3rem;
        }

        .game-actions {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .play-button {
          position: relative;
          padding: 16px 32px;
          border: none;
          border-radius: 16px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          gap: 10px;
          overflow: hidden;
          min-width: 160px;
          justify-content: center;
        }

        .play-button.primary {
          background: linear-gradient(135deg, #bfd9d7 0%, #94c5c1 100%);
          color: white;
          box-shadow: 0 8px 25px rgba(191, 217, 215, 0.4);
        }

        .play-button.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(191, 217, 215, 0.6);
        }

        .play-button.secondary {
          background: transparent;
          color: #bfd9d7;
          border: 2px solid #bfd9d7;
        }

        .play-button.secondary:hover {
          background: #bfd9d7;
          color: white;
          transform: translateY(-3px);
        }

        .button-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .play-button.primary:hover .button-shine {
          left: 100%;
        }

        .game-details-section {
          margin-bottom: 60px;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .detail-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(191, 217, 215, 0.15);
          transition: transform 0.3s ease;
        }

        .detail-card:hover {
          transform: translateY(-5px);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }

        .card-header h3 {
          color: #2d5a56;
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0;
        }

        .header-accent {
          flex: 1;
          height: 3px;
          background: linear-gradient(90deg, #bfd9d7, transparent);
          border-radius: 2px;
        }

        .feature-list, .control-list {
          space-y: 15px;
        }

        .feature-row {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px 0;
          color: #5a7a75;
          line-height: 1.6;
        }

        .feature-emoji {
          font-size: 1.3rem;
          min-width: 30px;
        }

        .control-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 15px 0;
          border-bottom: 1px solid rgba(191, 217, 215, 0.1);
        }

        .control-item:last-child {
          border-bottom: none;
        }

        .control-icon {
          font-size: 1.5rem;
          min-width: 40px;
          text-align: center;
        }

        .control-text {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .control-text strong {
          color: #2d5a56;
          font-weight: 600;
        }

        .control-text span {
          color: #6b7d79;
          font-size: 0.95rem;
        }

        .coming-soon-section {
          text-align: center;
          margin-bottom: 40px;
        }

        .coming-soon-card {
          background: linear-gradient(135deg, rgba(191, 217, 215, 0.1), rgba(191, 217, 215, 0.05));
          border: 2px dashed rgba(191, 217, 215, 0.3);
          border-radius: 20px;
          padding: 40px;
          transition: all 0.3s ease;
        }

        .coming-soon-card:hover {
          border-color: rgba(191, 217, 215, 0.5);
          background: linear-gradient(135deg, rgba(191, 217, 215, 0.15), rgba(191, 217, 215, 0.08));
        }

        .coming-soon-card h3 {
          color: #2d5a56;
          font-size: 1.8rem;
          margin-bottom: 15px;
        }

        .coming-soon-card p {
          color: #6b7d79;
          font-size: 1.1rem;
          margin-bottom: 25px;
        }

        .progress-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(191, 217, 215, 0.3);
          transition: background 0.3s ease;
        }

        .dot.active {
          background: #bfd9d7;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* 响应式设计 */
        @media (max-width: 1024px) {
          .games-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .details-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .page-header {
            padding: 40px 20px 30px;
          }

          .games-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .game-card {
            padding: 25px;
          }

          .game-icon {
            min-width: auto;
            height: 100px;
          }

          .game-emoji {
            font-size: 4rem;
          }

          .game-title {
            font-size: 1.8rem;
          }

          .game-features {
            grid-template-columns: 1fr;
          }

          .game-actions {
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }

          .play-button {
            width: 100%;
            max-width: 280px;
          }

          .details-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .detail-card {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .games-content {
            padding: 0 15px;
          }

          .game-card {
            padding: 20px;
          }

          .game-emoji {
            font-size: 3.5rem;
          }

          .game-title {
            font-size: 1.6rem;
          }

          .game-description {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Games;