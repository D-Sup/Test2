import React from 'react';
import styled, { css } from 'styled-components';

import BasicProfile from '../../assets/img/basic-profile.svg';
import useWebPImage from '../../hooks/useWebPImage';

function getProfileSrc(url, webpImg) {
  if (!!url && typeof url === "string" && url.includes("https://") && url !== "http://146.56.183.55:5050/Ellipse.png") {
    return webpImg;
  } else {
    return BasicProfile;
  }
}

function ProfileLg({ url = false }) {
  const webpImg = useWebPImage(url);
  return <ProfileLgStyle src={webpImg || BasicProfile} alt="" />
}

function ProfileMd({ url = false }) {
  const webpImg = useWebPImage(url);
  return <ProfileMdStyle src={getProfileSrc(url, webpImg)} alt="" />
}

function ProfileSm({ url = false, confirm }) {
  const webpImg = useWebPImage(url);
  return (
    <ProfileContainer confirm={confirm}>
      <ProfileSmStyle src={getProfileSrc(url, webpImg)} alt="" />
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  position: relative;
  &:after{
    position: absolute;
    top: 0;
    left: 15px;
    content: '';
    width:  12px;
    height: 12px;
    border-radius: 50%;
    background-color: #FF8B13;
    display: ${({ confirm }) => (confirm) ? 'block' : 'none'};
  }
`;

const ProfileCommonStyle = css`
  vertical-align: top;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileLgStyle = styled.img`
  ${ProfileCommonStyle}
  width: 110px;
  height: 110px;
`;

const ProfileMdStyle = styled.img`
  ${ProfileCommonStyle}
  width: 50px;
  height: 50px;
`;

const ProfileSmStyle = styled.img`
  ${ProfileCommonStyle}
  width: 40px;
  height: 40px;
`;

export { ProfileLg, ProfileMd, ProfileSm };
