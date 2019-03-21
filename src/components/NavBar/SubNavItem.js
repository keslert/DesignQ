import styled from 'styled-components';

const SubNavItem = styled.div(props => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  color: props.theme.colors.dark,
  background: props.selected ? props.theme.colors.white : 'none',
  fontWeight: 'bold',
  fontSize: props.theme.fontSizes[1] + 'px',
  letterSpacing: '.025em',
  transition: 'background .15s',
  borderRadius: '999px',
  // border: '1px solid ' + (props.selected ? props.theme.colors[props.color] : 'rgba(0,0,0,0)'),
  padding: "6px 24px",
  '&:hover': {
    background: !props.selected && 'rgba(255,255,255,.5)',
  }
}))

export default SubNavItem;