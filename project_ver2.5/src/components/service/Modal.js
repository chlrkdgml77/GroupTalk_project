import React from 'react'
import styles from "./Modal.module.css";

const Modal = () => {

  const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm}></div>
  }

  const ModalOverlay = (props) => {
    return (
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <button className='btn' onClick={props.onConfirm}>Okay</button>
        </footer>
      </div>
    )
  }

  return (
    <div>Modal</div>
  )
}

export default Modal