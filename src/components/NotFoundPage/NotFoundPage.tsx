import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function NotFoundPage() {
  return (
    <Box sx={{ textAlign: 'center', py: 10, px: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        这一页还没有故事
      </Typography>
      <Typography gutterBottom>你要找的网页不存在，或已被移走。</Typography>
      <Box lang="en" sx={{ mt: 3, color: 'text.secondary' }}>
        <Typography variant="h6" component="p">No story here yet.</Typography>
        <Typography>This page doesn't exist or has moved.</Typography>
      </Box>
      <Button variant="contained" component={RouterLink} to="/" sx={{ mt: 4, textTransform: 'none' }}>
        回首页 · Back to home
      </Button>
    </Box>
  );
}
