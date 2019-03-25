import React, { 
  useState, 
  useCallback, 
  useContext,
  useEffect, 
  useRef,
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

const stages = [
  {label: 'Content', color: 'green', type: 'content'}, 
  {label: 'Layout', color: 'yellow', type: 'layout'},
  {label: 'Typography', color: 'orange', type: 'typography'},
  {label: 'Color', color: 'red', type: 'color'},
  {label: 'Decoration', color: 'pink', type: 'decoration'},
  {label: 'Polish', color: 'purple', type: 'polish'},
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
  
  const selectedIndex = stages.findIndex(s => s.type === stage.type);
  const [hover, setHover] = useState({})
  const [marker, setMarker] = useState({color: 'dark'});

  const handleMouseEnter = useCallback(e => {
    setHover(getUpdate(e.target));
  }, [])

  const handleMouseLeave = useCallback(e => {
    const el = ReactDOM.findDOMNode(ref.current);
    const child = el.children[1 + selectedIndex];
    setHover(getUpdate(child));
  }, [selectedIndex])

  const handleClick = useCallback((type, _focus) => {
    const stages = STAGES[type];
    const focus = _focus || (stages[0] ? stages[0].focus : null);
    rootDispatch({type: 'SET_STAGE', stage: {type, focus}, upgrade: stage.type === 'content'});
  }, [stage])

  useEffect(() => {
    const el = ReactDOM.findDOMNode(ref.current);
    const child = el.children[1 + selectedIndex];
    setMarker(getUpdate(child, stages[selectedIndex].color))
    setHover(getUpdate(child));
  }, [selectedIndex])


  const stageFocusVisible = recommendedStage && stage.type === recommendedStage.type;
  const stageCueVisible = recommendedStage 
    && stage.progress !== ProgressTypes.UNEXPLORED
    && recommendedStage !== stage
  const stageCueHighlighted = stage.progress === ProgressTypes.THOROUGHLY_EXPLORED;
  const stageCueFlashing = stage.exhausted;

  const foci = STAGES[stage.type];

  return (
    <Box>
      <Flex style={{position: 'relative', zIndex: 1000}} ref={ref} bg="dark">
        <NavItem flex={0} py={0} bg={marker.color} width={50} mr="1px">
          <QSvg fill='currentColor' size={20} />
        </NavItem>
        {stages.map((stage, i) => (
          <NavItem
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={stage.label}
            color={stage.color}
            selected={i === selectedIndex}
            onClick={() => handleClick(stage.type)}
            children={
              <NavText
                text={stage.label}
                visible={
                  stageCueVisible 
                  && !stageFocusVisible 
                  && recommendedStage && recommendedStage.type === stage.type
                }
                highlight={stageCueHighlighted}
                flashing={stageCueFlashing}
              />
            } 
          />
        ))}
        <NavMarker 
          bg="#ffffff33"
          borderRadius="8px / 100%"
          style={{left: hover.l, width: hover.w}}
        />
        <NavMarker 
          bg={marker.color}
          borderRadius="8px / 100%"
          style={{
            left: marker.l, 
            width: marker.w,
            transition: 'left 0.3s ease-out, width 0.3s ease-out, background 0.3s ease-out',
          }}
        />
      </Flex>
      <Flex 
        bg={marker.color + '_light'} 
        pl={50} 
        alignItems="center"
        style={{
          height: 40, 
          position: 'relative',
          zIndex: 999, 
          boxShadow: '0 0px 1px rgba(0,0,0,.25)'
        }}
      >
        {foci.map(({type, focus, label}) => (
          <Box key={focus} mr={1}>
            <SubNavItem
              selected={focus === stage.focus}
              onClick={() => handleClick(type, focus)}
              children={
                <NavText
                  text={label}
                  visible={
                    stageCueVisible 
                    && stageFocusVisible 
                    && focus === recommendedStage.focus
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

export default NavBar;