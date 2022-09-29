import React from "react";
import { styled } from "@mui/material/styles";

const Video = styled('video')(() => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  right: '0',
  bottom: '0',
  left: '0',
  top: '0',
  zIndex: '-1'
}))

export default function BackgroundVideo() {
  return (
    <Video loop autoPlay muted id="bg-video" sx={{ 'object-fit': 'cover' }}>
      <source src="/images/fishbg.mp4" type="video/mp4" />F
    </Video>
  );
}
