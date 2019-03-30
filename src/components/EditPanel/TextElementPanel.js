import React, { useContext, useCallback } from 'react';
import { Flex, Box } from 'rebass';
import { Textarea } from '../FormInput'
import Slider from '../Slider';
import Select from '../Select';
import ColorPicker from '../ColorPicker';
import DirectionalInput from '../DirectionalInput';
import Field from './Field';
import { DQ_FONTS, WeightToText, TextToWeight } from '../../core/utils/text-utils';
import Checkbox from '../Checkbox';
import { DispatchContext } from '../../containers/Queue';

const FONT_FAMILIES = Object.keys(DQ_FONTS).sort()

function TextElementPanel({element}) {
  const rootDispatch = useContext(DispatchContext);
  const update = useCallback(update => {
    rootDispatch({type: 'UPDATE_SELECTED', update});
  }, [rootDispatch]);

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
          onChange={e => update({'font.family': e.target.value})}
        />
      </Field>

      <Field 
        label="Color"
        onExploreClick={() => null}
      >
        <ColorPicker
          onChangeComplete={color => {
            const hex = color.hex;
            const alpha = color.alpha;
            update({'color': {type: 'solid', color: hex}})
          }}
          color={element.color.color}
          palette={Object.values(element._root.palette)}
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
        // onExploreClick={() => null}
      >
        <Slider
          name="size"
          bg="dark"
          color="white"
          value={font.size}
          step={.05}
          min={0}
          max={element.type === 'dominant' ? 1 : 2}
          showValue={true}
          onChange={e => {
            const value = e.target.value;
            update({'font.size': e.target.value});
          }}
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
          value={WeightToText[font.weight]}
          options={['Thin', 'Extra Light', 'Light', 'Regular', 'Medium', 'Semi Bold', 'Bold', 'Extra Bold', 'Heavy']}
          onChange={e => update({'font.weight': TextToWeight[e.target.value]})}
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
          onChange={e => update({'font.transform': e.target.value})}
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
          onChange={e => update({'font.style': e.target.value})}
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
          step={.025}
          min={-.1}
          max={.4}
          showValue={true}
          onChange={e => update({'font.letterSpacing': e.target.value})}
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
          min={.8}
          max={2}
          showValue={true}
          onChange={e => update({'font.lineHeight': e.target.value})}
        />
        <Flex mt="2px" justifyContent="center">
          <Box mr={2}>
            <Checkbox 
              label="Ignore Ascenders"
              checked={!!font.ignoreAscenders}
              onChange={e => update({'font.ignoreAscenders': e.target.checked})}
            />
          </Box>
          <Box>
            <Checkbox 
              label="Ignore Descenders"
              checked={!!font.ignoreDescenders}
              onChange={e => update({'font.ignoreDescenders': e.target.checked})}
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
          onChange={e => update({'mb': e.target.value})}
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
          tDisabled={true}
          b={element.bleed.b}
          bDisabled={true}
          onChange={values => update({'bleed': values})}
        />
      </Field>

      {element.background && 
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
            onChange={values => update({
              'pl': values.l,
              'pr': values.r,
              'pt': values.t,
              'pb': values.b,
            })}
          />
        </Field>
      }

      {false && (
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
      )}

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