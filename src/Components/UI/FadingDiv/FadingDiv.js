import React from 'react';
import { useSpring, animated } from 'react-spring';

const FadingDiv = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } }, );
    return (<animated.div style={props}>
        <label>BLING BLING</label>
    </animated.div>);
}

export default FadingDiv;