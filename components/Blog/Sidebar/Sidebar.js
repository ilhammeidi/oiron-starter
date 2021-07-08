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
      <Box py={6} />
      <ProfileWidget />
      <Box py={6} />
      <PostWidget />
      <Box py={6} />
      <CommentWidget />
      <Box py={6} />
      <ListWidget />
      <Box py={6} />
      <GalleryWidget />
    </div>
  );
}

export default Sidebar;
