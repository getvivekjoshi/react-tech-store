import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
export default function Sidebar() {
  return (
    <ProductConsumer>
      {value => {
        const { links, sidebarOpen, handleSidebar } = value;
        return (

          <SideWrapper show={sidebarOpen}>
            <ul>
              {links.map(link => {
                return (
                  <li key={link.id}>
                    <Link
                      to={link.path}
                      className="sidebar-link"
                      onClick={handleSidebar}
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SideWrapper>

        );
      }}
    </ProductConsumer>
  );
}

const SideWrapper = styled.nav`
  position: fixed;
  top: 61px;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-right: 4px solid var(--primary-color);
  transition: all 0.03s ease-in-out;
  transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: all 0.03s ease-in-out;
  }
  .sidebar-link:hover {
    background: var(--primary-color);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
