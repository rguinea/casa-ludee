// @ts-ignore
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components';


export const Option = styled(AnchorLink)`
	font-family: Datalegreya;
	font-size: 18.8px;
	font-weight: 100;
	text-align: center;
  text-transform: uppercase;
  margin: 11px;
  position: relative;
  text-decoration: none;
  &::after {
    content: "";
    width: 3px;
    height: 43px;
    position: absolute;
    right: -11px;
    top: -11px;
    transition: all 0.3s;
    
  }
  &:hover {
    &::after {
      transition: all 0.3s;
      transform: rotate(90deg) scaleY(2) translate(10px, 25px);
    }
  }
`;

export const Container = styled.ul<{isInitial: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 99;
  height: 55px;
  width: 100%;
  padding: 25px 0;
  margin: 0;
  list-style: none;
  transition-timing-function: linear;
  ${Option} {
    color: ${({isInitial}) => isInitial ? "white" : "#1f1e1e"}
    &::after {
      background: ${({isInitial}) => isInitial ? "white" : "#1f1e1e"}
    }
  }
  li:last-child > ${Option} {
    &::after {
      display: none;
    }
  }
  background-color: ${({isInitial}) => isInitial ? "" : "rgba(255,255,255,0.75)"}
`;
export const Logo = styled.img<{isInitial: boolean}>`
  filter: ${({isInitial}) => isInitial ? "brightness(0) invert(1);" : "none;"}
  height: 100%;
  margin-right:75px
`;

