import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  animation: ${rotate} 2s linear infinite;
  border-radius: 50%;
  border-top: 8px solid #3498db;
  border: 8px solid #f3f3f3;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  width: 40px;
`;

export default Loader;
