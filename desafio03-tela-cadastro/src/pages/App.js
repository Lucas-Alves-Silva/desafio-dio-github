import logo from '../assets/logotipo.png'
import user from '../assets/user.png'
import mail from '../assets/mail.svg'
import password from '../assets/password.svg'
import { Main } from './styles';
import { Nav } from './styles';
import { Menu } from './styles';
import { Container } from './styles';
import { Logotipo } from './styles';

function App() {
  return (
    <Main>
      <Nav>
      <Logotipo>
        <a href='http://localhost:3000/'><img src={logo} width={85} height={30}/></a>
      </Logotipo>
      <Menu>
          <ul>
            <a href='#'><li>Home</li></a>
            <a href='#'><li>Entrar</li></a>
            <a href='#'><li>Cadastrar</li></a>
          </ul>
        </Menu>
      </Nav>
      <Container>
          <div className='texto'><p><strong>A plataforma para você<br/> aprender com experts,<br/> dominar as principais<br/> tecnologias e entrar<br/> mais rápido nas<br/> empresas mais<br/> desejadas.</strong></p></div>
          <div className='tituloFormulario'><p><strong>Comece agora grátis</strong></p>
            <div className='subtituloFormulario'><p>Crie sua conta e make the change_</p></div>
              <form className='formulario'>
                  <img alt='' src={user}/><input type="text" name="nome" placeholder='Nome completo'/><br />
                  <img alt='' src={mail}/><input type="e-mail" name="e-mail" placeholder='E-mail'/><br />
                  <img alt='' src={password}/> <input type="password" name="senha" placeholder='Senha' /><br />
                  <button className='botaoBorda'><button className='botao'><a href='#'>Criar minha conta</a></button></button>
              </form>
              <div className='textoAbaixoBotao'><p>Ao clicar em "criar minha conta grátis",<br/>
              declaro que aceito as Políticas de<br/> Privacidade e os Termos de Uso da DIO.</p></div>
              <div className='textoAbaixoTextoBotao'><p><strong>Já tenho conta. <a href='#'>Fazer login</a></strong></p></div>
          </div>
      </Container>
    </Main>
  );
}

export default App;
