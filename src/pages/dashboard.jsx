import axios from "axios";
import { useEffect, useState } from "react";
import { Apiurl } from "../service/apirest";
const Dashboard = () => {

  const [nombreC, setNombreC] = useState("");
  const [descripcionC, setDescripcionC] = useState("");
  const [img, setImg] = useState("");


  const [datos, setDatos] = useState([]);
  const [Cursos, setCursos] = useState([]);


  const misDatos = () => {

    let token = localStorage.getItem("token");

    let headers = {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": 'Bearer ' + token
    };

    let url = Apiurl + "api/user_profile";
    axios.get(url, { headers: headers }).then(response => {
      setDatos(response.data.userData);
    })
  }

  const curso = () => {
    let token = localStorage.getItem("token");

    let headers = {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": 'Bearer ' + token
    };

    let url = Apiurl + "api/cursos";

    axios.get(url, { headers: headers }).then(response => {
      setCursos(response.data);
      console.log(response.data)
    })
  }

  useEffect(() => {
    curso();
    misDatos();
  }, [])


  const tabla = Cursos.map(x => {
    let { id, nombre, descripcion, img } = x;

    return (
      <>
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{nombre}</h5>
              <p className="card-text">{descripcion}</p>
              <br />
              <button type="button" className="btn btn-info">editar</button>
              <button type="button" className="btn btn-danger">eliminar</button>
            </div>
          </div>
        </div>


      </>
    );
  })


  const crearCurso = (e) => {
    e.preventDefault();
    let url = Apiurl + "api/cursos";
    let datos ={
      nombre : nombreC,
      descripcion : descripcionC,
      img : img
    }
    let token = localStorage.getItem("token");

    let headers = {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": 'Bearer ' + token
    };
    axios.post(url , datos , headers).then(response =>{
      console.log(response);
    })
    
  }







  return (
    <>
   
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" onClick={misDatos}>Search</button>
            </form>
          </div>
        </div>
      </nav>
      <section>

        <div className="container">
          <div className="row mt-4">
            <div className="col-lg-3">
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" > crear nuevo curso</button>
            </div>
          </div>
          <div className="row mt-4">
            {tabla}
          </div>
        </div>
      </section>
      <section>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form action="" onSubmit={(e) => crearCurso(e)}>
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" onChange={(e)=>setNombreC(e.target.value)} name="nombre" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Descripcion</label>
                    <input type="text" className="form-control" onChange={(e)=>setDescripcionC(e.target.value)} name="descripcion" />
                  </div>
                  <div className="mb-3 ">
                    <label className="from-label">imagen</label>
                    <input type="text" className="form-control" onChange={(e)=>setImg(e.target.value)} name="img" />

                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Registrar</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard;