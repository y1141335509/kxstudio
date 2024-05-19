import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Container, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5em', }}>
      <Typography variant="body2" color="text.secondary" align="left">
        {'© '}        
        {new Date().getFullYear()} 
        {' '}
        <Link color="inherit" href="https://www.kxstudio.org/">
          KXStudio
        </Link>
        {'. All rights reserved. '}
      </Typography>

      <div>
        <IconButton aria-label="twitter" color="inherit" href="https://www.twitter.com/">
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="instagram" color="inherit" href="https://www.instagram.com/">
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label="instagram" color="inherit" href="https://www.linkedin.com/">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="instagram" color="inherit" href="https://www.facebook.com/">
          <FacebookIcon />
        </IconButton>
      </div>
    </Container>
  );
}
