import React from 'react';
import { Flex, Box } from 'rebass';
import { Textarea } from '../FormInput'
import Slider from '../Slider';
import Select from '../Select';
import ColorPicker from '../ColorPicker';
import DirectionalInput from '../DirectionalInput';
import Field from './Field';
import { DQ_FONTS } from '../../core/utils/text-utils';
import Checkbox from '../Checkbox';

const FONT_FAMILIES = Object.keys(DQ_FONTS).sort()

function TextElementPanel({element}) {
  const template = element._computed.template;

  const item = {
    color: 'rgba(255,0,0,.5)',
    palette: ['#000', 'rgba(255,255,200,.5)', '#aaaeaa'],
    bleed: {l: 0, r: 0, t: 0, b: 0},
  };
  const font = element.font;

  // TODO: Add translateXY for minor adjustments.

  return (
    <Box>
      <Field 
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
      </Field>

      <Field 
        label="Font"
        onExploreClick={() => null}
      >
        <Select
          bg="dark"
          color="white"
          value={font.family}
          options={FONT_FAMILIES}
        />
      </Field>

      <Field 
        label="Color"
        onExploreClick={() => null}
      >
        <ColorPicker
          onChangeComplete={color => console.log(color)}
          color={element.color.color}
          palette={template._palette || []}
          width={226}
        />
      </Field>

      <Field 
        label="Background"
        onExploreClick={() => null}
      >
        
      </Field>

      <Field 
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
          max={element.type === 'dominant' ? 1 : 2}
          showValue={true}
        />
      </Field>

      <Field 
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
      </Field>

      <Field 
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
      </Field>

      <Field 
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
      </Field>

      <Field 
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
      </Field>

      <Field 
        label="Line Height"
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
        <Flex mt="2px" justifyContent="center">
          <Box mr={2}>
            <Checkbox 
              label="Ignore Ascenders"
              onClick={() => null}
              checked={true}
            />
          </Box>
          <Box>
            <Checkbox 
              label="Ignore Descenders"
              onClick={() => null}
              checked={true}
            />
          </Box>
        </Flex>

      </Field>

      <Field 
        label="Margin"
        onExploreClick={() => null}
      >
        <Slider
          name="mb"
          bg="dark"
          color="white"
          value={element.mb}
          step={.05}
          min={-.1}
          max={3}
          showValue={true}
        />
      </Field>

      <Field 
        label="Bleed"
        onExploreClick={() => null}
      >
        <DirectionalInput
          name="bleed"
          l={element.bleed.l}
          r={element.bleed.r}
          t={element.bleed.t}
          b={element.bleed.b}
          onChange={() => null}
        />
      </Field>

      <Field 
        label="Padding"
        onExploreClick={() => null}
      >
        <DirectionalInput
          name="padding"
          step={.1}
          l={element.pl}
          r={element.pr}
          t={element.pt}
          b={element.pb}
          onChange={() => null}
        />
      </Field>

      <Field 
        label="Type"
        onExploreClick={() => null}
      >
        <Select
          bg="dark"
          color="white"
          value={element.type}
          options={['Heading 1', 'Heading 2', 'Heading 3', 'Subheading', 'Paragraph']}
        />
      </Field>

    </Box>
  )
}

export default TextElementPanel;


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