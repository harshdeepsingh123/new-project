import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

 const Images = ({ url, key }) => {
  return (
    <div>
      <Img key={key} src={url} alt="" />
    </div>
  )
}
export default  Images;
