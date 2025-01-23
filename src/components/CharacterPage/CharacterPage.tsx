import React, { useState } from 'react';
import { Container, Box, Typography, Paper, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Block, Topic } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './CharacterPage.css';


interface SideNavProps {
  onSelectCountry: (country: string) => void;
}

interface CarouselSectionProps {
  selectedCountry: string;
}

interface Character {
  id: number;
  name: string;
  image: string;
  country: string;
  description: string;
}




// Mock data for countries and characters
const countries = ['与你的1001次初遇', '最后的战役', 'Others', ];
const characters = [
  {
    id: 1, name: 'Silver（银）', image: '/images/character-page/Silver.png', country: 'Others',
    description: <Typography>
      Silver的童年因一次与父亲的严重冲突而留下了深刻的心理阴影，他被砍去一根手指，这一事件深刻地影响了他对世界的看法。
      尽管外表看起来是阳光和单纯的，他的内心却裹着层层的暗黑伪装，这种矛盾成为了他一生的悲剧和动力。
    </Typography>,
    avatar: '/images/character-page/Silver-avatar.png'
  },
  {
    id: 2, name: '桃子小姐 (Miss Peach)', image: '/images/character-page/Miss Peach.png', country: 'Others',
    description: <Typography>桃子小姐在周围人看来总是格外聪明。尽管如此，她似乎从未参与过任何非凡或开创性的事情。
      然而，她真正的才能在于她能够在脑海中快速模拟并验证解决方案，这些解决方案往往是别人经过几百年验证的成果。
      这种独特的能力使她成为一个默默无闻的天才，她在幕后确保只有最有效和经过时间考验的解决方案被实施。</Typography>,
    avatar: '/images/character-page/Miss Peach-avatar.png'
  },
  {
    id: 3, name: '莱桑德 (Lysander)', image: '/images/character-page/Lysander.png', country: 'Others',
    description: <Typography>
      莱桑德小时候经常被同龄人欺负和孤立。作为一种特殊的惩罚，他被迫在月光下保持清醒，禁止寻求睡眠的安慰。
      这种不寻常的环境使他与夜晚元素产生了神秘的联系，赋予了他夜间增强的能力。随着年龄的增长，
      他意识到月光不仅抚慰了他的情感创伤，还增强了他的身体和魔法力量。</Typography>,
    avatar: '/images/character-page/Lysander-avatar.png'
  },
  {
    id: 4, name: '闇影 (Yàn Yǐng)', image: '/images/character-page/Yàn Yǐng.png', country: 'Others',
    description: <Typography>
      闇影原本是一名杀手训练中的精英，因其冷血无情，被视为完美的杀人机器。然而，在一次地震救援中，他目睹了无辜的痛苦与死亡，
      内心的人性开始觉醒，他的杀手本能受到了挑战。这种心理变化导致他的训练成绩开始下滑，最终未能通过最后的杀手考核，
      被迫转行成为一名刽子手。尽管职业变了，闇影的执行力依然强劲，每次执行死刑都异常冷静和精准。但每次行刑结束后，
      他都会在归途中丢弃斧头，对着夕阳长叹，表达着对自己命运的无奈和对所做之事的内疚。
    </Typography>,
    avatar: '/images/character-page/Yàn Yǐng-avatar.png'
  },
  {
    id: 5, name: '101公主', image: '/images/character-page/101公主.png', country: 'Others',
    description: <Typography>
      101公主出生在一个繁荣和和平的王国，她几乎没有遇到过太多的挫折。她的生活充满了各种乐趣和舒适，
      但她对生活中的不公平和不合理保持着敏感和批判的态度。她的最大梦想是能够不劳而获，享受生活中的一切美好。
    </Typography>,
    avatar: '/images/character-page/101公主-avatar.png'
  },
  {
    id: 6, name: '樱花姬', image: '/images/character-page/樱花姬.png', country: 'Others',
    description: <Typography>
      樱花姬是一个孤儿，从小因为她的粉色卷发而被欺负。她没有得到过真正的爱，年轻时深爱的男人最终抛弃了她，
      这让她对爱情产生了深深的不信任。之后，她投身于职场，成为一名事业成功的女性，但在感情上却成了一个玩世不恭的人。
      她表面上看似享受着轻浮的生活，实际上内心深处极度渴望被爱和接纳。直到遇见一个看似不会爱上的少年，她的生活开始有了新的转机，
      她尝试成为更好的自己，但过程中充满挣扎和失败，最终在少年的帮助下，她接受了感情无法强求的事实。在一次深刻的心灵觉醒后，
      她决定以一种唯美的方式结束自己的生命，化作樱花飘散。
    </Typography>,
    avatar: '/images/character-page/樱花姬-avatar.png'
  },
  {
    id: 7, name: '陆泽（Calvin Lu）', image: '/images/character-page/陆泽.png',
    country: 'Others', 
    description: <Typography>
      陆泽的少年时期因一次投资失败而被父亲严厉责罚，这段经历深深影响了他对自己价值的认知。他不得不亲手放弃对绘画的热爱，投身于一个充满算计与压力的商场世界。这一事件在他心中刻下了深深的烙印，使他对亲密关系和信任充满矛盾。
      尽管陆泽表面温润如玉，举止优雅，似乎是一个无可挑剔的绅士，但他内心深处却埋藏着一股压抑的孤独与脆弱。他的微笑是他的武器，亦是他的盔甲，而内心的不安与渴望则驱动着他不断追求成就与认可。
      这份温柔与冷酷的矛盾，使陆泽的故事既令人心动，也充满了悲剧色彩。他的情感世界如同一枚戒指——看似完美无瑕，却隐藏着一部分未知的力量。
    </Typography>, avatar: '/images/character-page/陆泽-avatar.png'
  },
  {
    id: 8, name: '盛泽', image: '/images/character-page/盛泽.png',
    country: 'Others', 
    description: <Typography>
      盛泽是一个外表冷酷、内心柔软的商业精英。他聪明理性，面对商场如履薄冰的局势，总能展现出强大的决策力。
      然而，在爱情面前，他却显得克制且犹豫，始终保持理智与距离。尽管如此，他的深情从未消退，
      偶尔流露出的温柔和浪漫，更是令他独具魅力。 <br />
      性格亮点：
        <li>表面冷漠，内心温暖</li>
        <li>极度自律，追求完美</li>
        <li>浪漫与克制并存</li>
      经典台词：“这不是我的婚戒，也可以是我们的婚戒。” 💍
    </Typography>, avatar: '/images/character-page/盛泽-avatar.png'
  },
  {
    id: 9, name: '韩星辰', image: '/images/character-page/韩星辰.png',
    country: '与你的1001次初遇', description: 
    <Typography>
    星座：摩羯座    <br />
    性格类型：INFJ  <br />
    性格特征：
    <li>内向且自卑：韩星辰是一个非常内向的人，常常感到自卑，尤其是在面对与自己背景或年龄有较大差异的人时。</li>
    <li>智慧与热情：尽管内向，韩星辰在熟悉的二次元文化领域表现出惊人的智慧和热情。</li>
    <li>神秘且腼腆：他的神秘魅力和腼腆的性格使他在网络世界中极具吸引力。</li>
    <li>情感表达独特：他喜欢通过字谜和隐喻来表达自己的情感，这种独特的沟通方式是他与他人建立联系的一种方式。</li>
    </Typography>, 
    avatar: '/images/character-page/韩星辰-avatar.png'
  },
  {
    id: 10, name: '韩星辰', image: '/images/character-page/韩星辰.png',
    country: '与你的1001次初遇', description: 
    <Typography>
    星座：摩羯座    <br />
    性格类型：INFJ  <br />
    性格特征：
    <li>内向且自卑：韩星辰是一个非常内向的人，常常感到自卑，尤其是在面对与自己背景或年龄有较大差异的人时。</li>
    <li>智慧与热情：尽管内向，韩星辰在熟悉的二次元文化领域表现出惊人的智慧和热情。</li>
    <li>神秘且腼腆：他的神秘魅力和腼腆的性格使他在网络世界中极具吸引力。</li>
    <li>情感表达独特：他喜欢通过字谜和隐喻来表达自己的情感，这种独特的沟通方式是他与他人建立联系的一种方式。</li>
    </Typography>, 
    avatar: '/images/character-page/韩星辰-avatar.png'
  },
  {
    id: 11, name: '白止', image: '/images/character-page/白止.png',
    country: '最后的战役', description: <Typography >``
      白止是一个单纯而忠诚的王子，与女主青梅竹马。尽管女主在旅途中喜欢过其他男主，白止始终是她最信任的人。
      白止的内向、单纯、聪明理性和善良让他在女主的生命中扮演了重要的角色。他拥有一双大眼睛和双眼皮，显得非常可爱。
      一路上，白止一直陪伴着女主，一起经历了各种挑战和冒险。无论是面对困境还是险境，白止总是毫不犹豫地出手相助，
      多次将女主从水深火热中解救出来。他的存在不仅为女主提供了安全感，也成为她坚定信念的重要支柱。
    </Typography>, avatar: '/images/character-page/白止-avatar.png'
  },
  {
    id: 12, name: '白止', image: '/images/character-page/白止.png',
    country: '最后的战役', description: <Typography>
      白止是一个单纯而忠诚的王子，与女主青梅竹马。尽管女主在旅途中喜欢过其他男主，白止始终是她最信任的人。
      白止的内向、单纯、聪明理性和善良让他在女主的生命中扮演了重要的角色。他拥有一双大眼睛和双眼皮，显得非常可爱。
      一路上，白止一直陪伴着女主，一起经历了各种挑战和冒险。无论是面对困境还是险境，白止总是毫不犹豫地出手相助，
      多次将女主从水深火热中解救出来。他的存在不仅为女主提供了安全感，也成为她坚定信念的重要支柱。
    </Typography>, avatar: '/images/character-page/白止-avatar.png'
  },
  // Add more characters as needed
];

