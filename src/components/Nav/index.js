import React        from 'react';
import PropTypes    from 'prop-types';
import * as Styled  from './styles';

/**
 * The **Nav** component representing the navigation menu in the webpage
 *
 * @version 1.0.0
 * @author Shraddha
 */
function Nav({children}){
  return (
    <Styled.Nav>
      {children}
    </Styled.Nav>
  );
}

Nav.propTypes = {
  /** Any JSX representing the menu items */
  children  : PropTypes.any.isRequired
}

export default Nav;