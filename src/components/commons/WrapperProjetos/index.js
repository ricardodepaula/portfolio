import React from 'react';
import { Text } from '../../foundation/Text';
import { Grid } from '../../layout/Grid';
import Card from './Card';

const projects = [
  {
    id: 1,
    name: 'Alurakut',
    imageUrl: '/images/alurakut.png',
    description: 'Aplicação web clone Orkut, é possível fazer login com o GitHub, ver seus amigos e participar de comunidades!',
    repoLink: 'https://github.com/ricardodepaula/alurakut',
    appLink: 'https://alurakut-ricardodepaula1.vercel.app/login',
  },
  {
    id: 2,
    name: 'Instalura',
    imageUrl: '/images/instalura.png',
    description: 'Aplicação web clone do Instagram que foi desenvolvida com o objetivo de aplicar os conceitos da JAMStack utilizando Next.js e styled-components',
    repoLink: 'https://github.com/ricardodepaula/instalura-base',
    appLink: 'https://instalura-ricardodepaula.vercel.app/',
  },
];

export default function WrapperProjetos() {
  return (
    <Grid.Container>
      <Grid.Row marginTop="32px" marginBottom="32px">
        <Grid.Col value={12} display="flex" justifyContent="center">
          <Text variant="titleMD">Meus projetos</Text>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row marginBottom="16px">
        {projects.map((project) => (
          <Grid.Col key={project.id} value={{ xs: 12, md: 4 }}>
            <Card imageUrl={project.imageUrl} title={project.name} />
          </Grid.Col>
        ))}
      </Grid.Row>
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
      </Grid.Row>
    </Grid.Container>
  );
}
