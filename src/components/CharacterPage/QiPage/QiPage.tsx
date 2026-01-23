import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Qi = () => {
  // Assume these are the images for the carousel dots
  const dotImages = [
    '/images/qi-page/qi01.png',
    '/images/qi-page/qi02.png',
    '/images/qi-page/qi03.png',
    '/images/qi-page/qi04.png',
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
      <img src={dotImages[i]} alt={`dot ${i + 1}`} style={{ width: 50, height: 50 }} />
    ),
    dotsClass: 'slick-dots custom-dots'
  };

  // 完整文本内容
  const fullText = `车轮声嘎嘎作响,一城接着一城地过去。这一路少说也要二三十日,走到如今,已记不清是哪一天了。好在暑气已退,不至于太难熬。

窗外又落起雨。不知当年父亲来秦时,是否也是坐着这样的车;后来回楚,是否也下着这样的雨。

女眷的车在后头。我不知她们坐得稳不稳。秦地长大的那个,名叫孟若,自幼未曾远行;楚地来的,叫小涟,身子一向弱些。此刻,她俩大约也只是隔着车窗望着外头出神,如笼中之鸟。想来,不止此刻,也不止她俩。

小时候,我曾问过华阳夫人,为何父亲要回楚,而我却要留在秦。她告诉我,我留在秦,是为了楚;若我回楚,会死许多人。那一年我九岁,与嬴政回秦时一般年纪。那时我便记得,我要留在秦国。

这一留,便是四十年。

在秦国的这些年里,秦地的话说得愈发顺口。太后去世后,便再无人提起楚语。就连小涟,与我说话时,也只用秦音。我明白她的心思,无非是怕旁人听去,惹来是非,反倒连累我。

渐渐地,有些词,我也记不得该如何说了。

有时我也觉得自己可笑。身为秦国相国,又出自楚国王族,却连私下说哪国话都要留神。可笑的不仅是我,越靠近王宫,便越是如此,连王本人也不例外。我知道,他最早熟悉的话也并非秦音。

我常觉自己与嬴政颇为相似。

我们都曾在别国为质,年幼时便与父亲断了来往,都夹在父国与母国之间,也都各自有一个处境尴尬的母亲。他的父亲是太子,我的也是。不同之处在于,他早早被接回秦国,也早早坐上了王位。而我,一直留在秦国,这个我也不知道该如何自处的地方。

一时之间,我也说不清自己对秦国究竟是何心思。此地生我养我,也让我得以施展所学,看清治国之术与人心向背,于情于理,我都该感念。

只是如今,秦王一心要并吞六国,旧有的礼法早已顾不得了。他真以为延续百年的分裂,能由一人终结?纵使一时合并,又能如何?终究还是分合往复,不如彼此牵制,各守其势。

这些话,我从未与他说过。

四十年,足够一个人学会收敛锋芒,小心行事。也正是这四十年,我眼看着他从当初滔滔不绝的少年,变成如今多疑敏感的君王。为了他口中的大业,他当真安心吗?越靠近王宫,便越没有自在之处,这一点,连王自己也逃不开。安心于王,是奢念。

咸阳宫也早已变了。

从前还能听见秦、赵、楚诸音杂陈,如今却只剩下一种声调。那地方,昔日尚有几分生气,像个戏园,如今却静得叫人惊心,像座大狱。

雨势渐急,敲在车篷上,一声接着一声。我忽然想起二十年前的那个雨夜,那日我去见嬴政,暗中商议吕不韦之事,耳边也是这样的雨声。

后来,吕不韦倒了。那时我以为,自己终于松了口气。吕相在位时,我总觉得背后有目光相随,是赵国的目光。可等他身死,那道目光却并未消失,只是换成了秦国的。

即便拜相,手中权柄更重,也未多得半分自在。反倒随着嬴政一步步走到今日,连"自在"二字,都像模糊记忆中遥远的事。

这些年,粮秣未断,军伍未乱。咸阳宫中,每日照旧人来人往。至少在我执掌之时,诸事尚能运转。

我所做的一切,并不全是为秦,而是始终记着她当年说过的话——我留在秦,是为了楚。只要楚人在秦尚有立足之地,秦国便不会立刻对楚下死手。

可她终究不在了。

而如今的嬴政,便是她尚在人世,怕也未必还能听得进去。

如此想来,我确实有些后悔当年为李斯说过话。他生于楚,却早已不像楚人,反倒更像秦地养出来的那一类人。起初我以为他不过是随势而行,可若一个人能将自己磨到骨子里都认同了那一套,那便再不是装出来的了。

韩非死时,嬴政说他死于楚人之手,指的便是李斯。可在我看来,李斯早已不再算是楚人,韩非终究还是死在秦人的手里。如此一想,我心里反倒松了些。否则,一个出自楚地的人,助着秦人灭楚,实在叫人难以承受。楚国,从来没有这样的人。

李斯不过是个有才之人,只是心思尽在名位之上。于他而言,利重于义。

车轮碾过泥水,溅起一片浑浊。我想起上次被马蹄溅了一身泥的王翦。

他是个难得的老将。明明身在军中,却格外惜命,见过太多生死,反倒懂得收手。也正因如此,他才能活到今日。

他与嬴政谈事,从不谈情,只算得失。能用钱解决的,绝不动刀兵;能多要些封赏,也绝不推辞。而我,正是那个替他调度钱粮的人。说起来,他还欠我一壶酒,我还欠他一桌席。

这些年下来,真正看得清局势的,他算一个。

他与嬴政一道,把"明君贤臣"的戏演得滴水不漏,也让世人都明白,他并无别念。雨歇了。推窗一看,泥土的气味扑面而来,林间已有鸟鸣。想来女眷的车中,也能稍稍解闷。

我轻轻吹了一声口哨,声音出口的那一刻,我自己也有些紧张,又有些自在。偷偷观察四下,无人理会,大约是鸟鸣盖过了声响,可我却再不敢吹第二声。

赶车的人回头说,郢陈已近。

我在想,那里的百姓,如今说的,是秦音,还是楚语。

想来已无太大分别。楚国,终究是保不住了。

可纵然保不住,也还是要保。毕竟,我是楚考烈王的儿子。

不知早已作古的父亲,是否还记得有我这样一个儿子。

也罢,反正,我就能当面去问问他了。

还有王翦,我也会提醒他。他还欠我一壶酒。

想来,用不了多久,总要再见一面。`;

  return (
    <Container maxWidth="lg" sx={{ mb: 18 }}>     {/* mb: 18 -> 调节footer与carousel的上下间距 */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: 2, height: 500, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h4" gutterBottom>启</Typography>
            <Box
              sx={{
                flex: 1,
                overflowY: 'auto',
                pr: 1,
                '&::-webkit-scrollbar': {
                  width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: '#f1f1f1',
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#4a8a84',
                  borderRadius: '10px',
                  '&:hover': {
                    backgroundColor: '#3a7a74',
                  }
                }
              }}
            >
              <Typography variant="body2" sx={{ whiteSpace: 'pre-line', lineHeight: 1.8 }}>
                {fullText}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: 2, height: 500, '.slick-slide img': { margin: '-0px 0px 30px' } }}>
            <Slider {...settings}>
              <div>
                <img src="/images/qi-page/qi01.png" alt="启 1" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div>
                <img src="/images/qi-page/qi02.png" alt="启 2" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div>
                <img src="/images/qi-page/qi03.png" alt="启 3" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div>
                <img src="/images/qi-page/qi04.png" alt="启 4" style={{ width: '100%', height: 'auto' }} />
              </div>
            </Slider>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Qi;
