import * as React from 'react';
import { BlueText, CursiveText, Divider, FlexContainer, FlexItem, NumberText, Text } from './Stats.styled';
import { IPropTypes, IPropTypesSingleStat } from './Stats.types';

const SingleStat: React.FC<IPropTypesSingleStat> = (props) =>
  <FlexItem>
    <NumberText>
      {props.value}
    </NumberText>
    <Text>
      {props.name}
    </Text>
  </FlexItem>
;


const Stats: React.FC<IPropTypes> = (props): JSX.Element => {
  const { beds, guests, house, rooms } = props;
  return (
    <>
      <FlexContainer>
        <SingleStat value={house} name='Casa entera' />
        <Divider />
        <SingleStat value={guests} name='Huéspedes' />
        <Divider />
        <SingleStat value={rooms} name='Recámaras' />
        <Divider />
        <SingleStat value={beds} name='Camas' />
      </FlexContainer>
      <CursiveText>Comodidad y confort</CursiveText>
      <BlueText>Un hogar para todos</BlueText>
    </>
  )
};

export default Stats;
