import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Silver = () => {
  // Assume these are the images for the carousel dots
  const dotImages = [
    '/images/silver-page/silver-01.png',
    '/images/silver-page/silver-02.png',
    '/images/silver-page/silver-03.png',
    '/images/silver-page/silver-04.png',
    '/images/silver-page/silver-05.png',
  ];

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i: number) => (
      <img src={dotImages[i]} alt={`dot ${i + 1}`} style={{ width: 50, height: 50, }} />
    ),
    dotsClass: 'slick-dots custom-dots' // Ensure you have the proper CSS for this
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>Silver（银）</Typography>
            <Typography variant="body2" paragraph>
              星座：白羊座          <br />
              族群：卡布族小王子          <br />
              性格特征：          <br />
              本性单纯善良：Silver本质上是单纯和善良的，对世界保持一种天真的好奇。          <br />
              情绪化但感知能力弱：他情绪波动大，但对他人情绪的感知能力较弱，这使得他在人际交往中经常产生误解。          <br />
              沉默寡言：他不善于用言语表达自己的感受和想法，通常选择沉默，给人一种阴郁的印象。          <br />
              逗比的一面：在信任的人面前，Silver能够展示出他幽默和风趣的一面，这与他平时的沉默形成鲜明对比。          <br />
              小气与慷慨：Silver对自己非常小气，喜欢便宜和二手的东西，但对朋友和喜欢的人非常大方。          <br />
              爱好与偏好：          <br />
              喜欢便宜和二手的东西：Silver对奢侈品没有兴趣，更喜欢便宜和二手的物品，这反映了他简单的生活态度。          <br />
              最喜欢的地方：花生海是他最喜欢的地方，那里可能承载着他许多美好的回忆和梦想。          <br />
              身体特征：          <br />
              外观：Silver是一个具有正太外形的年轻角色，拥有银色的头发和大眼睛，表情中带有一种不易察觉的深沉。          <br />
              服装：通常穿着简约现代的服装，通常是深色调的，表面上看似普通，但细节中隐藏着一些暗黑元素，如暗纹或符号，象征着他内心的复杂和矛盾。          <br />
              能力和技能：          <br />
              正面技能（光明之盾）：Silver可以生成一个保护盾(花生盾)，为自己和周围的人提供保护，这象征着他的善良和保护欲。          <br />
              负面技能（暗影爆发）：在情绪达到极限时，Silver能够释放一股强大的暗影能量，这种能量具有高度的破坏力，但使用后会使他感到极度疲惫，甚至伤害到自己。          <br />
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* 30px below can change the margin between carousel and dots images */}
          <Box sx={{ padding: 2, height: 500, '.slick-slide img': { margin: '-0px 0px 30px' } }}> 
            <Slider {...settings}>
              {/* Slides with images for the character "Silver" */}
              <div>
                <img src="/images/silver-page/silver-01.png" alt="Silver 1" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div>
                <img src="/images/silver-page/silver-02.png" alt="Silver 2" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div>
                <img src="/images/silver-page/silver-03.png" alt="Silver 3" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div>
                <img src="/images/silver-page/silver-04.png" alt="Silver 4" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div>
                <img src="/images/silver-page/silver-05.png" alt="Silver 4" style={{ width: '100%', height: 'auto' }} />
              </div>
            </Slider>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Silver;



// import React from 'react';
// import { Container, Grid, Box, Typography, Paper } from '@mui/material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';




// const Silver = () => {
//   // Settings for the carousel
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <Container maxWidth="lg">
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <Box sx={{ padding: 2 }}>
//             <Typography variant="h4" gutterBottom>Silver（银）</Typography>
//             <Box sx={{ mt: 4, mb: 4 }}>
//               <Typography variant="body1" paragraph>
//                 星座：白羊座          <br />
//                 族群：卡布族小王子          <br />
//                 性格特征：          <br />
//                 本性单纯善良：Silver本质上是单纯和善良的，对世界保持一种天真的好奇。          <br />
//                 情绪化但感知能力弱：他情绪波动大，但对他人情绪的感知能力较弱，这使得他在人际交往中经常产生误解。          <br />
//                 沉默寡言：他不善于用言语表达自己的感受和想法，通常选择沉默，给人一种阴郁的印象。          <br />
//                 逗比的一面：在信任的人面前，Silver能够展示出他幽默和风趣的一面，这与他平时的沉默形成鲜明对比。          <br />
//                 小气与慷慨：Silver对自己非常小气，喜欢便宜和二手的东西，但对朋友和喜欢的人非常大方。          <br />
//                 爱好与偏好：          <br />
//                 喜欢便宜和二手的东西：Silver对奢侈品没有兴趣，更喜欢便宜和二手的物品，这反映了他简单的生活态度。          <br />
//                 最喜欢的地方：花生海是他最喜欢的地方，那里可能承载着他许多美好的回忆和梦想。          <br />
//                 身体特征：          <br />
//                 外观：Silver是一个具有正太外形的年轻角色，拥有银色的头发和大眼睛，表情中带有一种不易察觉的深沉。          <br />
//                 服装：通常穿着简约现代的服装，通常是深色调的，表面上看似普通，但细节中隐藏着一些暗黑元素，如暗纹或符号，象征着他内心的复杂和矛盾。          <br />
//                 能力和技能：          <br />
//                 正面技能（光明之盾）：Silver可以生成一个保护盾(花生盾)，为自己和周围的人提供保护，这象征着他的善良和保护欲。          <br />
//                 负面技能（暗影爆发）：在情绪达到极限时，Silver能够释放一股强大的暗影能量，这种能量具有高度的破坏力，但使用后会使他感到极度疲惫，甚至伤害到自己。          <br />
//               </Typography>
//             </Box>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Box sx={{ padding: 2, height: 500, '.slick-slide img': { margin: 'auto' } }}>
//             <Slider {...settings}>
//               {/* Add carousel slides here */}
//               <div>
//                 <img src="/images/silver-page/silver-01.png" alt="Silver 1" style={{ width: '100%', height: 'auto' }} />
//               </div>
//               <div>
//                 <img src="/images/silver-page/silver-02.png" alt="Silver 2" style={{ width: '100%', height: 'auto' }} />
//               </div>
//               <div>
//                 <img src="/images/silver-page/silver-03.png" alt="Silver 3" style={{ width: '100%', height: 'auto' }} />
//               </div>
//             </Slider>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Silver;

