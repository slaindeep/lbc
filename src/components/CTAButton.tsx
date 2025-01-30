import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  text: string;
  delay?: number;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      style={{ marginTop: '2rem', textAlign: 'center' }}
    >
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          borderRadius: 2,
          padding: '12px 32px',
          textTransform: 'none',
          fontSize: '1.1rem'
        }}
      >
        {text}
      </Button>
    </motion.div>
  );
};

export default CTAButton;