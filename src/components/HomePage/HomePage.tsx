import React from "react";
import Slider from "react-slick";
import { Grid, Box, Typography, TextField, Button, Paper, Container } from "@mui/material";
import "./HomePage.css";



function Subscription() {
  return (
    <Container sx={{ bgcolor: 'secondary.main', }}>
      <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', height: '100%', }}>
        <Grid item xs={12} md={6} sx={{
          display: 'flex',
          justifyContent: 'center', // Centers horizontally
          alignItems: 'center', // Centers vertically
          height: '100%',
        }}>
          <Box
            component="img"
            sx={{
              width: '90%',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '100%',
              borderRadius: 2, // Optionally add a border radius
            }}
            alt="Descriptive Alt Text"
            src="/images/homepage-pic1.png"
          />
        </Grid>

        <Grid item xs={12} md={6} component={Paper} elevation={0} sx={{ p: 2, bgcolor: 'secondary.main' }}>
          <Typography variant="h1" gutterBottom>
            欢迎来到 KXStudio
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            在这里，我们将带您以最酷的方式了解最前沿的动态。我们的宗旨是传递最前沿信息。让我们一起发掘每个角落的奇迹及妙用等等。
          </Typography>
          <Typography variant="h2" gutterBottom>
            立即订阅，共同探索!
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <TextField label="Enter your email" variant="outlined" sx={{ flexGrow: 1, mr: 1 }} />
            <Button variant="contained" color="primary">
              订阅
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}


function CarouselSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ width: '100%', py: 4, marginTop: '2em', '.slick-dots li button:before': { fontSize: '16px', color: 'black' }, '.slick-dots li.slick-active button:before': { color: 'primary.main' } }}>
      <Slider {...settings}>    {/* set up carousel configurations */}

        {/* First Carousel */}
        <div>
          <Paper
            sx={{
              padding: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              height: 424, // Adjust based on your content
            }}
          >
            <Box sx={{ marginLeft: '6em', marginRight: '3em', }}>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>在《与你的1001次初遇》中，玩家将扮演一位在网络世界中邂逅了一个来自远方的男主角的女性。男主角是一位深谙二次元文化、充满智慧且热情的年轻人，他的神秘魅力让你深深着迷。然而，他害羞且腼腆，加之两人之间的家庭背景和年龄差异，使得这段关系充满了挑战。游戏的目标是通过决策和互动，逐渐打开男主角的心扉，克服你们之间的差异，寻找一种共享的语言，最终在现实世界中见面。这是一款关于勇气、爱情和理解的游戏，它提供了一个情感丰富、深思熟虑的故事体验，让玩家在过程中找到共鸣，也可能学到一些新的事物。</Typography>
              <Typography variant="h5">与你的1001次初遇</Typography>
              <Typography>​​恋爱冒险游戏</Typography>
            </Box>
            <img src="/images/homepage-carousel-1.png" alt="Story 1" style={{ width: 375, height: 400, marginRight: '6em', }} />
          </Paper>
        </div>

        {/* Second Carousel */}
        <div>
          <Paper
            sx={{
              padding: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              height: 424, // Adjust based on your content
            }}
          >
            <Box sx={{ marginLeft: '6em', marginRight: '3em', }}>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>《最后的战役》是一款独特的乙女游戏，将玩家带入一个充满奇迹和挑战的幻想世界。游戏的主角是一位年轻的女性，她被命运选中，成为了世界的守护者。在她的冒险旅程中，她会遇到各种各样的角色，发展出深厚的友谊，并可能发现真爱。然而，随着一场终极的战役的临近，她必须做出决定，决定如何使用她的力量，以及她是否愿意为了爱而牺牲一切。《最后的战役》提供了一种深沉而引人入胜的游戏体验，鼓励玩家通爱来拯救世界。这是一场战斗，不仅仅是在战场上，也在我们的心中。</Typography>
              <Typography variant="h5">最后的战役</Typography>
              <Typography>女性向文字恋爱冒险游戏</Typography>
            </Box>
            <img src="/images/homepage-carousel-2.png" alt="Story 2" style={{ width: 375, height: 400, marginRight: '6em', }} />
          </Paper>
        </div>

        {/* Third Carousel */}
        <div>
          <Paper
            sx={{
              padding: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              height: 424, // Adjust based on your content
            }}
          >
            <Box sx={{ marginLeft: '6em', marginRight: '3em', }}>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>在古老的帝国，作为新登基的年轻女性国君，你被卷入了一场错综复杂的权力斗争和爱情漩涡中。帝国的前线节节败退，朝堂上下充斥着诡异的氛围，隐隐约约中，你感受到有人在暗中窥探，一场关于权力、恋爱和背叛的戏码正悄然上演。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>权谋斗争：你将要面对的不仅是战场上的敌人，更有朝堂之上的权臣和内鬼。你能否运筹帷幄，化解危机？</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>恋爱推理：在18位性格背景迥异的男子中，谁将成为你的真爱？谁又是背后的幕后黑手？你需要沉着冷静，一步步揭开真相。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>中国古风：游戏以精致的古风画面、唯美的音乐和深入人心的剧情，带你体验一段属于古代朝堂的恋爱故事。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>女性向设计：专为女性玩家设计，角色形象、剧情走向都细腻入微，让你身临其境地体验古代女性国君的风采。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>这是一款让人沉迷的恋爱推理游戏，你将扮演一位年轻的女性君主，通过智谋和感情，解开帝国的谜团，找到真正的爱人。在千载不忘的故事里，每一个决策都可能影响未来的走向。你，准备好迎接挑战了吗？</Typography>
              <Typography variant="h5">千载不忘</Typography>
              <Typography>权谋之间的恋爱推理游戏</Typography>
            </Box>
            <img src="/images/homepage-carousel-3.png" alt="Story 3" style={{ width: 375, height: 400, marginRight: '6em', }} />
          </Paper>
        </div>

        {/* Fourth Carousel */}
        <div>
          <Paper
            sx={{
              padding: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              height: 424, // Adjust based on your content
            }}
          >
            <Box sx={{ marginLeft: '6em', marginRight: '3em', }}>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>欢迎来到“创界之梦”，一个属于你的开放世界RPG游戏。在这里，每一块土地，每一座山岳，每一片星空，都由你定义，等待你探索和塑造。在这个自由无限的幻想世界里，你将扮演一位勇士、智者、探险家或者创造者，不再受限于现实与常规。无论你想成为一位无畏的英勇斗士，还是沉思的魔法大师，甚至是建设自己梦想之城的统治者，这里都可以实现。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>‍探索与冒险：遍布神秘的洞穴、壮丽的山川、幽深的森林等待你的踏足。你会遇到未知的生物，挖掘古老的秘密，解锁属于你的特色技能。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>‍建设与创造：使用丰富的资源和工具，在你的土地上建造城堡、村庄、艺术品甚至是完整的文明。设计属于你的世界，让它充满活力和色彩。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>‍战斗与挑战：在这片土地上，也潜藏着危险与敌人。你可以单独挑战，或者和朋友一同并肩作战。不断提升你的战斗技能，征服每一个敌人。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>‍社交与合作：你不是一个人在战斗，在这个开放的世界里，你可以邀请朋友一同探险，共同建设，甚至创建属于你们的国度。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>这里没有限制，没有界限，只有无限的可能。在“创界之梦”中，每一个选择、每一个决定，都可以塑造这个世界的未来。现在，就让我们一同踏入这个属于你的世界，开启一段属于我们的传奇，这个世界，由你定义。</Typography>
              <Typography variant="h5">创界之梦</Typography>
              <Typography>​​开放世界PRG</Typography>
            </Box>
            <img src="/images/homepage-carousel-4.png" alt="Story 4" style={{ width: 375, height: 400, marginRight: '6em', }} />
          </Paper>
        </div>

        {/* Fifth Carousel */}
        <div>
          <Paper
            sx={{
              padding: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              height: 424, // Adjust based on your content
            }}
          >
            <Box sx={{ marginLeft: '6em', marginRight: '3em', }}>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>打游戏，是为了追求高分吗？除了高分，没有其他的追求吗？在Food War中，每一次切割不仅仅是为了得分，更是一场关乎生死的挑战！</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>🍽️ 吃得太多，你就会“爆炸”！ 小心选择你的每一刀，掌握好每一次的食物摄入量，别让你的健康走向极限！</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>🥛 特色关卡：从简单的牛奶开始，体验独特的“tap and hold”消费机制，寓教于乐。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>📈 逐级挑战：随着游戏进程解锁新的食物和挑战，学习如何平衡各种营养，以保持身体健康和游戏得分的平衡。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>🥗 从垃圾食品到世界美食：随着版本更新，探索更多诱人的食物选择和更高的风险，学习健康饮食的重要性。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>下载 Food War，开启你的健康饮食之旅，挑战你的忍者切割技巧吧！在追求高分的同时，别忘了你的生命同样重要！</Typography>
              <Typography variant="h5">🌟 新游戏上线：Food War —— 营养忍者大战！ 🌟</Typography>
              <Typography>​冒险游戏</Typography>
            </Box>
            <img src="/images/homepage-carousel-5food war.png" alt="Story 4" style={{ width: 375, height: 400, marginRight: '6em', }} />
          </Paper>
        </div>

        {/* Sixth Carousel */}
        <div>
          <Paper
            sx={{
              padding: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              height: 424, // Adjust based on your content
            }}
          >
            <Box sx={{ marginLeft: '6em', marginRight: '3em', }}>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>在广阔王国的新征服土地上，权力的阴影和阴谋的寒气弥漫开来。《暗黑王座》带你进入这个中世纪哥特式的复杂世界，成为一名掌管命运的法官，你的每一个选择都将重塑整个王国的未来。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>深度决策制作： 每个选择都充满道德困境，从司法裁决到个人道德抉择，深刻影响故事走向和角色关系。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>‍建设与创造：使用丰富的资源和工具，在你的土地上建造城堡、村庄、艺术品甚至是完整的文明。设计属于你的世界，让它充满活力和色彩复杂的角色关系： 建立或破坏联盟，每一个决定都可能成为胜败的关键。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>策略战斗与潜行元素： 在宫廷斗争中，运用策略战斗技巧和政治手腕，巧妙应对敌对势力。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>角色成长系统： 发展你的外交、战斗和诡计能力，成为不可或缺的统治者。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>丰富的故事结局： 根据你的选择，故事可能走向复仇或宽恕，每种决定都有其独特的后果和终局。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>在《暗黑王座》中，执掌权杖，统御黑暗，决定一个国家的命运。会屈从于旧日的怨恨，还是为了更大的利益铸就新的联盟？在权谋的漩涡中，找到属于你的道路。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>加入我们，揭开权力的面纱，探索你的王座之路。</Typography>
              <Typography variant="h5">暗黑王座</Typography>
              <Typography>​​权力游戏，由你主宰</Typography>
            </Box>
            <img src="/images/homepage-carousel-6dark throne.png" alt="Story 4" style={{ width: 375, height: 400, marginRight: '6em', }} />
          </Paper>
        </div>

        {/* Seventh Carousel */}
        <div>
          <Paper
            sx={{
              padding: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              height: 424, // Adjust based on your content
            }}
          >
            <Box sx={{ marginLeft: '6em', marginRight: '3em', }}>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>揭开挑战，开启留学之旅："留学生大战移民局"</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>“留学生大战移民局”不仅仅是一款游戏，它是您作为国际学生在美国的缩影，体验从学生签证到绿卡的复杂过程。在这里，每一个选择都可能影响您的留学道路。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>真实模拟：亲身体验国际学生的生活，享受学习、管理时间、建立人际网络的乐趣和挑战。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>策略游戏玩法：每一个决策都至关重要。选择您的学习路径，合理分配资源，申请签证，展现您的策略智慧。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>动态结果：基于您的选择，游戏有多种结局。感受H1B抽签的刺激、求职面试的紧张以及获得绿卡的喜悦。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>教育性信息：深入了解美国的移民流程。对希望了解或经历美国留学生活的玩家来说，这是一款集趣味与信息于一体的游戏。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>引人入胜的视觉与音效：游戏采用了融合现实与卡通风格的视觉艺术风格，配以激励人心的音轨，完美呈现您的留学起伏。</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>您准备好迎接挑战了吗？</Typography>
              <Typography gutterBottom sx={{ fontSize: '14px', }}>加入“留学生大战移民局”，与成千上万的玩家一起开启追寻美国梦的征程。在游戏中，您将体验签证申请、求职搜索和文化适应的复杂性，同时在美国构建新生活。</Typography>
              <Typography variant="h5">留学生大战移民局</Typography>
              <Typography>​​文字冒险游戏</Typography>
            </Box>
            <img src="/images/homepage-carousel-7uscis.png" alt="Story 4" style={{ width: 375, height: 400, marginRight: '6em', }} />
          </Paper>
        </div>
      </Slider>
    </Box>
  );
}





export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Subscription />
      <CarouselSection />
    </Container>

  );
}
