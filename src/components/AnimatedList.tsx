import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

interface AnimatedListProps {
  items: string[];
}

export const AnimatedList: React.FC<AnimatedListProps> = ({ items }) => {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem
          key={index}
          component={motion.div}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 * index, duration: 0.5 }}
        >
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
};