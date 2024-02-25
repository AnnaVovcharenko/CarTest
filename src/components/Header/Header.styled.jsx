import styled from '@emotion/styled';
import { Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
display: flex;
width: 100%;
padding: 20px 115px;
display: flex;
justify-content: space-between;
background-color: #3470ff;
`;

export const HeaderLink = styled(Link)`
color: white;
  font-family: 'Manrope';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  transition: all 5ms var(--transition);
  cursor: pointer;
  &: active,
  &: over,
  &: focus{
    color: white;
  font-family: 'Manrope';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  transition: all 5ms var(--transition);
  cursor: pointer;
  text-decoration: underline;
  scale: 1.1;
  }
`;

export const HeaderHeader = styled.div`
display: flex;
  gap: 30px;
`;

export const HeaderLogo = styled(Link)`

width: 120px;
padding: 0px 20px;
transition: all 5ms var(--transition);
cursor: pointer;
display: flex;
flex-direction: row;
`;

export const HeaderP = styled.p`
color: white;
font-family: 'Manrope';
font-size: 30px;
font-style: normal;
font-weight: 500;
transition: all 5ms var(--transition);
cursor: pointer;
`;

export const HeaderPQ = styled.div`
color: white;
font-family: 'Manrope';
font-size: 50px;
font-style: normal;
font-weight: 500;
transition: all 5ms var(--transition);
cursor: pointer;
`;

// export const HeaderContainer = styled.div`

// `;

// export const HeaderContainer = styled.div`

// `;
// export const HeaderContainer = styled.div`

// `;
// export const HeaderContainer = styled.div`

// `;
// export const HeaderContainer = styled.div`

// `;
// export const HeaderContainer = styled.div`

// `;