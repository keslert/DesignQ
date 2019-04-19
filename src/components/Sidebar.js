import React, { useContext } from 'react';
import { Box, Flex } from 'rebass';
import TabSvg from '../svg/tab.svg';
import SelectionTree from './SelectionTree';
import Tabs from './Tabs';
import ActionList from './ActionList';
import EditPanel from './EditPanel';
import { DispatchContext } from '../containers/Queue';
import Timeline from '../containers/Timeline';

function Sidebar(props) {
  const rootDispatch = useContext(DispatchContext);

  return (
    <Flex 
      width={280}
      bg="off_dark"
      color="off_dark"
      px="16px"
      flexDirection="column"
      style={{position: 'relative'}}
    >
      <Box 
        style={tabStyle}
        onClick={() => rootDispatch({type: 'SELECT', selected: null})}
        children={<TabSvg size={90} />}
      />

      {props.panel === 'edit' && 
        <Box mx="-16px" px={16} flex={1} pt={3} style={scrollStyle}>
          <EditPanel 
            selection={props.selection}
          />
        </Box>
      }

      {props.panel === 'history' && 
        <Timeline
          size={props.size}
          flyers={props.history}
          selected={props.secondary}
        />
      }

      {props.selection && 
        <Box mx="-16px" bg="dark">
          <SelectionTree
            flyer={props.selection._root}
          />
        </Box>
      }
    </Flex>
  )
}

export default Sidebar;

const tabStyle = {position: 'absolute', left: "-16px", top: '10px', cursor: 'pointer'}
const scrollStyle = {overflowY: 'auto', height: 200};