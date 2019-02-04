import React, { 
  useCallback,
  useEffect, 
  useState, 
} from 'react';
import WebFont from 'webfontloader';
import Select from 'react-select';
import ideaFonts from '../core/data/typography/ideo-font-cluster';
import { Flex, Box } from 'rebass';
import _ from 'lodash';
import FontCanvas from '../components/FontCanvas';

const defaultFamilies = ['Amiri', 'Merriweather'].map(f => ({family: f, value: f, label: f}))

const GOOGLE_FONTS = _.chain(ideaFonts)
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
      <Select
        isMulti={true}
        value={families}
        options={GOOGLE_FONTS}
        onChange={handleFamilySelection}
      />
      <Box p={3}>
        {families.map(({family}) => activeFamilies[family] 
          ? (
            <Box mb={3} key={family}>
              <FontCanvas
                text="Handglove"
                family={family}
                loaded={activeFamilies[family]}
                fontSize={100}
                width={800}
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