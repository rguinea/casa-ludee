import * as React from 'react';

import sanMike from '../../images/centro.jpg';

import { BlueBackground, Image, Text, Title } from './SanMiguelArea.styled';

const SanMiguelArea: React.FC = (): JSX.Element => {
  return (
    <>
      <BlueBackground>
        <Title>San Miguel de Allende</Title>
        <Text>
          San Miguel de Allende es considerada una de las ciudades más bonitas de México,
          su apariencia atractiva y cosmopolita lo hacen uno de los destinos preferidos
          para los amantes del arte.
        </Text>
        <Text>
          Déjate llevar por sus calles empedradas, mojigangas bailando por el centro,
          su arquitectura colonial y festividades que ponen a todos a divertirse.
        </Text>
        <Text>
          Disfruta de los mejores restaurantes de la ciudad y llévate un recuerdo
          de su mercado de artesanías, en San Miguel de Allende no existe forma de pasarla mal.
        </Text>
        <Text>
          Además en Casa Ludee podrás encontrar información de las atracciones turistícas más
          importantes o en caso de venir a algún evento todo los servicios necesarios como
          estéticas, maquillistas profesionales y hasta taxis.
        </Text>
      </BlueBackground>
      <Image background={sanMike} />
    </>
  )
};

export default SanMiguelArea;
