import React, { useContext } from 'react';
import { Box, Flex } from 'rebass';
import TabSvg from '../svg/tab.svg';
import SearchInput from './SearchInput';
import SelectionTree from './SelectionTree';
import Tabs from './Tabs';
import ImagePicker from '../containers/ImagePicker';
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
        style={{position: 'absolute', right: "-16px", top: '0', cursor: 'pointer'}}
        children={<TabSvg size={100} />}
      />

      {false && 
        <Box mb={2}>
          <Tabs
            tabs={["AI Actions", "User Edits"]}
            selectedIndex={1}
            onClick={(tab, index) => null}
          />
        </Box>
      }


      <Box mx="-16px" px={16} flex={1} style={{overflowY: 'auto', height: 200}}>
        <EditPanel 
          selection={props.selection}
        />
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
      <Box mx="-16px" bg="dark">
        <SelectionTree
          flyer={props.selection._computed.template}
        />
      
      </Box>
    </Flex>
  )
}

export default Sidebar;