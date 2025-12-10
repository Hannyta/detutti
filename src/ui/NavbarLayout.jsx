import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: #1e8fff11;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 0.1rem;
    align-items: center;
  }
`;

export const Badge = styled.span`
  background-color: #e74883;
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 6px;
  margin-left: 4px;
  display: inline-block;
  line-height: 1;
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  color: #005BAC;
  font-weight: 600;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ebefff;
    color: #005BAC;
    transform: translateY(-2px);
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  }

  @media (max-width: 420px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.6rem;
  }
`;