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
const Brand = styled.div` margin-bottom: 25px; `;
const Nav = styled.nav` display: grid; gap: 6px; `;


const Item = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  color: #09090b;
  font-weight: 500;
  font-size: 14px;
  transition: background .15s, color .15s;

  &:hover { background: #f6f8fb; }
  &:focus-visible { outline: 2px solid #0e73f6; outline-offset: 2px; }

  &.active {
    background: #e8f5ff;
    color: #0e73f6;
  }
`;

const IconBox = styled.span`
  display: inline-grid;
  place-items: center;
`;


const Item = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  color: #09090b;
  font-weight: 500;
  font-size: 14px;
  transition: background .15s, color .15s;

  &:hover { background: #f6f8fb; }
  &:focus-visible { outline: 2px solid #0e73f6; outline-offset: 2px; }

  &.active {
    background: #e8f5ff;
    color: #0e73f6;
  }
`;

const IconBox = styled.span`
  display: inline-grid;
  place-items: center;
`;

export default function StudentLayout() {
  return (
    <Shell>
      <Aside>
        <Brand>
          <img src={Logo} alt="ПАЗЛ & КОД" aria-hidden="true" />
        </Brand>

        <Nav>
          <Item to="/student/tests" end aria-label="Перейти к списку тестов">
          <IconBox><TestsIcon /></IconBox>
          Тестирования
          </Item>

          <Item to="/student/statistics">
            <IconBox><StatsIcon /></IconBox>
            Статистика
          </Item>

          <Item to="/student/profile">
            <IconBox><ProfileIcon /></IconBox>
            Профиль
          </Item>
        </Nav>
      </Aside>

      <Main>
        <Outlet />
      </Main>
    </Shell>
  );
}



