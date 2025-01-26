// // .js file
// const nodemailer = require('nodemailer');

// module.exports = async function handler(req, res) {
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

//     const { email } = req.body;

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'KXStudio 订阅成功',
//       text: '感谢订阅 KXStudio！'
//     });

//     res.status(200).json({ message: '订阅成功' });
//   } catch (err) {
//     console.error('Error:', err);
//     res.status(500).json({ message: '订阅失败' });
//   }
// };
const { MongoClient } = require('mongodb');
const nodemailer = require('nodemailer');

let cachedClient = null;

module.exports = async function handler(req, res) {
  try {
    // Connect to MongoDB
    if (!cachedClient) {
      cachedClient = new MongoClient(process.env.MONGODB_URI);
      await cachedClient.connect();
    }

    const { email } = req.body;

    // Save to MongoDB
    const db = cachedClient.db('kxstudio');
    const subscribers = db.collection('subscribers');
    await subscribers.insertOne({
      email,
      subscribedAt: new Date(),
      active: true
    });

    // Send email
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

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