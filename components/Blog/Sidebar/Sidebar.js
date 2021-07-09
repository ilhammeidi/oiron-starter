import React from 'react';
import Box from '@material-ui/core/Box';
import ProfileWidget from './ProfileWidget';
import SubscribeWidget from './SubscribeWidget';
import PostWidget from './PostWidget';
import CommentWidget from './CommentWidget';
import ListWidget from './ListWidget';
import GalleryWidget from './GalleryWidget';

function Sidebar() {
  return (
    <div>
      <SubscribeWidget />
      <Box py={3} />
      <ProfileWidget />
      <Box py={3} />
      <PostWidget />
      <Box py={3} />
      <CommentWidget />
      <Box py={3} />
      <ListWidget />
      <Box py={3} />
      <GalleryWidget />
    </div>
  );
}

export default Sidebar;
