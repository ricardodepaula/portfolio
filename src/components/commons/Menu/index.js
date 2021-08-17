
import React from 'react';
import Logo from '../../../theme/Logo';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';
import { Text } from '../../foundation/Text';

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide> {/* MenuWrapper.LeftSide */}
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul"> {/* MenuWrapper.CentralSide */}
        {[
          { url: '/', name: 'Home' },
          { url: '/faq', name: 'Perguntas Frequentes' },
          { url: '/sobre', name: 'Sobre' },
        ].map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.name}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
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