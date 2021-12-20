import React        from 'react';
import * as Styled  from './styles';
import Button       from '../Button';
import HeroImage    from './../../images/illustration-mockups.svg';

function Hero(){
  return (
    <Styled.Hero>
      <div>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>Huddle re-imagines the way we build communities. You have a voice,
        but so does your audience. Create connections with your users as
        you engage in genuine discussion.</p>
        <Button bgColor='hsl(322, 100%, 66%)' textColor='hsl(100, 100%, 100%)'>
          Get Started For Free
        </Button>
      </div>
      <img src={HeroImage} alt='hero section illustration' />
    </Styled.Hero>
  );
}

export default Hero;