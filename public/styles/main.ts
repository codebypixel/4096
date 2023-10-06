import styled from "styled-components";

const Papais = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
  font-weight: bold;
`;

export const Papai = styled(Papais)`
  background-color: #00ED5A
`;

export const Mamae = styled(Papais)`
  background-color: #FF74D0
`;

export const Filha = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.4rem;
  font-weight: semi-bold;
  background-color: #DCACFE
`;

