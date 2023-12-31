
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import DarkModeBtn from '../DarkModeBtn';
import {ReactComponent as IconArrowLeft} from '../../assets/img/icon-arrow-left.svg'
import {ReactComponent as IconSMore} from '../../assets/img/icon-more.svg'

export default function BasicHeader({isButton, handleFunc}) {

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <BasicHeaderStyle>
      <IconArrowLeft onClick={handleGoBack} style={{cursor:'pointer'}}/>
      <DarkModeBtnPosition isButton={isButton}>
        <DarkModeBtn />
      </DarkModeBtnPosition>
      {isButton && <IconSMore onClick={handleFunc} style={{cursor:'pointer'}}/>}
    </BasicHeaderStyle>
  );
}

const BasicHeaderStyle = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 12px;
  width: var(--basic-width);
  min-height: 48px;
  box-shadow: var(--header-shadow);
  background-color: var(--header-color);

  @media (min-width: 768px) {
    display: none;
  }

  /* button {
    width: 22px;
    height: 22px;
    background-repeat: no-repeat;
    background-position: center;
  } */
  
  .backUrlBtn {
    background-image : url(${IconArrowLeft});
  }
  
  .moreBtn {
    background-image : url(${IconSMore});
  }
`;

const DarkModeBtnPosition = styled.div`
  position: absolute;
  right: ${({ isButton }) => (isButton) ? '56px' : '12px'};
`;