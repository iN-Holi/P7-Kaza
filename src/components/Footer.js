import Logo from '../assets/logoFooter.svg'

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="logo du site Kasa" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
