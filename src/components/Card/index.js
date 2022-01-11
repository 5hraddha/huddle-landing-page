import React        from 'react';
import PropTypes    from 'prop-types';
import * as Styled  from './styles';

/**
 * The **Card** component representing the different information cards in the webpage
 *
 * @version 1.0.0
 * @author Shraddha
 */
function Card({card: {id, title, body, image}}){
  const imageFile = require(`../../images/${image}`);
  return (
    <Styled.Card rowReverse={(id % 2 === 0) ? true : false} >
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={imageFile} alt={title} />
      </div>
    </Styled.Card>
  );
}

Card.propTypes = {
  /** An object representing the information or detail card to display */
  card  : PropTypes.object.isRequired
}

export default Card;