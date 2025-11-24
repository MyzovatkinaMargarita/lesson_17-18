import React from "react";
import styled from "styled-components";

interface StudentHeaderProps {
  title: string;
  backTo?: string; // для будущего расширения
}

const Header = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d0d7de; 
  padding-bottom: 12px;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 28px;    
  font-weight: 700;     
  color: #0066cc;    
  margin: 0;
`;

export default function StudentHeader({ title }: StudentHeaderProps) {
  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  );
}

