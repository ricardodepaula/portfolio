import React from 'react';
import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Cover from '../src/components/commons/Cover';
import WrapperProjetos from '../src/components/commons/WrapperProjetos';
import { Box } from '../src/components/layout/Box';

export default function Home() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Cover />
      <Menu />
      <WrapperProjetos />
      <Footer />
    </Box>
  );
}
