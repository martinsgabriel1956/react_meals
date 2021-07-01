import { createPortal } from 'react-dom'

import { BackdropStyle, ModalStyle, Content } from './styles';

function Backdrop(props) {
  return (
    <BackdropStyle onClick={props.onClose} />
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
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};