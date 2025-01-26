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

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error('Missing MONGODB_URI environment variable');
}

module.exports = async function handler(req, res) {
  console.log('Environment variables:', {
    MONGODB_URI: process.env.MONGODB_URI,
    EMAIL_USER: process.env.EMAIL_USER
  });

  if (!process.env.MONGODB_URI) {
    return res.status(500).json({ message: 'Database configuration missing' });
  }
  
  const client = new MongoClient(uri);

  try {
    // Connect to MongoDB
    await client.connect();
    const db = client.db('kxstudio');
    const subscribers = db.collection('subscribers');

    const { email } = req.body;

    // Save subscriber
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
  } finally {
    await client.close();
  }
};
