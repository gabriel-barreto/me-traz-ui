import styled, { css } from 'styled-components';

import { breakpoint } from '../../styles';

const iconSize = '2.4rem';
const navbarBorderRadius = '48px';

export const NavBrand = styled.img`
  max-height: 100%;
  object-fit: contain;
  object-position: center;
  width: auto;
`;

const NavSearchFormVisible = css`
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
`;
export const NavSearchFormContainer = styled.div`
  background-color: ${({ theme }) => theme.hexColors.lightest};
  box-shadow: 0 2px 0 ${({ theme }) => theme.chromaColors.darkest.alpha(0.24)};
  display: block;
  left: 0;
  opacity: 1;
  padding: 4.8rem 3.2rem 1.6rem 3.2rem;
  position: fixed;
  top: 56px;
  transform: translateY(-100px);
  transition: opacity 200ms, transform 400ms, visibility 200ms;
  visibility: hidden;
  z-index: -1;
  width: 100%;
  will-change: opacity, transform, visibility;

  @media screen and (min-width: ${breakpoint('sm')}) {
    box-shadow: none;
    left: auto;
    padding: 0 4rem;
    position: relative;
    top: auto;

    ${NavSearchFormVisible};
  }

  &.--visible {
    ${NavSearchFormVisible};
  }
`;

export const Navbar = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.hexColors.lightest};
  border-radius: 0 0 ${navbarBorderRadius} ${navbarBorderRadius};
  box-shadow: 0 2px 4px ${({ theme }) => theme.chromaColors.darkest.alpha(0.32)};
  display: flex;
  height: 10rem;
  justify-content: space-between;
  left: 0;
  padding: 2.4rem 3.2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;

  @media screen and (min-width: ${breakpoint('md')}) {
    padding: 2.4rem 6.4rem;
  }
  @media screen and (min-width: ${breakpoint('lg')}) {
    justify-content: flex-start;
    padding: 2.4rem 12.8rem;
  }
`;

export const NavActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

export const NavSearchFormToggler = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.hexColors.primary};
  display: flex;
  fill: ${({ theme }) => theme.hexColors.primary};
  justify-content: center;
  outline-color: ${({ theme }) => theme.hexColors.primaryDark};
  padding: 1rem;
  transition: color 400ms, fill 400ms;
  will-change: color, fill;

  @media screen and (min-width: ${breakpoint('sm')}) {
    display: none;
  }
`;

export const NavChatLinkIcon = styled.span`
  color: ${({ theme }) => theme.hexColors.primary};
  display: block;
  fill: ${({ theme }) => theme.hexColors.primary};
  height: ${iconSize};
  transition: color 400ms, fill 400ms;
  width: ${iconSize};
  will-change: color, fill;
`;

export const NavChatLinkLabel = styled.p`
  color: ${({ theme }) => theme.hexColors.primary};
  font-size: 1.6rem;
  transition: color 400ms;
  white-space: nowrap;
  will-change: color;
`;

export const NavChatLink = styled.a`
  align-items: center;
  display: flex;

  @media screen and (max-width: ${breakpoint('sm')}) {
    padding: 1rem;
    > ${NavChatLinkLabel} {
      display: none;
    }
  }
  @media screen and (min-width: ${breakpoint('sm')}) {
    padding: 0.8rem;
    > ${NavChatLinkLabel} {
      display: initial;
    }
    > ${NavChatLinkIcon} {
      display: none;
    }
  }

  &:hover {
    > ${NavChatLinkLabel}, > ${NavChatLinkIcon} {
      color: ${({ theme }) => theme.hexColors.primaryDark};
      fill: ${({ theme }) => theme.hexColors.primaryDark};
    }
  }
`;
