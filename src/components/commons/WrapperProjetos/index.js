import React from 'react';
import { Text } from '../../foundation/Text';
import { Grid } from '../../layout/Grid';

export default function WrapperProjetos() {
  return (
    <Grid.Container
      marginTop={{
        xs: '32px',
        md: '75px',
      }}
    >
      <Grid.Row>
        <Grid.Col
          value={{ xs: 12, md: 5 }}
          offset={{ xs: 0, md: 1 }}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          flexDirection="column"
        >
          Coluna 01
        </Grid.Col>
        <Grid.Col
          value={{ xs: 12, md: 6 }}
        >
          Coluna 02
        </Grid.Col>
        <Grid.Col
          value={{ xs: 12, md: 6 }}
        >
          <Text
            variant="title"
            tag="h1"
            color="tertiary.main"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
          >
            Titulo
          </Text>
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
          </Text>
        </Grid.Col>
        <Grid.Col
          value={{
            xs: 12,
            md: 6,
          }}
        >
          <img
            alt="Imagem do Instalura"
            style={{ display: 'block', margin: 'auto' }}
            src="./images/homepage.png"
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}
