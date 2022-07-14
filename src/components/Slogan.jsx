import { useState } from 'react';
import Typing from "react-typing-animation";

const slogan = ["Your Health Our Priority", "Health Service Made easy"];

const Slogan = () => {
    let Index = 0;
    const [state, setState] = useState({Index});
    const updateSlogan = () => {
    setState({ Index: state.Index === 0 ? 1 : 0 });
  };

    return (
      <Typing onFinishedTyping={updateSlogan} loop>
        {slogan[state.Index]}
        <Typing.Reset count={1} delay={1000} />
      </Typing>
    );
  
}

export default Slogan;