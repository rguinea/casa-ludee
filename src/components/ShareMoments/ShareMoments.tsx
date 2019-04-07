import * as React from 'react';
import { isMobile } from 'react-device-detect';

import moment1 from '../../images/moments-1.jpg';
import moment2 from '../../images/moments-2.jpg';
import moment3 from '../../images/moments-3.jpg';

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
        <PolaroidPic tilt={5} imageSrc={moment1} />
        <PolaroidPic tilt={-20} imageSrc={moment2} />
        <PolaroidPic tilt={15} imageSrc={moment3} />
      </PolaroidContainer>
    </FlexContainer>
  )
};

export default ShareMoments;
