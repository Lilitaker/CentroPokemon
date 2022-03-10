import { useContext } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";

const Detalle = () => {
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en la vista previa.
  const { userInfo } = useContext(ContextoFormulario);
  console.log(userInfo);

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>{`Nombre: ${userInfo.nombre === undefined ? '' : userInfo.nombre}`}</p>
          <p>{`Apellido: ${userInfo.apellido === undefined ? '' : userInfo.apellido}`}</p>
          <p>{`Email: ${userInfo.email === undefined ? '' : userInfo.email}`}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>{`Nombre: ${userInfo.nombrePokemon === undefined ? '' : userInfo.nombrePokemon}`}</p>
          <p>{`Tipo: ${userInfo.tipoPokemon === undefined ? '' : userInfo.tipoPokemon}`}</p>
          <p>{`Elemento: ${userInfo.elementoPokemon === undefined ? '' : userInfo.elementoPokemon}`}</p>
          <p>{`Altura: ${userInfo.alturaPokemon === undefined ? '' : userInfo.alturaPokemon}`}</p>
          <p>{`Edad: ${userInfo.edadPokemon === undefined ? '' : userInfo.edadPokemon}`}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
