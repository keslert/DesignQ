import React from 'react';
import HeartSvg from '../../svg/heart.svg';
import { Flex, Box, Text } from 'rebass';
import OpacityButton from '../OpacityButton';
import EyeSvg from '../../svg/eye2.svg';
import DownloadSvg from '../../svg/download.svg';


function Toolbar({
  iconSize=1,
  canFavorite=true,
  canCompare=true,
  canDownload=true,
  ...props
}) {

  return (
    <Flex width="100%" alignItems="center" mb="1px" px="1px">
      {/* <Flex flex={1}>
                  
      </Flex> */}

      <Text 
        fontSize={1} 
        color="gray" 
        children={props.label} 
        fontWeight="bold" 
      />
        
      <Flex flex={1} justifyContent="flex-end">
        {props.onFavoriteClick && 
          <OpacityButton 
            ml={2}
            title="Favorite"
            color={props.favorited ? 'red' : 'gray'}
            onClick={props.onFavoriteClick}
            children={<HeartSvg size={18 * iconSize} />}
          />
        }
        
        {props.onCompareDown && 
          <OpacityButton 
            ml={2}
            color='gray'
            title="Compare"
            onMouseDown={props.onCompareDown}
            onMouseUp={props.onCompareUp}
            onMouseLeave={props.onCompareUp}
            children={<EyeSvg size={18 * iconSize} />}
          />
        }

        {props.onDownloadClick && 
          <OpacityButton 
            ml={2}
            color='gray'
            title="Download"
            onClick={props.onDownloadClick}
            children={<DownloadSvg size={15 * iconSize} />}
          />
        }
      </Flex>
    </Flex>
  )
}

export default Toolbar;