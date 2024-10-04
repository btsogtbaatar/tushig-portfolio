import { useEffect } from 'react';

export interface ModalProps {
  children?: React.ReactNode;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export default function Modal(props: ModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        props.setShowModal(false);
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div onClick={() => props.setShowModal(false)}>
      {props.showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50">
            <div className="relative mx-auto">{props.children}</div>
          </div>

          <div
            className="fixed inset-0 bg-black bg-opacity-80 transition-opacity z-40"
            aria-hidden="true"
          ></div>
        </>
      ) : null}
    </div>
  );
}
