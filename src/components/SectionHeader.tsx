import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  delay?: number;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, delay = 0 }) => {
  return (
    <Typography
      variant="h6"
      gutterBottom
      component={motion.div}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      sx={{
        color: 'primary.main',
        fontWeight: 'bold',
        marginTop: 3,
        marginBottom: 2
      }}
    >
      {title}
    </Typography>
  );
};