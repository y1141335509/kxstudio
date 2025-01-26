import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 设置 CORS 头
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // 允许 localhost:3000
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS'); // 允许的 HTTP 方法
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // 允许的请求头

  // 处理预检请求（OPTIONS）
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  console.log("Received email:", email);

  // 配置邮件服务
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Subscription Successful',
    text: 'Thank you for subscribing to KXStudio!',
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}