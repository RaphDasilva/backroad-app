import { pageLinks, socialLinks } from '../data';
const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url} className='footer-link'>
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return (
            <a
              href={link.url}
              key={link.id}
              target='_blank'
              rel='noreferrer'
              className='footer-icon'
            >
              <i className={link.icon}></i>
            </a>
          );
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
