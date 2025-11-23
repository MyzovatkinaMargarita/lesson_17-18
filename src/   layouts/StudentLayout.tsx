/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { NavLink, Outlet } from "react-router-dom";
import { TestsIcon, ProfileIcon, StatsIcon } from "../icons/icons";
import Logo from "../assets/Vector.svg";

const Shell = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 240px 1fr;
  background: #fff;
`;

const Aside = styled.aside`
  border-right: 1px solid #eef1f6;
  padding: 30px 16px;
`;

const Main = styled.main`
  padding: 25px 30px;
  background-color: #fbfbfb;
`;

