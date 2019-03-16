import React, { useContext } from 'react';
import { Box, Flex } from 'rebass';
import TabSvg from '../svg/tab.svg';
import SearchInput from './SearchInput';
import SelectionTree from './SelectionTree';
import Tabs from './Tabs';
import ImagePicker from '../containers/ImagePicker';
import ActionList from './ActionList';
import ManualControls from './ManualControls';
import { DispatchContext } from '../containers/Queue';

function Sidebar(props) {
  const rootDispatch = useContext(DispatchContext);

  return (
    <Flex 
      width={270}
      bg="off_dark"
      color="off_dark"
      px="12px"
      flexDirection="column"
      style={{position: 'relative'}}
    >
      <Box 
        onClick={() => rootDispatch({type: 'SELECT', selected: null})}
        style={{position: 'absolute', right: "-16px", top: '0', cursor: 'pointer'}}
      >
        <TabSvg fill="currentColor" size={100} />
      </Box>

      <Box mb={2}>
        <Tabs
          tabs={["AI Actions", "Manual Control"]}
          selectedIndex={1}
          onClick={(tab, index) => null}
        />
      </Box>


      <Box mx={-12} px={12} flex={1} style={{overflowY: 'auto'}}>
        <ManualControls />
      </Box>


      { false && 
        <Box flex={1} style={{overflowY: 'auto'}}>
          <ActionList
            onSelect={() => null}
          />
        </Box>
      }

      { false && 
        <Box mb="-2px" style={{position: 'relative', zIndex: 999}}>
          <SearchInput
            placeholder={"Search Actions"}
            hasBackButton={false}
            value={''}
            onChange={e => null}
            onSubmit={e => null}
          />
        </Box>
      }

      { false && 
        <Box pt="4px" pb={1} mx="-2px" flex={1} style={{overflowY: 'auto'}}>
          <ImagePicker 
            columns={2}
            margin={4}
            onClick={() => null}
          />
        </Box>
      }
      <Box mx="-12px" bg="dark">
        <SelectionTree
          flyer={props.flyer}
        />
      
      </Box>
    </Flex>
  )
}

export default Sidebar;