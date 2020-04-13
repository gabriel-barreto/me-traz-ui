import styled from 'styled-components';

import { breakpoint } from '../../styles';

import SearchForm from '../SearchForm';

export const NavBrand = styled.img`
  max-height: 100%;
  object-fit: contain;
  object-position: center;
  width: auto;
`;

export const NavSearchForm = styled(SearchForm)`
  display: none;
  margin: 0 4rem;
  @media screen and (min-width: ${breakpoint('sm')}) {
    display: block;
  }
`;

const navbarBorderRadius = '48px';
export const Navbar = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.hexColors.lightest};
  border-radius: 0 0 ${navbarBorderRadius} ${navbarBorderRadius};
  box-shadow: 0 2px 4px ${({ theme }) => theme.chromaColors.darkest.alpha(0.32)};
  display: flex;
  height: 10rem;
  justify-content: space-between;
  left: 0;
  padding: 24px 32px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;

  @media screen and (min-width: ${breakpoint('md')}) {
    padding: 2.4rem 6.4rem;
  }
  @media screen and (min-width: ${breakpoint('lg')}) {
    justify-content: flex-start;
    padding: 2.4rem 12.8rem;
  }
`;

export const NavChatLink = styled.a`
  color: ${({ theme }) => theme.hexColors.primary};
  font-size: 1.6rem;
  transition: color 400ms;
  white-space: nowrap;
  will-change: color;

  &:hover {
    color: ${({ theme }) => theme.hexColors.primaryDark};
  }
`;
