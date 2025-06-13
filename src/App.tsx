import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ResourcesPage from './components/ResourcesPage/ResourcesPage';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import CharacterPage from './components/CharacterPage/CharacterPage';
import SilverPage from './components/CharacterPage/SilverPage/SilverPage';
import Games from './pages/Games'; // 主要的游戏页面组件

export default function App() {
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth={isXSmall ? 'xs' : isSmall ? 'sm' : 'lg'}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/watermelon" element={<Games />} />
        <Route path="/character-page" element={<CharacterPage />} />
        <Route path="/character-page/silver" element={<SilverPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}