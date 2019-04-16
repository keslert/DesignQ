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
import { findOrCreatePaletteKey } from '../../core/utils/color-utils';
import ThematicBreak from './ThematicBreak';
import BorderPanel from './BorderPanel';
import get from 'lodash/get';
import last from 'lodash/last';

const FONT_FAMILIES = Object.keys(DQ_FONTS).sort()

function TextElementPanel({element, onUpdate}) {
  // TODO: Add translateXY for minor adjustments.
  // TODO: Add divider color.

  const palette = element._root.palette;
  const paletteColors = Object.values(palette);
  // const uniqKey = element._root.id + element._parent._key + element._key
  const editKey = element._root.editId || element._root.id;

  return (
    <Box>
      <Field 
        label="Text"
        children={
          <Textarea
            key={editKey + element._parent._key + element._key}
            name="text"
            bg="dark"
            color="white"
            defaultValue={element._text}
            rows={3}
            onChange={e => {
              // TODO: What to do about empty lines?
              // TODO: Estimate each line and list type.
              let prevType;
              const lines = e.target.value.split('\n').map((line, i) => {
                const items = line.split('|');
                if(items.length > 1) {
                  return items.map((item, j) => {
                    prevType = get(element.lines, [i, j, 'type']) || prevType
                    return {
                      type: prevType,
                      text: item.trim()
                    }
                  });
                }
                prevType = get(element.lines, [i, 'type']) || prevType
                return {
                  type: prevType,
                  text: line.trim()
                }
              })
              onUpdate({'lines': lines});
            }}
            style={textareaStyle}
          />
        }
      />

      <ThematicBreak />

      <Field 
        label="Color"
        children={
          <ColorPicker
            key={editKey}
            onChangeComplete={color => {
              const key = findOrCreatePaletteKey(color.hex, palette)
              onUpdate({
                'color.paletteKey': key,
                'color.alpha': color.rgb.a,
                [`_root.palette.${key}`]: color.hex,
              })
            }}
            color={element.color._str}
            palette={paletteColors}
          />
        }
      />

      <ThematicBreak />

      <BackgroundPanel
        surface={element}
        background={element.background}
        bgOptions={['none', 'color', 'gradient']}
        path="background."
      />

      <ThematicBreak />

      <Field 
        label="Font"
        children={
          <Select
            bg="dark"
            color="white"
            value={element.font.family}
            options={FONT_FAMILIES}
            onChange={e => onUpdate({'font.family': e.target.value})}
          />
        }
      />

      <Field 
        label="Size"
        children={
          <Slider
            name="size"
            bg="dark"
            color="white"
            value={element.font.size}
            step={.05}
            min={0}
            max={element.type === 'dominant' ? 1 : 2}
            showValue={true}
            onChange={e => onUpdate({'font.size': e.target.value})}
          />
        }
      />

      <Field 
        label="Weight"
        children={
          <Select
            name="weight"
            bg="dark"
            color="white"
            value={WeightToText[element.font.weight]}
            options={DQ_FONTS[element.font.family].weights.map(w => WeightToText[w])}
            onChange={e => onUpdate({'font.weight': TextToWeight[e.target.value]})}
          />
        }
      />

      <Field 
        label="Appearance"
        children={
          <Select
            name="transform"
            bg="dark"
            color="white"
            value={element.font.transform}
            options={["normal", "uppercase", "lowercase"]}
            onChange={e => onUpdate({'font.transform': e.target.value})}
          />
        }
      />

      <Field 
        label="Style"
        children={
          <Select
            name="style"
            bg="dark"
            color="white"
            value={element.font.style}
            // Let people use a faux italic...
            options={['normal', 'italic']}
            // options={DQ_FONTS[element.font.family].styles}
            onChange={e => onUpdate({'font.style': e.target.value})}
          />
        }
      />

      <Field 
        label="Letter Spacing"
        children={
          <Slider
            name="letterSpacing"
            bg="dark"
            color="white"
            value={element.font.letterSpacing}
            step={.025}
            min={-.1}
            max={.4}
            showValue={true}
            onChange={e => onUpdate({'font.letterSpacing': e.target.value})}
          />
        }
      />

      <Field 
        label="Line Height"
        hint="The amount of space between each line of text in this element."
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
          onChange={e => onUpdate({'font.lineHeight': e.target.value})}
        />
        <Flex mt="2px" ml={1}>
          <Box mr={2}>
            <Checkbox 
              label="Ignore Ascenders"
              checked={!!element.font.ignoreAscenders}
              onChange={e => onUpdate({'font.ignoreAscenders': e.target.checked})}
            />
          </Box>
          <Box>
            <Checkbox 
              label="Ignore Descenders"
              checked={!!element.font.ignoreDescenders}
              onChange={e => onUpdate({'font.ignoreDescenders': e.target.checked})}
            />
          </Box>
        </Flex>
      </Field>

      <Field 
        label="Text Alignment"
        onExploreClick={() => null}
        children={
          <Select
            name="textAlign"
            bg="dark"
            color="white"
            value={element._parent.textAlign}
            options={['left', 'center', 'right']}
            onChange={e => onUpdate({'_parent.textAlign': e.target.value})}
          />
        }
      />

      {element._hasList && 
        <React.Fragment>
          <Field 
            label="List Divider"
            children={
              <Select
                name="divider-type"
                bg="dark"
                color="white"
                value={element.divider.type}
                options={["line", "dot"]}
                onChange={e => onUpdate({'divider.type': e.target.value})}
              />
            }
          />
          <Field 
            label="Color"
            nested={true}
            children={
              <ColorPicker
                key={editKey}
                color={element.divider.color._str}
                palette={paletteColors}
                onChangeComplete={color => {
                  const key = findOrCreatePaletteKey(color.hex, palette)
                  onUpdate({
                    'divider.color.paletteKey': key,
                    'divider.color.alpha': color.rgb.a,
                    [`_root.palette.${key}`]: color.hex,
                  })
                }}
              />
            }
          />
        </React.Fragment>
      }

      {element._computed.next &&
        <Field 
          label="Margin Bottom"
          hint="The amount of space between this item and the item below it."
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
              onChange={e => onUpdate({'mb': e.target.value})}
            />
          }
        />
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
              onChange={e => onUpdate({'w': TextToWidth[e.target.value]})}
            />
          }
        />
      }

      <ThematicBreak />

      <BorderPanel
        surface={element}
        border={element.border}
        path='border.'
      />

      <ThematicBreak />

      <Field 
        label="Bleed"
        hint="The number of edges this item extends across."
        children={
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
            onChange={values => onUpdate({'bleed': values})}
          />
        }
      />

      {element.background && 
        <Field 
          label="Background Bleed"
          hint="The number of edges this item's background extends across."
          children={
            <DirectionalInput
              name="bleed"
              min={0}
              l={element._computed.canBleed.l ? (element.bleed.pl || 0) : 0}
              r={element._computed.canBleed.r ? (element.bleed.pr || 0) : 0}
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
              onChange={values => onUpdate({
                'bleed.pl': values.l,
                'bleed.pr': values.r,
                'bleed.pt': values.t,
                'bleed.pb': values.b,
              })}
            />
          }
        />
      }

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
            onChange={values => onUpdate({
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

const textareaStyle = {
  whiteSpace: 'pre',
  overflowWrap: 'normal',
  overflowX: 'scroll',
}