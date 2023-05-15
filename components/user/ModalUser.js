import React, { useState } from 'react'

const ModalUser = () => {
  const [showModal, setShowModal] = useState(false)

    return (
    <div>
        {showModal ? (
          <div className={style.modalContainer}>
            <h2 className={style.modalHeading}>Your request has been sent successfully!</h2>
            <button className={style.modalButton} onClick={() => setShowModal(false)}>Close</button>
          </div>
        ) : null}
    </div>
  )
}

export default ModalUser