import { useState } from 'react'
import buttonClose from '../assets/collapseClose.svg'
import buttonOpen from '../assets/collapseOpen.svg'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className="collapse-container">
      <div className="collapse-logo">
        <h3 className="collapse-title">{title}</h3>
        <img
          onClick={() => setIsOpen(false)}
          src={buttonOpen}
          alt="menu deroulant ouvert"
        />
      </div>
      <p className="collapse-text">{content}</p>
    </div>
  ) : (
    <div className="collapse-container">
      <div className="collapse-logo">
        <h3 className="collapse-title">{title}</h3>
        <img
          onClick={() => setIsOpen(true)}
          src={buttonClose}
          alt="menu deroulant fermer"
        />
      </div>
    </div>
  )
}

export default Collapse
