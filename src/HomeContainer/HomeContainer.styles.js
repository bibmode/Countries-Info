import styled from "styled-components";

export const Container = styled.div`
  background-color: hsl(0, 0%, 98%);
  min-height: calc(100vh - 7.2rem);
  padding-block: 5rem;

  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: min(90%, 120rem);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 5rem;
  width: 100%;
  position: relative;

  .loadingProgress {
    margin-top: 15rem;
    position: absolute;
    margin-left: 50%;
    transform: translateX(50%);
  }
`;
