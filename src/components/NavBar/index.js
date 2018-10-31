import React from 'react';
import NavItem from './NavItem';
import { Flex } from 'rebass';
import HomeSvg from '../../svg/home.svg'
import theme from '../../styles/theme';

class NavBar extends React.Component {

  render() {

    const selected = 'Content';
    const stages = ['Content', 'Layout', 'Typography', 'Color', 'Decoration', 'Polish', 'Finish']

    return (
      <Flex style={{boxShadow: theme.shadows.small }}>
        <NavItem flex={0} py={0}>
          <HomeSvg color={theme.colors.black} />
        </NavItem>
        {stages.map(stage => (
          <NavItem 
            key={stage} 
            children={stage} 
            selected={stage === selected}
          />
        ))}
      </Flex>
    )
  }
}

export default NavBar;