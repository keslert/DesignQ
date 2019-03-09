import React from "react";
import { Flex, Box } from 'rebass';
import styled from 'styled-components';

const Image = styled(Box)`
  .credit {
    display: none;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 9px;
    padding: 4px;
    background: rgba(0,0,0,.5);
    text-align: right;
    color: #ffffff;
    a {
      color: currentColor;
      font-weight: bold;
      text-decoration: none;
    }
  }

  &:hover {
    outline: 2px solid ${props => props.theme.colors.blue};
    .credit {
      display: block;
    }
  }
  backgroundColor: ${props => props.theme.colors.nearwhite};
  cursor: pointer;
  overflow: hidden;
  position: relative;
`

const GalleryImage = ({
  index,
  onClick,
  photo,
  margin,
}) => {
  return (
    <Image
      style={{ margin, height: photo.height, width: photo.width }}
    >
      <img 
        onClick={e => onClick(e, { index, photo })}
        {...photo}
      />
      <Flex className="credit" flexWrap="wrap">
        <a 
          className="author"
          href={`https://unsplash.com/@${photo.user.username}`}
          target="_blank"
          children={photo.user.name}
        />
        <span>&nbsp;on&nbsp;</span>
        <a 
          className="author"
          href="https://unsplash.com"
          target="_blank"
          children="Unsplash"
        />
      </Flex>
      
    </Image>
  );
};

export default GalleryImage;
