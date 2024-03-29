import styled from '@emotion/styled';

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.8);
z-index: 100;
`;


export const Container = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;
