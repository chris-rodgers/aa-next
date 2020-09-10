import React from "react";
import ReactDOM from 'react-dom'
import styles from "../styles/components/Modal.module.scss";
import classnames from "classnames";
import useDelayUnmount from "../hooks/useDelayUnmount";

function Modal({ position = 'fullscreen', ...props }) {
    const shouldRenderChild = useDelayUnmount(props.open, 200);

    const className = classnames(styles.modal, styles['modal--position-' + position], {
        [`${styles['modal--visible']}`]: props.open
    });

    React.useEffect(() => { 
        document.body.style.overflow = shouldRenderChild ? 'hidden' : 'visible';
    }, [shouldRenderChild])

    if (!shouldRenderChild) {
        return null
    }

    return ReactDOM.createPortal(
        <div className={className}>
            <div className={styles.overlay} onClick={props.handleClose} />
            <div className={styles.spacer} />
            <div className={styles.container}>
                <button className={styles['close-button']} onClick={props.handleClose}>×</button>
                {props.children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}


// HOC
export default function withModal(WrappedComponent) {
    return props => <Modal {...props}><WrappedComponent {...props} /></Modal>;
}