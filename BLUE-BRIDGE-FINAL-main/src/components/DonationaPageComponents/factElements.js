import React from "react";

import {
  FactContainer,
  WaveBanner,
  Title,
  Description,
  FooterDecoration,
} from "../mainContent.styled";

export const FactElement = () => {
  return (
    <FactContainer>
      <WaveBanner> One community. One cause. <b> One Ateneo </b> </WaveBanner>
    </FactContainer>
  );
};

export default FactElement;
