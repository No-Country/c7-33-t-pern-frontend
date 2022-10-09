import {Link} from '@mui/material'
import {Settings} from '@mui/icons-material'

const Footer = () => (
  <footer>
    <div className="container__footer">
      <div className="box__footer">
        <div className="logo">
          <img alt="" src="Images/devmatch-logo-footer.png" />
        </div>
        <div className="terms">
          <p className="footer__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit cum cumque
            velit libero officiis quam doloremque reprehenderit quae corporis! Delectus architecto
            officia praesentium atque laudantium, nam deleniti sapiente deserunt.
          </p>
        </div>
      </div>
      <div className="box__footer">
        <h2>Configuración</h2>
        <Link to={Settings.location}>Ingresar</Link>
        <Link to={Settings.location}>Registrarse</Link>
        <Link to={Settings.location}>Mi perfil</Link>
        <Link to={Settings.location}>Stacks</Link>
      </div>

      <div className="box__footer">
        <h2>Compañia</h2>
        <Link to={Settings.location}>Acerca de</Link>
        <Link to={Settings.location}>Integrantes</Link>
        <Link to={Settings.location}>Trabajos</Link>
        <Link to={Settings.location}>Contacto</Link>
      </div>

      <div className="box__footer">
        <h2>Redes Sociales</h2>
        <Link to={Settings.location}>
          {' '}
          <i className="fab fa-facebook-square" /> Facebook
        </Link>
        <Link to={Settings.location}>
          <i className="fab fa-twitter-square" /> Twitter
        </Link>
        <Link to={Settings.location}>
          <i className="fab fa-linkedin" /> Linkedin
        </Link>
        <Link to={Settings.location}>
          <i className="fab fa-instagram-square" /> Instagram
        </Link>
      </div>
    </div>

    <div className="box__copyright">
      <hr />
      <p>
        © 2022 <b>C7-33</b>
      </p>
    </div>
  </footer>
)

export default Footer
