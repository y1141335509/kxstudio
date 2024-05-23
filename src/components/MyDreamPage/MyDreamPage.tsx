import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Footer from '../Footer/Footer';  // Component for Footer




export default function MyDreamPage() {
  return (
    <Container maxWidth="lg">
      <Typography>
        My Dream: A World of Infinite Experiences
        I dream of creating a world where everyone can experience a diverse array of sensations and moments. In this world, the boundaries between the virtual and physical dissolve, leaving only the real emotions and genuine experiences that each encounter brings.
        Whether it's through a product, an experience, or a story, the medium is not important. What truly matters is the authenticity of the experience and the emotions it evokes. In this dream world, every interaction is crafted to be deeply felt and remembered, blending creativity and technology to enrich our lives with meaningful moments.
        The emotions are real, the sensations are genuine, and every encounter is designed to create unforgettable memories. This is a place where you can explore, discover, and immerse yourself in a world that feels truly alive.
        Welcome to my dream. Let’s explore the endless possibilities together.
      </Typography>
    </Container>
  );
}
