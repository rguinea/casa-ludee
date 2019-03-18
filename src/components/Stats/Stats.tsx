import * as React from 'react';
import { Divider, FlexContainer, FlexItem, NumberText, Text } from './Stats.styled';
import { IPropTypes } from './Stats.types';

const Stats: React.FC<IPropTypes> = (props): JSX.Element => {
  const { beds, guests, house, rooms } = props;
  return <FlexContainer>
    <FlexItem>
      <NumberText>
        {house}
      </NumberText>
      <Text>
        Casa entera
      </Text>
    </FlexItem>
    <Divider />
    <FlexItem>
      <NumberText>
        {guests}
      </NumberText>
      <Text>
        Huéspedes
      </Text>
    </FlexItem>
    <Divider />
    <FlexItem>
      <NumberText>
        {rooms}
      </NumberText>
      <Text>
        Recámaras
      </Text>
    </FlexItem>
    <Divider />
    <FlexItem>
      <NumberText>
        {beds}
      </NumberText>
      <Text>
        Camas
      </Text>
    </FlexItem>
  </FlexContainer>
};

export default Stats;
