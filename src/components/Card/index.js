import React        from 'react';
import * as Styled  from './styles';

function Card({card: {id, title, body, image}}){
  const imageFile = require(`../../images/${image}`);
  return (
    <Styled.Card direction={(id % 2 === 0) ? `row-reverse` : `row`} >
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

export default Card;