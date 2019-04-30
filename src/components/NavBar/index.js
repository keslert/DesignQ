import React, { 
  useState, 
  useCallback, 
  useContext,
  useEffect, 
  useRef,
  memo,
} from 'react';
import ReactDOM from 'react-dom';
import NavItem from './NavItem';
import NavMarker from './NavMarker';
import { Flex, Box } from 'rebass';
import QSvg from '../../svg/q.svg';
import { DispatchContext } from '../../containers/Queue';
import { ProgressTypes } from "../../core/journey";
import SubNavItem from './SubNavItem';
import NavText from './NavText';
import { STAGES } from '../../core/generator';
import { STAGE_COLORS } from '../../core/utils/color-utils';
import NavDivider from './NavDivider';

const stages = [
  {label: 'Text', color: 'blue', type: 'content'}, 
  {label: 'Image', color: 'yellow', type: 'image'},
  {label: 'Layout', color: 'orange', type: 'layout'},
  {label: 'Color', color: 'red', type: 'color'},
  {label: 'Font', color: 'pink', type: 'typography'},
  // {label: 'Decoration', color: 'pink', type: 'decoration'},
  // {label: 'Polish', color: 'purple', type: 'polish'},
  {label: 'Export', color: 'blue', type: 'export'},
]

const getUpdate = (target, color) => {
  return {
    l: target.offsetLeft,
    w: target.offsetWidth,
    color,
  }
}

function NavBar({stage, recommendedStage, stageProgress}) {
  const ref = useRef();
  const rootDispatch = useContext(DispatchContext)
  
  const selectedIndex = stages.findIndex(s => stage.type === s.type);
  const [hover, setHover] = useState({})
  const [marker, setMarker] = useState({color: 'dark'});

  const handleMouseEnter = useCallback(e => {
    setHover(getUpdate(e.target));
  }, [])

  const handleMouseLeave = useCallback(e => {
    const el = ReactDOM.findDOMNode(ref.current);
    const child = el.children[(1 + selectedIndex) * 2];
    setHover(getUpdate(child));
  }, [selectedIndex])

  const handleClick = useCallback((type, key) => {
    const nextStage = key ? {type, key} : STAGES[type][0];
    
    rootDispatch({type: 'SET_STAGE', stage: nextStage, upgrade: stage.type === 'content'});
    rootDispatch({type: 'SET_VIEW_MODE', viewMode: 'grid'});
  }, [stage])

  useEffect(() => {
    const el = ReactDOM.findDOMNode(ref.current);
    const child = el.children[1 + selectedIndex * 2];
    setMarker(getUpdate(child, stages[selectedIndex].color))
    setHover(getUpdate(child));
  }, [selectedIndex])


  const stageFociVisible = recommendedStage && stage.type === recommendedStage.type;
  const stageCueVisible = recommendedStage 
    && stage.progress !== ProgressTypes.UNEXPLORED
    && recommendedStage !== stage
  const stageCueHighlighted = stage.progress === ProgressTypes.THOROUGHLY_EXPLORED;
  const stageCueFlashing = stage.exhausted;
  const lastStageIndex = stages.length - 1;

  const foci = STAGES[stage.type].length !== 1 ? STAGES[stage.type] : [];

  return (
    <Box>
      <Flex style={{position: 'relative', zIndex: 1000}} ref={ref} bg="dark">
        <Box mr="8px">
          <NavItem
            selected={true}
            width={70}
            head={true}
            children={
              <Box ml="8px" color="white">
                <QSvg fill='currentColor' size={20} />
              </Box>
            }
          />
        </Box>
        
        {stages.map((stage, i) => (
          <React.Fragment key={stage.label}>
            <NavItem
              selected={i === selectedIndex}
              onClick={() => handleClick(stage.type)}
              flex={1}
              tail={true}
              head={i !== lastStageIndex}
              children={
                <NavText
                  text={stage.label}
                  visible={
                    false 
                    && stageCueVisible 
                    && !stageFociVisible 
                    && recommendedStage && recommendedStage.type === stage.type
                  }
                  highlight={stageCueHighlighted}
                  flashing={stageCueFlashing}
                />
              } 
            />
            {i !== lastStageIndex && 
              <NavDivider
                selected={i === selectedIndex}
              />
            }
          </React.Fragment>
        ))}

      </Flex>
      <Flex 
        pl={50} 
        alignItems="center"
        bg="off_dark"
        style={{
          height: 44, 
          position: 'relative',
          zIndex: 999, 
          // boxShadow: '0 0px 1px rgba(0,0,0,.25)',
          // background: 'linear-gradient(91.29deg, hsla(222, 17%, 29%, 1) 0, hsla(222, 17%, 29%, 1) 100%)',
        }}
      >
        <div style={{
            flexShrink: 1,
            width: (marker.l || 0) - 71,
          }}
        />
        {foci.map(({type, key, label}) => (
          <Box key={key} mr={1}>
            <SubNavItem
              selected={key === stage.key}
              onClick={() => handleClick(type, key)}
              children={
                <NavText
                  text={label}
                  visible={
                    false
                    && stageCueVisible 
                    && stageFociVisible 
                    && key === recommendedStage.key
                  }
                  highlight={stageCueHighlighted}
                  flashing={stageCueFlashing}
                />
              }
            />
          </Box>
        ))}

      </Flex>
    </Box>
  )
}

export default memo(NavBar);