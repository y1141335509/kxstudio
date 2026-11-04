import React, { useState } from "react";
import { Grid, Box, Typography, TextField, Button, Paper, Container } from "@mui/material";

import "./HomePage.css";
import shadows from "@mui/material/styles/shadows";


function Subscription() {
  const [email, setEmail] = useState(""); // 用于存储用户输入的邮箱
  const [message, setMessage] = useState(""); // 用于显示订阅结果消息

  // 订阅写进 Google 表单「KXStudio 订阅」，回复自动进 Google Sheet「KXStudio 订阅名单」
  const handleSubscribe = async () => {
    const contact = email.trim();
    if (!/@/.test(contact) && !/^\+?[\d\s-]{7,}$/.test(contact)) {
      setMessage("请输入有效的邮箱或手机号");
      return;
    }

    try {
      const body = new URLSearchParams({ "entry.579516729": contact });
      // Google 表单不允许跨域读取结果，no-cors 下只要请求发出去就算成功
      await fetch("https://docs.google.com/forms/d/e/1FAIpQLScgHdyV5TfxXRqYUURTgg8ynIXPsHvvVwGKkXi-onM_e32y5Q/formResponse", {
        method: "POST",
        mode: "no-cors",
        body,
      });
      setEmail("");
      setMessage("订阅成功");
    } catch (error) {
      setMessage("订阅失败，请稍后重试");
    }
  };

  return (
    <Container sx={{ bgcolor: 'secondary.main' }}>
      <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Box
            component="img"
            sx={{ width: '90%', height: 'auto', maxWidth: '100%', maxHeight: '100%', borderRadius: 2 }}
            alt="纸上秦"
            src="/images/character-page/纸上秦CG.png"
          />
        </Grid>

        <Grid item xs={12} md={6} component={Paper} elevation={0} sx={{ p: 2, bgcolor: 'secondary.main' }}>
          <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' }, lineHeight: 1.4 }}>
            或许他不认识你，<br />但我会让你们相遇。
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            走进一个故事，成为其中那个人——被看见、被记住，或者不得不做出选择。
          </Typography>
          <Button variant="contained" color="primary" size="large" fullWidth href="/games/dahunye/" sx={{ py: 1.5, fontSize: '1.1rem' }}>
            试玩「大婚之夜」→
          </Button>
          <Button variant="outlined" color="primary" fullWidth href="/character-page?work=%E7%BA%B8%E4%B8%8A%E7%A7%A6" sx={{ mt: 1 }}>
            先去见见他们 →
          </Button>
          <Typography variant="body2" sx={{ mt: 4, color: 'text.secondary' }}>
            还没准备好？留下邮箱或手机号，他来的时候，我会告诉你。
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <TextField
              label="邮箱或手机号"
              variant="outlined"
              size="small"
              sx={{ flexGrow: 1, mr: 1 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)} // 更新邮箱状态
            />
            <Button variant="text" color="primary" onClick={handleSubscribe}>
              订阅
            </Button>
          </Box>
          {message && <Typography sx={{ mt: 1, color: message.includes("成功") ? "green" : "red" }}>{message}</Typography>}
        </Grid>
      </Grid>
    </Container>
  );
}

// function Subscription() {
//   return (
//     <Container sx={{ bgcolor: 'secondary.main', }}>
//       <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', height: '100%', }}>
//         <Grid item xs={12} md={6} sx={{
//           display: 'flex',
//           justifyContent: 'center', // Centers horizontally
//           alignItems: 'center', // Centers vertically
//           height: '100%',
//         }}>
//           <Box
//             component="img"
//             sx={{
//               width: '90%',
//               height: 'auto',
//               maxWidth: '100%',
//               maxHeight: '100%',
//               borderRadius: 2, // Optionally add a border radius
//             }}
//             alt="Descriptive Alt Text"
//             src="/images/homepage/homepage-pic1.png"
//           />
//         </Grid>

//         <Grid item xs={12} md={6} component={Paper} elevation={0} sx={{ p: 2, bgcolor: 'secondary.main' }}>
//           <Typography variant="h1" gutterBottom>
//             欢迎来到 KXStudio
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 2 }}>
//             在这里，我们将带您以最酷的方式了解最前沿的动态。我们的宗旨是传递最前沿信息。让我们一起发掘每个角落的奇迹及妙用等等。
//           </Typography>
//           <Typography variant="h2" gutterBottom>
//             立即订阅，共同探索!
//           </Typography>
//           <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
//             <TextField label="Enter your email" variant="outlined" sx={{ flexGrow: 1, mr: 1 }} />
//             <Button variant="contained" color="primary">
//               订阅
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   )
// }


export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Subscription />
    </Container>

  );
}
