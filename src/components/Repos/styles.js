import styled from "styled-components";

import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  p.history {
    font-size: 31px;
    text-transform: uppercase;
    margin: 50px 0px 10px 0px;
  }

  & > ul {
    width: 300px;
  }

  & > ul > li {
    display: inline-block;
    color: #000;
    letter-spacing: 0.2px;
    margin-bottom: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.vertical ? "column" : "row")};
  align-items: center;
  justify-content: center;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  p {
    font-size: 20px;
    color: #fff;
    font-weight: bold;
  }

  span {
    cursor: pointer;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.5px;
    text-align: left;
    transition: all 0.3s ease;
    &:hover {
      color: #ccc;
    }
  }

  & > ul > li {
    flex-shrink: 0;
    max-width: 200px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 30px;
  color: #000;
  font-weight: bold;
  letter-spacing: 0.3px;
  margin: 40px 0px;
`;
