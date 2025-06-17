#!/usr/bin/env node
/**
 * Godot Web游戏专用服务器
 * 自动设置所需的Cross Origin Isolation头信息
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.argv[2] || 8000;

// MIME类型映射
const mimeTypes = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript',
  '.wasm': 'application/wasm',
  '.pck': 'application/octet-stream',
  '.data': 'application/octet-stream',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.css': 'text/css',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(url.parse(req.url).pathname);
  const filePath = path.join(process.cwd(), pathname === '/' ? '/index.html' : pathname);
  const ext = path.extname(filePath).toLowerCase();
  
  // 🔑 关键：为所有请求设置Cross Origin Isolation头信息
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  
  // 为Godot游戏资源设置额外的头信息
  if (['.wasm', '.js', '.pck', '.data'].includes(ext)) {
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  // HTML文件不缓存，确保获取最新版本
  if (ext === '.html') {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
  
  // 设置正确的Content-Type
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  res.setHeader('Content-Type', contentType);
  
  // 检查文件是否存在
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      console.log(`❌ 404: ${pathname}`);
      return;
    }
    
    // 读取并发送文件
    const readStream = fs.createReadStream(filePath);
    
    readStream.on('error', (err) => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Internal Server Error');
      console.log(`❌ 500: ${pathname} - ${err.message}`);
    });
    
    res.writeHead(200);
    readStream.pipe(res);
    
    // 记录请求和头信息状态
    const isGameFile = ['.wasm', '.js', '.pck', '.data', '.html'].includes(ext);
    const status = isGameFile ? '✅ (COOP/COEP已设置)' : '📄';
    console.log(`${status} ${pathname}`);
  });
});

server.listen(PORT, () => {
  console.log('🚀 Godot Web游戏服务器启动成功!');
  console.log('');
  console.log(`📍 服务地址: http://localhost:${PORT}`);
  console.log(`📁 当前目录: ${process.cwd()}`);
  console.log(`🎮 游戏地址: http://localhost:${PORT}/games/watermelon/index.html`);
  console.log('');
  console.log('✅ Cross Origin Isolation 支持已启用:');
  console.log('   • Cross-Origin-Embedder-Policy: require-corp');
  console.log('   • Cross-Origin-Opener-Policy: same-origin');
  console.log('   • Cross-Origin-Resource-Policy: cross-origin');
  console.log('');
  console.log('💡 如果游戏仍然出错，请检查Godot导出设置中的Thread Support');
  console.log('   必须确保Thread Support完全关闭!');
  console.log('');
  console.log('按 Ctrl+C 停止服务器');
  console.log('=' * 60);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`❌ 端口 ${PORT} 已被占用，尝试其他端口:`);
    console.log(`   node start_server.js 8001`);
  } else {
    console.log(`❌ 服务器错误: ${err.message}`);
  }
});