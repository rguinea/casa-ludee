import * as React from 'react';
import { isMobile } from 'react-device-detect';

import cuarto from '../../images/cuarto.jpg';
import patio from '../../images/patio.jpg';
import sala from '../../images/sala.jpg';

import { FlexContainer, Image, PolaroidContainer, Text, TextContainer, Title } from './ShareMoments.styled';
import { IPolaroidProps } from './ShareMoments.types';

const PolaroidPic: React.FC<IPolaroidProps> = (props): JSX.Element => <Image src={props.imageSrc} tilt={props.tilt} />;

const ShareMoments: React.FC = (): JSX.Element => {
  return (
    <FlexContainer>
      <TextContainer>
        { !isMobile &&
          <>
            <Title>Comparte</Title><Title>momentos</Title><Title>en familia</Title>
            <Text>
              ¡Disfruta de una buena carne asada con una copa de vino o unas cervezas en nuestra zona relax!
            </Text>
          </>
        }
        {
          isMobile && <><Title>Comparte momentos</Title><Title>en familia</Title></>
        }
      </TextContainer>
      <PolaroidContainer>
        <PolaroidPic tilt={5} imageSrc={cuarto} />
        <PolaroidPic tilt={-20} imageSrc={patio} />
        <PolaroidPic tilt={15} imageSrc={sala} />
      </PolaroidContainer>
    </FlexContainer>
  )
};

export default ShareMoments;
