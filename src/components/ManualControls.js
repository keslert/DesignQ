import React from 'react';
import { Box, Flex, Text } from 'rebass';
import OpacityButton from './OpacityButton';
import { Textarea } from './FormInput'
import Slider from './Slider';
import Select from './Select';
import ColorPicker from './ColorPicker';
import DirectionalInput from './DirectionalInput';

function ManualControls(props) {



// Text Element Props
  // Bleed
    // t
    // l
    // b
    // r
  // Padding (only shows if background or border)
    // t
    // l
    // b
    // r
  
  // Background
    // - Color
    // - Image
    // Blend Mode
    // Filters
  // Border
    // r
    // l
    // t
    // b
    // rOffset
    // lOffset
    // bOffset
    // tOffset
  
  const item = {
    color: 'rgba(255,0,0,.5)',
    palette: ['#000', 'rgba(255,255,200,.5)', '#aaaeaa'],
    bleed: {l: 0, r: 0, t: 0, b: 0},
  }; // props.selection;
  const font = item.font || {
    family: 'Open Sans',
    size: 1,
    weight: 400,
    style: 'normal',
    lineHeight: 1.4,
    letterSpacing: 0.05,
    transform: 'uppercase',
  };

  return (
    <Box>
      <ControlField 
        label="Text"
        onExploreClick={() => null}
      >
        <Textarea
          name="text"
          bg="dark"
          color="white"
          value={item._text}
          onChange={() => null}
        />
      </ControlField>

      <ControlField 
        label="Bleed"
        onExploreClick={() => null}
      >
        <DirectionalInput
          name="bleed"
          l={item.bleed.l}
          r={item.bleed.r}
          t={item.bleed.t}
          b={item.bleed.b}
          onChange={() => null}
        />
      </ControlField>

      <ControlField 
        label="Type"
        onExploreClick={() => null}
      >
        <Select
          bg="dark"
          color="white"
          value={item.type}
          options={['Heading 1', 'Heading 2', 'Heading 3', 'Subheading', 'Paragraph']}
        />
      </ControlField>


      <ControlField 
        label="Font"
        onExploreClick={() => null}
      >
        <Select
          bg="dark"
          color="white"
          value={font.family}
          options={['Open Sans', 'Saratoga']}
        />
      </ControlField>

      <ControlField 
        label="Color"
        onExploreClick={() => null}
      >
        <ColorPicker
          onChangeComplete={color => console.log(color)}
          color={item.color}
          palette={item.palette}
          width={226}
        />
      </ControlField>

      <ControlField 
        label="Background"
        onExploreClick={() => null}
      >
        
      </ControlField>

      <ControlField 
        label="Size"
        onExploreClick={() => null}
      >
        <Slider
          name="size"
          bg="dark"
          color="white"
          value={font.size}
          step={.1}
          min={0}
          max={2} // if dominant this is 1
          showValue={true}
        />
      </ControlField>

      <ControlField 
        label="Weight"
        onExploreClick={() => null}
      >
        <Select
          name="weight"
          bg="dark"
          color="white"
          value={font.weight}
          options={['Thin', 'Extra Light', 'Light', 'Regular', 'Medium', 'Semi Bold', 'Bold', 'Extra Bold', 'Heavy']}
        />
      </ControlField>

      <ControlField 
        label="Appearance"
        onExploreClick={() => null}
      >
        <Select
          name="transform"
          bg="dark"
          color="white"
          value={font.transform}
          options={["normal", "uppercase", "lowercase"]}
        />
      </ControlField>

      <ControlField 
        label="Style"
        onExploreClick={() => null}
      >
        <Select
          name="style"
          bg="dark"
          color="white"
          value={font.style}
          options={["normal", "italic"]}
        />
      </ControlField>

      <ControlField 
        label="Line Spacing"
        onExploreClick={() => null}
      >
        <Slider
          name="lineHeight"
          bg="dark"
          color="white"
          value={font.lineHeight}
          step={.1}
          min={1}
          max={2}
          showValue={true}
        />
      </ControlField>

      <ControlField 
        label="Letter Spacing"
        onExploreClick={() => null}
      >
        <Slider
          name="letterSpacing"
          bg="dark"
          color="white"
          value={font.letterSpacing}
          step={.05}
          min={-.1}
          max={3}
          showValue={true}
        />
      </ControlField>

      <ControlField 
        label="Margin"
        onExploreClick={() => null}
      >
        <Slider
          name="mb"
          bg="dark"
          color="white"
          value={item.mb}
          step={.05}
          min={-.1}
          max={3}
          showValue={true}
        />
      </ControlField>

    </Box>
  )
}

export default ManualControls;

function ControlField(props) {
  return (
    <Box mb={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={2}>
        <Text
          fontSize={2}
          fontWeight="700"
          color="white"
          children={props.label}
        />

        {props.onExploreClick &&
          <OpacityButton onClick={props.onExploreClick}>
            <Text
              fontSize={0}
              color="white"
              children="Explore"
            />
          </OpacityButton>
        }
      </Flex>
      {props.children}
    </Box>
  )
}