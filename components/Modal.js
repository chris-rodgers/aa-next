import React from "react";
import ReactDOM from 'react-dom'
import styles from "../styles/components/Modal.module.scss";
import classnames from "classnames";
import useDelayUnmount from "../hooks/useDelayUnmount";

function Modal({ position = 'fullscreen', title, open, handleClose, children }) {
    // const shouldRenderChild = useDelayUnmount(open, 200);

    const className = classnames(styles.modal, styles['modal--position-' + position]/*, {
        [`${styles['modal--visible']}`]: true
    }*/);

    // React.useEffect(() => {
    //     document.body.style.overflow = shouldRenderChild ? 'hidden' : 'visible';
    // }, [shouldRenderChild])

    if (!open) {
        return null
    }

    return ReactDOM.createPortal(
        <div className={className}>
            <div className={styles.overlay} onClick={handleClose} />
            <div className={styles.spacer} />
            <div className={styles.container}>
                <div className={styles.header}>
                    {title ? <div className={styles.title}>
                        {title}
                    </div>: null}
                    <button className={styles['close-button']} onClick={handleClose}>×</button>
                </div>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}


// HOC
export default function withModal(WrappedComponent) {
    return ({ open, handleClose, position, title, ...rest }) => <Modal title={title} open={open} handleClose={handleClose} position={position}>
        {WrappedComponent ? <WrappedComponent handleClose={handleClose} {...rest} /> : null}
    </Modal>;
}