// .js file
const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const { email } = req.body;
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'KXStudio 订阅成功',
      text: '感谢订阅 KXStudio！'
    });

    res.status(200).json({ message: '订阅成功' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: '订阅失败' });
  }
};


// typescript
// import type { VercelRequest, VercelResponse } from '@vercel/node';
// import nodemailer from 'nodemailer';

// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   console.log('Starting handler...');
  
//   try {
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASSWORD
//       }
//     });

//     console.log('Email:', req.body.email);
    
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: req.body.email,
//       subject: 'KXStudio 订阅成功',
//       text: '感谢订阅 KXStudio！'
//     });

//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: error.message });
//   }
// }