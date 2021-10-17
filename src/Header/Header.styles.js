import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-block: 2rem;

  button {
    font-family: inherit;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(90%, 120rem);
`;

export const Title = styled.button`
  font-size: 2.4rem;
  font-weight: 800;
`;

export const Theme = styled.button`
  display: flex;
  align-items: center;

  font-size: 1.8rem;
  font-weight: 600;

  .icon {
    margin-right: 1rem;
    width: 1.8rem;
  }
`;
