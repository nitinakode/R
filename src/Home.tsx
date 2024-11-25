import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import ProfilePic from './1.png';

const Home: React.FC = () => {
  const handleResumeDownload = () => {
    window.open('/Pallavi_Eraga_Dindla.pdf', '_blank'); // Update with your actual resume path
  };

  return (
    <Box sx={{ mt: 4, p: 2 }}>
      {/* Home Section */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={7.5}>
          {/* Text Section */}
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="h5" sx={{ mt: 1, color: '#555' }}>
            I'm Pallavi Eraga Dindla, a Frontend Developer with a passion for creating dynamic and responsive web applications.
          </Typography>
          <Typography sx={{ mt: 1, color: '#777' }}>
            With expertise in React.js, JavaScript, and UI frameworks like Bootstrap and Material UI, I focus on building user-friendly, impactful web solutions.
            Explore my projects, including an eCommerce website, and let's connect!
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ mt: 2 }} 
            onClick={handleResumeDownload}
          >
            Download Resume
          </Button>
        </Grid>

        {/* Profile Picture Section */}
        <Grid item xs={4.5}  container justifyContent="flex-end">
          {/* Image with adjusted position */}
          <img 
            src={ProfilePic}
            alt="Programmer" 
            style={{
              height: '450px', 
              maxWidth: '320px', 
              borderRadius: '10px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              objectFit: 'cover',  // Ensures the image scales properly within the given dimensions
              marginLeft: '35px'  // Moves the image slightly to the right
            }} 
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
