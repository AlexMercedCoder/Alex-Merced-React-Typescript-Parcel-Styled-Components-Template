import * as React from "react";
import styled from "styled-components";

export const Title = styled.h1`
  text-transform: uppercase;
  color: ${props => props.textcolor};
  text-decoration: underline;
`;

export const Row = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  margin: 10px auto;
  justify-content: space-around;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  background-color: silver;
  height: 400px;
  width: 330px;
  text-align: center;
`;

export const SmallCard = styled.div`
  height: 350px;
  width: 300px;
  background-color: silver;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