function SideNav({ onSelectCountry }: SideNavProps) {
  return (
    <List>
      {countries.map((country) => (
        <ListItem key={country} disablePadding>
          <ListItemButton onClick={() => onSelectCountry(country)}>
            <ListItemText primary={country} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}


// Carousel Section
function CarouselSection({ selectedCountry }: CarouselSectionProps) {
  // Filter characters based on selected country and ensure uniqueness
  const filteredCharacters = Array.from(
    new Map(
      characters
        .filter((char) => char.country === selectedCountry)
        .map((char) => [char.id, char]) // Use `id` as a unique key
    ).values()
  );
  
  console.log('Filtered Characters:', filteredCharacters);

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    customPaging: (i: number) => {
      const char = filteredCharacters[i];
      if (char && char.avatar) {
        return (
          <img
            src={char.avatar}
            alt={char.name}
            style={{ width: 50, height: 50, margin: '-20px 10px' }}
          />
        );
      }
      return <div style={{ width: 50, height: 50, margin: '10px', backgroundColor: '#eee' }} />;
    },
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <Box sx={{ marginBottom: '70px', width: '100%', py: 4, marginTop: '2em' }}>
      <Slider {...settings}>
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((character, index) => (
            <div key={`${character.id}-${index}`}>
              <Paper
                sx={{
                  padding: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  height: 424,
                  boxShadow: 'none',
                }}
              >
                <Box sx={{ marginLeft: '6em', marginRight: '3em' }}>
                  <Typography variant="h5">{character.name}</Typography>
                  <Typography>{character.description}</Typography>
                  {character.name === 'Silver（银）' && (
                    <Link to="/character-page/silver" style={{ textDecoration: 'none' }}>
                      <Typography sx={{ mt: 2, color: 'blue' }}>走近他</Typography>
                    </Link>
                  )}
                </Box>
                <img src={character.image} alt={character.name} style={{ width: 375, height: 400 }} />
              </Paper>
            </div>
          ))
        ) : (
          <Typography>No characters found for this country.</Typography>
        )}
      </Slider>
    </Box>
  );
}

// function CarouselSection({ selectedCountry }: CarouselSectionProps) {
//   // 确保数据唯一
//   const filteredCharacters = Array.from(
//     new Map(
//       characters
//         .filter((char) => char.country === selectedCountry)
//         .map((char) => [char.id, char])
//     ).values()
//   );

//   filteredCharacters.forEach(character => console.log(character));

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 3000,
//     customPaging: (i: number) => {
//       const char = filteredCharacters[i];
//       if (char && char.avatar) {
//         return (
//           <img
//             src={char.avatar}
//             alt={char.name}
//             style={{ width: 50, height: 50, margin: '-20px 10px' }}
//           />
//         );
//       } else {
//         return <div style={{ width: 50, height: 50, margin: '10px', backgroundColor: '#eee' }} />;
//       }
//     },
//     dotsClass: 'slick-dots custom-dots',
//   };

//   return (
//     <Box
//       sx={{
//         marginBottom: '70px',
//         width: '100%',
//         py: 4,
//         marginTop: '2em',
//         '.slick-slider': { marginBottom: '20px' },
//         '.slick-dots': { paddingTop: '20px' },
//       }}
//     >
//       <Slider {...settings}>
//         {filteredCharacters.length > 0 ? (
//           filteredCharacters.map((character, index) => (
//             <div key={`${character.id}-${index}`}>
//               <Paper
//                 sx={{
//                   padding: 2,
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'space-around',
//                   height: 424,
//                   boxShadow: 'none',
//                 }}
//               >
//                 <Box sx={{ marginLeft: '6em', marginRight: '3em', boxShadow: 'none' }}>
//                   <Typography variant="h5">{character.name}</Typography>
//                   <Typography>{character.description}</Typography>
//                   {character.name === 'Silver（银）' && (
//                     <Link to="/character-page/silver" style={{ textDecoration: 'none' }}>
//                       <Typography sx={{ mt: 2, color: 'blue' }}>走近他</Typography>
//                     </Link>
//                   )}
//                 </Box>
//                 <img src={character.image} alt={character.name} style={{ width: 375, height: 400 }} />
//               </Paper>
//             </div>
//           ))
//         ) : (
//           <Typography>No characters found for this country.</Typography>
//         )}
//       </Slider>
//     </Box>
//   );
// }



function CharacterPage() {
  const [selectedCountry, setSelectedCountry] = useState<string>('与你的1001次初遇'); // Default selection


  return (
    <Container maxWidth="lg" sx={{ display: 'flex' }}>
      <Box sx={{ width: '20%', minWidth: '150px' }}>
        <SideNav onSelectCountry={setSelectedCountry} />
      </Box>
      <Box sx={{ width: '80%' }}>
        <CarouselSection selectedCountry={selectedCountry} />
      </Box>
    </Container>
  );
}


export default CharacterPage;
