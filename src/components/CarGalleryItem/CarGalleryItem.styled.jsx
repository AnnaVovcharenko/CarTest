import styled from '@emotion/styled';

export const Container = styled.div`
  width: 274px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;


export const ContainerD = styled.div`
padding-left: 15px;
padding-right: 15px;
padding-bottom: 50px;
background-color: #ffffff;
padding-top: 50px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;






export const ImageAuto = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const TitleAuto = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  font-size: 16px;
  color: var(--black-color);
  font-weight: 500;
  line-height: calc(24 / 16);
`;

export const Model = styled.span`
  color: var(--blue-color);
`;

export const InfoAuto = styled.div`
  margin-top: 8px;
  margin-bottom: 28px;
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 14px;
  margin-right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    scale: 1.2;
  }
`;

export const Heart = styled.svg`
  stroke: var(--blue-color);
  fill: transparent;
`;

export const FavoriteHeart = styled.svg`
  stroke: var(--blue-color);
  fill: var(--blue-color);
`;

export const CatalogItem = styled.li`
  width: 274px;
`;

export const List = styled.ul`
  // display: flex;
  
  // align-items: baseline;
  // gap: 8px;
  // font-size: 12px;
  // color: var(--grey-color);
  // line-height: calc(18 / 12);
  // margin-top: 4px;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  max-width: calc(1440px - 230px);
`;

export const ListItem = styled.li`
  &:not(:last-child)::after {
    content: '';
    height: 16px;
    width: 1px;
    display: inline-block;
    background-color: var(--light-grey-color);
    margin-left: 5px;
  }
`;

export const LearnBtn = styled.button`
display: flex;
width: 274px;
height: 44px;
padding: 12px 99px;
justify-content: center;
align-items: center;
flex-shrink: 0;
border-radius: 12px;
background: #3470ff;
border: inherit;
cursor: pointer;
position: relative;
overflow: hidden;

color: var(--White, #fff);
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 20px;
transition: all 5ms var(--transition);
`;


export const FBtn = styled.div`
position: "absolute",
top: "6px",
right: "6px",
`;
