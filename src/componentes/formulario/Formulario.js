import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../button";
const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [titulo, actualizarTitulo] = useState('')
  const [color, actualizarColor] = useState('')

  const { registrarColaborador, crearEquipo } = props;

  

  const manejarEnvio = (e) => {
    
    e.preventDefault();
    let datosEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(datosEnviar);
  };

  const manejarNuevoEquipo = (e)=>{
    e.preventDefault();
    crearEquipo({titulo, colorPrimario: color});
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <CampoTexto
          titulo="Nombre"
          placeholder="Ingresar Nombre..."
          required
          valor={nombre}
          setValor={setNombre}
        />
        <CampoTexto
          titulo="Puesto"
          placeholder="Ingresar Puesto..."
          required
          valor={puesto}
          setValor={setPuesto}
        />
        <CampoTexto
          titulo="Foto"
          placeholder="Ingresar Enlace de Foto..."
          required
          valor={foto}
          setValor={setFoto}
        />
        <ListaOpciones
          valor={equipo}
          setEquipo={setEquipo}
          equipos={props.equipos}
        />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el Equipo</h2>
        <CampoTexto
          titulo="Titulo"
          placeholder="Ingresar Titulo..."
          required
          valor={titulo}
          setValor={actualizarTitulo}
        />
        <CampoTexto
          titulo="Color"
          placeholder="Ingresar Color Hex..."
          required
          valor={color}
          setValor={actualizarColor}
          type = 'color'
        />
        <Boton>Registrar Equipo</Boton>
        </form>
    </section>
  );
};
export default Formulario;
