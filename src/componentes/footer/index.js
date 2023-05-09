import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/Footer.png)" }}
    >
      <div className="redes">
        <a href="https://www.aluracursos.com">
          <img src="/img/facebook.png" alt="facebook" />
        </a>
        <a href="https://www.aluracursos.com">
          <img src="/img/instagram.png" alt="instagram" />
        </a>
        <a href="https://www.aluracursos.com">
          <img src="/img/twitter.png" alt="twitter" />
        </a>
      </div>
      <img src="/img/Logo.png" alt="Org" />
      <strong>Desarrollado por Emanuel Moreno</strong>
    </footer>
  );
};

export default Footer;
