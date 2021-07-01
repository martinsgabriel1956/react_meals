import { createPortal } from 'react-dom'

import { BackdropStyle, ModalStyle, Content } from './styles';

function Backdrop(props) {
  return (
    <BackdropStyle />
  );
}

function ModalOverlay({children, ...props}) {
  return (
    <ModalStyle>
      <Content>
        {children}
      </Content>
    </ModalStyle>
  );
}

export function Modal({children, ...props}) {
  const portalElement =  document.querySelector('#overlays');

  return (
    <>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};