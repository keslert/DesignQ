import styled from 'styled-components';

const SubNavItem = styled.div(props => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  // color: props.theme.colors.dark,
  color: props.theme.colors.white,
  // background: props.selected ? props.theme.colors.white : 'none',
  border: props.selected ? '2px solid ' + props.theme.colors.blue : '2px solid transparent',
  fontWeight: 'bold',
  fontSize: props.theme.fontSizes[1] + 'px',
  textTransform: 'uppercase',
  letterSpacing: '.025em',
  transition: 'background .15s',
  borderRadius: '999px',
  // border: '1px solid ' + (props.selected ? props.theme.colors[props.color] : 'rgba(0,0,0,0)'),
  padding: "4px 24px",
  '&:hover': {
    border: !props.selected && ('2px solid ' + props.theme.colors.white),
  }
}))

export default SubNavItem;