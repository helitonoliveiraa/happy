import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from 'polished';

import { Wrapper } from './styles';

interface Toggle {
  toggleTheme: () => void;
}

const SwitchButton: React.FC<Toggle> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon
        uncheckedIcon
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secondary}
      />
    </Wrapper>
  );
};

export default SwitchButton;
