import styled from 'styled-components';

export const ControlPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 100px;
  max-width: ${props => props.width};
  max-height: 820px;
  transition: 350ms;
  @media (max-width: 1250px) {
    padding: 18px 0;
    margin-left: 10px;
  }
  @media (max-width: 800px) {
    padding: 18px 0;
    margin-left: 10px;
    width: 300px;
  }
`;
export const Toggler = styled.button`
  cursor: pointer;
  position: relative;
  top: 50%;
  border: none;
  border-radius: 18px;
  z-index: 2;
  width: 25px;
  height: 105px;
  background-color: ${props => props.theme.black};
  @media (max-width: 800px) {
    height: 25px;
    width: 105px;
    margin: 15px auto;
  }
  &:after {
    display: block;
    position: absolute;
    left: 12px;
    top: -345px;
    width: 1px;
    z-index: 20;
    background-color: ${props => props.color || props.theme.black};
    content: '';
    transition: height 0.3s ease-out;
    height: 750px;
    @media (max-width: 1250px) {
      top: -280px;
      height: 600px;
    }
    @media (max-width: 900px) {
      top: -240px;
      height: 500px;
    }
    @media (max-width: 800px) {
      visibility: hidden;
      transition: 0s;
      height: 0px;
    }
  }
`;
export const ControlPanelButton = styled.button`
  cursor: pointer;
  background-color: green;
  border: none;
  height: 50px;
  width: 50px;
  font-size: 14px;
  position: relative;
  color: ${props => props.color || props.theme.black};
`;
export const HistoryBox = styled.div`
  font-size: 28px;
`;
