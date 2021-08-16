
import React from 'react';
import Logo from '../../../theme/Logo';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide> {/* MenuWrapper.LeftSide */}
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.RightSide> {/* MenuWrapper.RightSide */}
        <Button type="button" ghost variant="secondary.main">
          Sobre
        </Button>
        <Button type="button" variant="primary.main">
          Contato
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
} 