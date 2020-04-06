import styled from 'styled-components';

export const NavBrand = styled.img`
  max-height: 100%;
  object-fit: contain;
  object-position: center;
  width: auto;
`;

const navbarBorderRadius = '48px';
export const Navbar = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.hexColors.lightest};
  border-radius: 0 0 ${navbarBorderRadius} ${navbarBorderRadius};
  box-shadow: 0 2px 4px ${({ theme }) => theme.chromaColors.darkest.alpha(0.32)};
  display: flex;
  height: 10rem;
  left: 0;
  padding: 24px 128px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
`;
