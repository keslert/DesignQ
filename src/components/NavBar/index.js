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
import { Flex } from 'rebass';
import QSvg from '../../svg/q.svg';
import theme from '../../styles/theme';
import { DispatchContext } from '../../containers/Queue';

const stages = [
  {label: 'Content', color: theme.colors.green, type: 'content'}, 
  {label: 'Layout', color: theme.colors.yellow, type: 'layout'},
  {label: 'Typography', color: theme.colors.orange, type: 'typography'},
  {label: 'Color', color: theme.colors.red, type: 'color'},
  {label: 'Decoration', color: theme.colors.pink, type: 'decoration'},
  {label: 'Polish', color: theme.colors.purple, type: 'polish'},
  {label: 'Export', color: theme.colors.blue, type: 'export'},
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
  
  const selectedIndex = stages.findIndex(s => s.type === stage);
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

  const handleClick = useCallback(type => {
    rootDispatch({type: 'SET_STAGE', stage: {type}});
  })

  useEffect(() => {
    const el = ReactDOM.findDOMNode(ref.current);
    const child = el.children[1 + selectedIndex];
    setMarker(getUpdate(child, stages[selectedIndex].color))
    setHover(getUpdate(child));
  }, [selectedIndex])


  return (
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
  )
}

export default NavBar;