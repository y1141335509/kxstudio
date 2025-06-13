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
import HomePage from './components/HomePage/HomePage'; // Your homepage component
import GamesPage from './components/GamesPage/GamesPage'; // Component for Games
import ResourcesPage from './components/ResourcesPage/ResourcesPage'; // Component for Resources
import AboutUsPage from './components/AboutUsPage/AboutUsPage'; // Component for About Us
import CharacterPage from './components/CharacterPage/CharacterPage'; // Component for Character Page
import SilverPage from './components/CharacterPage/SilverPage/SilverPage';  // component from Silver Page
import Games from './pages/Games'; // Component for Games

export default function App() {
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth={isXSmall ? 'xs' : isSmall ? 'sm' : 'lg'}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/games" element={<GamesPage />} /> */}
        <Route path="/games/" element={<Games />} />
        <Route path="/character-page" element={<CharacterPage />} />
        <Route path="/character-page/silver" element={<SilverPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />

        {/* 新增游戏路由 */}
        <Route path="/games" element={<Games />} />
      </Routes>
      <Footer />
    </Container>
  );
}
