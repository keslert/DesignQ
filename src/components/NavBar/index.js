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
import SubNavItem from './SubNavItem';
import { getStageFoci } from '../../core/generator';

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

function NavBar({stage}) {
  const ref = useRef();
  const rootDispatch = useContext(DispatchContext)
  
  const selectedIndex = stages.findIndex(s => s.type === stage.type);
  const [hover, setHover] = useState({l: 50, w: 0})
  const [marker, setMarker] = useState({l: 50, w: 0});

  const handleMouseEnter = useCallback(e => {
    setHover(getUpdate(e.target));
  }, [])

  const handleMouseLeave = useCallback(e => {
    const el = ReactDOM.findDOMNode(ref.current);
    const child = el.children[1 + selectedIndex];
    setHover(getUpdate(child));
  }, [selectedIndex])

  const handleClick = useCallback((type, _focus) => {
    const focus = _focus || getStageFoci(type)[0].focus;
    rootDispatch({type: 'SET_STAGE', stage: {type, focus}});
  }, [])

  useEffect(() => {
    const el = ReactDOM.findDOMNode(ref.current);
    const child = el.children[1 + selectedIndex];
    setMarker(getUpdate(child, stages[selectedIndex].color))
    setHover(getUpdate(child));
  }, [selectedIndex])

  const foci = getStageFoci(stage.type);

  return (
    <Box>
      <Flex style={{position: 'relative'}} ref={ref} bg="dark">
        <NavItem flex={0} py={0} bg={marker.color} width={50} mr="1px">
          <QSvg fill='currentColor' size={20} />
        </NavItem>
        {stages.map((stage, i) => (
          <NavItem
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={stage.label}
            color={stage.color}
            children={stage.label} 
            selected={i === selectedIndex}
            onClick={() => handleClick(stage.type)}
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
        style={{height: 40}}
      >
        {foci.map(({focus, label}) => (
          <Box key={focus} mr={1}>
            <SubNavItem
              color={marker.color}
              selected={focus === stage.focus}
              onClick={() => handleClick(stage.type, focus)}
              children={label}
            />
          </Box>
        ))}

      </Flex>
    </Box>
  )
}

export default NavBar;