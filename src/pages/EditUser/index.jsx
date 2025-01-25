import { useEffect, useState, useRef } from "react";
import "./style.css";
import api from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";

function EditUser() {
  const { id } = useParams();

  const navigate = useNavigate();

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
  });

  async function getUser() {
    const userFromApi = await api.get(`/usuarios?id=${id}`);
    console.log(userFromApi.data);
    setUser(userFromApi.data[0]);
  }

  async function editUser() {
    const fields = {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    };

    const dataToUpdate = Object.fromEntries(
      Object.entries(fields).filter(([key, value]) => value !== "")
    );

    await api.put(`/usuarios/${id}`, dataToUpdate);

    return navigate("/home");
  }

  useEffect(() => {
    getUser();
    console.log(`usuario encontrado: ${user}`);
  }, []);

  return (
    <div className="container">
      <form>
        <h1>{`Editar Usuario: ${user.name}`}</h1>
        <input
          placeholder={user.name}
          name="name"
          type="text"
          ref={inputName}
        />
        <input placeholder={user.age} name="age" type="text" ref={inputAge} />
        <input
          placeholder={user.email}
          name="email"
          type="text"
          ref={inputEmail}
        />
        <button type="button" onClick={editUser}>
          Salvar
        </button>
      </form>
    </div>
  );
}

export default EditUser;
