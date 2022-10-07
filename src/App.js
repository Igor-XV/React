import "./css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Tabela from "./Tabela";


function Button (props) {
  return (
    <a href={props.destino} className = "btn btn-primary">{props.children}</a>
      
  )
};


export default function App () {
  let estilo = {
    backgroundColor:'green',
    color: 'black',

  }

  let login = 'Login';

  return (
    <div>
      <h1 className="text-center"> {login}</h1>
      <hr/>

      <form>
        <input className="form" placeholder="Email"/>
        <input className="form" placeholder="Senha"/>
        <button style={estilo}>Entrar</button>

        <Button destino="http://google.com">teste</Button>
        <Button>teste</Button>
        <Button>teste</Button>
        
      </form>
       <Tabela/>
      

    </div>
  );
}

