
import React from 'react';
import Logo from '../../../theme/Logo';
import { MenuWrapper } from './styles/MenuWrapper';

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide> {/* MenuWrapper.LeftSide */}
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.RightSide> {/* MenuWrapper.RightSide */}
        <button type="button">
          Sobre
        </button>
        <button type="button">
          Contato
        </button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
} 