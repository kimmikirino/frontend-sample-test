import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  width: ${props => (props.small ? "20%" : "100%")};
  height: ${props => (props.small ? "auto" : "100%")};
  display: flex;
  flex-direction: ${props => (props.small ? "row" : "column")};
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  width: 20px;
  height: 20px;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.3s ease;
  margin-top: 300px;
  margin-left: -20px;
  position: relative;
  z-index: 9;
  &:hover {
    transform: scale(1.1);
    color: white;
  }
`;

export const Input = styled.input`
  width: 400px;
  height: 50px;
  border: none;
  border-bottom: 2px solid black;
  background-color: transparent;
  font-size: 30px;
  color: white;
  padding-left: 5px;
  margin-top: 300px;
  position: relative;

  &::placeholder {
    color: white;
    font-style: italic;
    opacity: 0.6;
  }
`;

export const Card = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  p {
    font-size: 40px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

export const Repo = styled(Link)`
  text-transform: uppercase;
  letter-spacing: 0.3em;
  margin-top: 10px;
  span {
    letter-spacing: 0;
    text-transform: lowercase;
    margin-right: 10px;
    font-size: 15px;
  }
`;
