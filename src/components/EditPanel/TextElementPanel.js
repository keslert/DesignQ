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
import BackgroundPanel from './BackgroundPanel';
import { canControlWidth, WidthToText, TextToWidth } from '../../core/utils/template-utils';

const FONT_FAMILIES = Object.keys(DQ_FONTS).sort()

function TextElementPanel({element}) {
  const rootDispatch = useContext(DispatchContext);
  const update = useCallback(update => {
    rootDispatch({type: 'UPDATE_SELECTED', update});
  }, []);

  // TODO: Add translateXY for minor adjustments.
  // TODO: Add divider color.

  const uniqKey = element._root.id + element._parent._key + element._key

  return (
    <Box>
      <Field 
        label="Text"
        onExploreClick={() => null}
      >
        <Textarea
          key={uniqKey}
          name="text"
          bg="dark"
          color="white"
          defaultValue={element._text}
          rows={4}
          onChange={e => {
            // TODO: What to do about empty lines?
            // TODO: Estimate each line and list type.
            const type = Array.isArray(element.lines[0]) ? element.lines[0][0].type : element.lines[0].type;
            const lines = e.target.value.split('\n').map(line => {
              const items = line.split('|');
              if(items.length > 1) {
                return items.map(item => ({type, text: item.trim()}));
              }
              return {type, text: line.trim()}
            })
            update({'lines': lines});
          }}
          style={textareaStyle}
        />
      </Field>

      <Field 
        label="Font"
        onExploreClick={() => null}
      >
        <Select
          bg="dark"
          color="white"
          value={element.font.family}
          options={FONT_FAMILIES}
          onChange={e => update({'font.family': e.target.value})}
        />
      </Field>

      <Field 
        label="Color"
        onExploreClick={() => null}
      >
        <ColorPicker
          key={uniqKey}
          onChangeComplete={color => {
            const hex = color.hex;
            const alpha = color.alpha;
            update({'color': {type: 'solid', color: hex, alpha}})
          }}
          color={element.color._str}
          palette={Object.values(element._root.palette)}
          width={226}
        />
      </Field>

      <BackgroundPanel
        surface={element}
        background={element.background}
        bgOptions={['none', 'color', 'gradient']}
        path="background."
      />

      <Field 
        label="Size"
        onExploreClick={() => null}
      >
        <Slider
          name="size"
          bg="dark"
          color="white"
          value={element.font.size}
          step={.05}
          min={0}
          max={element.type === 'dominant' ? 1 : 2}
          showValue={true}
          onChange={e => update({'font.size': e.target.value})}
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
          value={WeightToText[element.font.weight]}
          options={DQ_FONTS[element.font.family].weights.map(w => WeightToText[w])}
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
          value={element.font.transform}
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
          value={element.font.style}
          options={DQ_FONTS[element.font.family].styles}
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
          value={element.font.letterSpacing}
          step={.025}
          min={-.1}
          max={.4}
          showValue={true}
          onChange={e => update({'font.letterSpacing': e.target.value})}
        />
      </Field>

      {element.lines.length > 1 && 
        <Field 
          label="Line Height"
          hint="The amount of space between each line of text in this element."
          onExploreClick={() => null}
        >
          <Slider
            name="lineHeight"
            bg="dark"
            color="white"
            value={element.font.lineHeight}
            step={.1}
            min={.8}
            max={2}
            showValue={true}
            onChange={e => update({'font.lineHeight': e.target.value})}
          />
          <Flex mt="2px" ml={1}>
            <Box mr={2}>
              <Checkbox 
                label="Ignore Ascenders"
                checked={!!element.font.ignoreAscenders}
                onChange={e => update({'font.ignoreAscenders': e.target.checked})}
              />
            </Box>
            <Box>
              <Checkbox 
                label="Ignore Descenders"
                checked={!!element.font.ignoreDescenders}
                onChange={e => update({'font.ignoreDescenders': e.target.checked})}
              />
            </Box>
          </Flex>
        </Field>
      }

      {element._hasList && 
        <Field 
          label="List Divider"
          onExploreClick={() => null}
        >
          <Select
            name="divider-type"
            bg="dark"
            color="white"
            value={element.divider.type}
            options={["line", "dot"]}
            onChange={e => update({'divider.type': e.target.value})}
          />
        </Field>
      }

      {element._computed.next &&
        <Field 
          label="Margin Bottom"
          hint="The amount of space between this item and the item below it."
          onExploreClick={() => null}
          children={
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
          }
        />
      }

      <Field 
        label="Bleed"
        onExploreClick={() => null}
      >
        <DirectionalInput
          name="bleed"
          min={0}
          l={element._computed.canBleed.l ? element.bleed.l : 0}
          r={element._computed.canBleed.r ? element.bleed.r : 0}
          t={0}
          b={0}
          lMax={element._computed.edges.l.length}
          rMax={element._computed.edges.r.length}
          tMax={0}
          bMax={0}
          lDisabled={!element._computed.canBleed.l}
          rDisabled={!element._computed.canBleed.r}
          tDisabled={true}
          bDisabled={true}
          onChange={values => update({'bleed': values})}
        />
      </Field>

      {element.background && 
        <Field 
          label="Padding"
          hint="The amount of space between the background and the text."
          onExploreClick={() => null}
        >
          <DirectionalInput
            name="padding"
            step={.25}
            min={0}
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
      {canControlWidth(element) &&
        <Field 
          label="Width"
          onExploreClick={() => null}
          children={
            <Select
              name="width"
              bg="dark"
              color="white"
              value={WidthToText[element.w]}
              options={['max', 'min']}
              onChange={e => update({'w': TextToWidth[e.target.value]})}
            />
          }
        />
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

const textareaStyle = {
  whiteSpace: 'pre',
  overflowWrap: 'normal',
  overflowX: 'scroll',
}