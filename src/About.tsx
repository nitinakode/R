import React from 'react';
import { Typography, Box } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box >
      {/* About Section */}
      <Box sx={{ mt: 4 }}>
        
        <Typography variant="h4" gutterBottom>About Me</Typography>
      <Typography>
  I am a recent graduate and aspiring web developer with a strong foundation in frontend development. I am proficient in 
  React.js and passionate about building dynamic, responsive web applications. I have experience working on personal 
  projects such as a portfolio, an interactive quiz app, and an eCommerce website, where I developed features like 
  product listings, cart management, and checkout functionality.
</Typography>
<Typography sx={{ mt: 2 }}>
  I am eager to apply my skills in a professional setting, contribute to impactful web applications, and continuously 
  learn and grow as a developer. I am always excited to take on new challenges and improve my abilities.
</Typography>

      </Box>
    </Box>
    
  );
};

export default About;
