import styled from 'styled-components';

export const SideBarStyled = styled.section`

  background-color: #8593ad;
  width: 210px;
  height: 100%;
  position: fixed;
  top: 0;
  overflow-y: ${({ action }) => action || 'scroll'};
  bottom: 0;
  left: 0;
  box-shadow: 5px 0px 5px 1px rgba(0, 0, 0, 0.1);
  transition: 200ms width;


  ::-webkit-scrollbar {
    width: 0px;
    background: ${({ bg }) => bg || 'transparent'}; /* make scrollbar transparent */
  }

  @media (max-width: 950px) {
    width: 75px;
  }

`