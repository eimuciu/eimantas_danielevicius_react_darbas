import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

function Link({ children, to, active, clickHandler }) {
  return (
    <StyledLink active={active} to={to} onClick={clickHandler}>
      {children}
    </StyledLink>
  );
}

const StyledLink = styled(RouterLink)`
  text-decoration: none;
  padding: 10px 20px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.light : null};
`;

export default Link;
