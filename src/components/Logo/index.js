import React        from 'react';
import PropTypes    from 'prop-types';
import * as Styled  from './styles';

/**
 * The **Logo** component representing the logo of the webpage
 *
 * @version 1.0.0
 * @author Shraddha
 */
function Logo({src, alt}){
  return (
    <Styled.Logo src={src} alt={alt}>
    </Styled.Logo>
  )
}

Logo.propTypes = {
  /** A *string* representing the URL of the logo */
  src  : PropTypes.string.isRequired,
  /** A *string* representing the alternate text in case the logo is not displayed on teh webpage */
  alt   : PropTypes.string.isRequired
}

export default Logo;