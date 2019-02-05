import React, { 
  useCallback,
  useEffect, 
  useState, 
} from 'react';
import WebFont from 'webfontloader';
import Select from 'react-select';
import IDEO_FONTS from '../core/data/typography/ideo-font-cluster';
import { DQ_FONTS } from '../core/utils/text-utils';
import { Flex, Box } from 'rebass';
import _ from 'lodash';
import FontCanvas from '../components/FontCanvas';
import FontManual from '../components/FontManual'

const defaultFamilies = [
  'Playfair Display',
  'Roboto Condensed',
  'Cormorant Unicase',
  'Londrina Sketch',
  'Yellowtail',
  'Chewy',
  'Permanent Marker', 
  'Muli',
  'Josefin Slab',
].map(f => ({family: f, value: f, label: f}))

const GOOGLE_FONTS = _.chain(IDEO_FONTS)
  .filter(f => f.file.startsWith('http://fonts.gstatic'))
  .map(f => ({...f, value: f.family, label: f.family}))
  .value();

function Fonts() {
  const [families, setFamilies] = useState(defaultFamilies);
  const [activeFamilies, setActiveFamilies] = useState({});
  const handleFamilySelection = useCallback(setFamilies)
  
  useEffect(() => {
    if(families.length) {
      WebFont.load({
        google: { families: families.map(f => f.family) },
        fontactive: family => {
          setActiveFamilies(f => ({...f, [family]: true}))
        }
      });
    }
  }, [families]);
  
  return (
    <div>
      <Box style={{position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 200}} bg="#fff" p={2}>
        <Select
          isMulti={true}
          value={families}
          options={GOOGLE_FONTS}
          onChange={handleFamilySelection}
        />
      </Box>
      <Box p={3} pt={5}>
        {families.map(({family}) => activeFamilies[family] 
          ? (
            <Box mb={4} key={family}>
              <FontManual
                text="abcdefghABCDEFGH"
                family={family}
                loaded={activeFamilies[family]}
                offsets={DQ_FONTS[family]}
                fontSize={120}
                width={1000}
              />
            </Box>
          )
          : null
        )}
      </Box>

    </div>
  )
}

export default Fonts;