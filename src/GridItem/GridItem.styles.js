import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0.2rem 0.6rem rgba(17, 21, 23, 0.1);

  img {
    width: 100%;
    height: 17rem;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
  }
`;

export const Details = styled.div`
  padding: 1.5rem 2rem;
  padding-bottom: 3rem;
  text-align: start;

  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    font-weight: 600;

    span {
      font-weight: 300;
    }
  }
`;
