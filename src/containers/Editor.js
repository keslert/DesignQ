import React, { 
  useState, 
  useEffect, 
  useRef,
  useCallback,
} from 'react';
import Frame from '../components/Frame';
import ErrorBoundary from '../components/ErrorBoundary';
import JSONEditor from 'jsoneditor';
import { Box, Flex, Image } from 'rebass';
import { templates } from '../core/templates';
import { computeFlyer } from '../core/producer';
import _ from 'lodash';

import 'jsoneditor/dist/jsoneditor.css';


const defaultTemplate = templates.LetsGrooveJazzNight;
// computeFlyer(defaultTemplate)
function Editor() {
  const jsonDiv = useRef();
  const jsonEditor = useRef();
  const _template = useRef();

  const [version, setVersion] = useState(0);
  const [flyer, setFlyer] = useState(defaultTemplate.title);
  const [template, setTemplate] = useState(defaultTemplate);
  
  useEffect(() => {
    const options = {
      mode: 'code',
      onChangeJSON: setTemplate,
      onChangeText: (jsonStr) => {
        try {
          setTemplate(JSON.parse(jsonStr));
        }
        catch(error) {}
      }
    };
    jsonEditor.current = new JSONEditor(jsonDiv.current, options);
  }, [])
  
  useEffect(() => {
    const template = _.find(templates, t => t.title === flyer);
    if(template) {
      setTemplate(template);
      jsonEditor.current.update(template);
    }
  }, [flyer]);

  useEffect(() => {
    _template.current = _.cloneDeep(template);
    try {
      computeFlyer(_template.current);
      setVersion(version + 1);
    }
    catch(error) {
      console.log("computeFlyer error");
    }
  }, [template])

  const frameWidth = 612;
  const frameHeight = 856;
  const scale = 0.7;

  return (
    <div>
      <Flex>
        {template.inspiration && 
          <Box p={2}>
            <img
              src={template.inspiration} 
              width={frameWidth * scale}
            /> 
          </Box>
        }

        {_template.current && 
          <Box p={2}>
            <ErrorBoundary version={version}>
              <Frame 
                scale={scale} 
                width={frameWidth} 
                height={frameHeight} 
                flyer={_template.current}
              />
            </ErrorBoundary>
          </Box>
        }

        <Box p={2}>
          <div 
            ref={jsonDiv} 
            style={{width: "450px", height: "700px"}} 
          />
        </Box>
      </Flex>

    </div>
  )
}

export default Editor;