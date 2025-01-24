import "./style.css";
import Trash from "../../assets/trash.svg";
import { use } from "react";

function Home() {
  const users = [
    {
      id: "2daosiubasof",
      name: "Rodolfo",
      age: "33",
      email: "erd@gmail.com",
    },
    {
      id: "2319861232",
      name: "Ana",
      age: "23",
      email: "ana@gmail.com",
    },
    {
      id: "2123123",
      name: "Matheus",
      age: "18",
      email: "oasnfaos@gmail.com",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="name" type="text" />
        <input placeholder="Idade" name="age" type="text" />
        <input placeholder="Email" name="email" type="text" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>

          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
