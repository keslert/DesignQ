import React, { useContext } from 'react';
import { Box, Flex } from 'rebass';
import TabSvg from '../svg/tab.svg';
import SelectionTree from './SelectionTree';
import Tabs from './Tabs';
import ActionList from './ActionList';
import EditPanel from './EditPanel';
import { DispatchContext } from '../containers/Queue';

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
        onClick={() => rootDispatch({type: 'SELECT', selected: null})}
        style={tabStyle}
        children={<TabSvg size={90} />}
      />

      <Box mx="-16px" px={16} flex={1} pt={3} style={scrollStyle}>
        {true && 
          <EditPanel 
            selection={props.selection}
          />
        }
      </Box>

      <Box mx="-16px" bg="dark">
        <SelectionTree
          flyer={props.selection._root}
        />
      </Box>
    </Flex>
  )
}

export default Sidebar;

const tabStyle = {position: 'absolute', left: "-16px", top: '10px', cursor: 'pointer'}
const scrollStyle = {overflowY: 'auto', height: 200};