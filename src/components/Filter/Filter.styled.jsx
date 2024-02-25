// import styled from '@emotion/styled';
import { styled } from 'styled-components';

export const FilterHeader = styled.form`
display: flex;
  gap: 18px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  flex-direction: column;
  @media (min-width: 600px){
    display: flex;
    gap: 18px;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 50px;
  }
  @media (min-width: 1040px){
    display: flex;
    gap: 18px;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 50px;
    flex-direction: row;
  }
`;
export const FilterBlock = styled.div`
gap: 18px;
@media (min-width: 600px) {  
    display: flex;  
}
`;
export const FilterInput = styled.div`
position: relative;
// display: flex;
// width: calc(160px * 2);
`;
export const Svg = styled.svg`
position: absolute;
right: 5px;
top: 48px;
background-color: #f7f7fb;
pointer-events: none;

`;
export const Label = styled.label`
color: #8a8a89;
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 18px;
margin-bottom: 8px;

`;
export const DivInput = styled.div`
display: flex;
  width: calc(160px * 2)

`;
export const FilterSelectBrands = styled.select`
display: flex;
  flex-direction: column;
  gap: 8px;
  width: 224px;
  height: 48px;
  outline: none;
  border: none;

  padding: 16px 89px 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 14px;
  background: #f7f7fb;

`;
export const SelBrOption = styled.option`
color: rgba(18, 20, 23, 0.2);
font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

`;
export const FilterSelect = styled.select`
display: flex;
flex-direction: column;
gap: 8px;
width: 224px;
height: 48px;
outline: none;
border: none;

padding: 16px 89px 10px 40px;
justify-content: center;
align-items: center;
gap: 32px;
border-radius: 14px;
background: #f7f7fb;

`;
export const FilSelOption = styled.option`
display: inline-flex;
height: 272px;
padding: 14px 8px 14px 18px;
justify-content: flex-end;
align-items: flex-start;

color: rgba(18, 20, 23, 0.2);
font-family: 'Manrope';
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px;

background: #fff;
border: 1px solid rgba(18, 20, 23, 0.05);
border-radius: 14px;

`;
export const BefP = styled.p`
position: absolute;
top: 35px;
left: 20px;
color: #121417;
font-family: 'Manrope';
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px;

`;
export const AfterP = styled.p`
position: absolute;
top: 35px;
left: 70px;
color: #121417;
font-family: 'Manrope';
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px;

`;
// font-family: 'ManropeMedium';
//   font-size: 16px;

export const InputLeft = styled.input`
display: flex;
  width: 160px;
  height: 48px;
  outline: none;
  border: none;
  align-items: center;
  padding-left: 60px;
  position: relative;

  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  &:-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const InputRight = styled.input`
display: flex;
  width: 160px;
  height: 48px;
  outline: none;
  border: none;
  padding-left: 35px;
  align-items: center;
  background-color: #0b44cd;
  position: relative;

  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;
  &:-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const SpanLeft = styled.p`
position: absolute;
  top: 35px;
  left: 20px;
  color: #121417;
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

`;

export const SpanRight = styled.p`
position: absolute;
top: 35px;
left: 170px;
color: #121417;
font-family: 'Manrope';
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px;

`;

export const FilterBtn = styled.button`
display: flex;
width: 136px;
height: 48px;
padding: 14px 44px;
justify-content: center;
align-items: center;
flex-shrink: 0;
border-radius: 12px;
background: #3470ff;
border: inherit;
cursor: pointer;
position: relative;
overflow: hidden;
transition: all 5ms var(--transition);

color: var(--White, #fff);
font-family: Manrope;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 20px;
&:hover,
&:focus{
    background: #0b44cd;  
}
`;
export const SpanOn = styled.span`
transition: top 0.5s;
position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

`;
export const SpanTwo = styled.span`
transition: top 0.5s;
position: absolute;
  width: 100%;
  top: 150%;
  left: 0;
  transform: translateY(-50%);

`;
// export const FilterBlock = styled.div`


// `;
// export const FilterBlock = styled.div`


// `;
// export const FilterBlock = styled.div`


// `;



// .Filter__btn:hover .btn-text-one {
//     top: -100%;
//   }
  
//   .Filter__btn:hover .btn-text-two {
//     top: 50%;
//   }