import React, { useState, useContext } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";
import PropTypes from "prop-types";

/**
 * Create input and return its value
 * @author Liliana Vasquez 
 * @param {string} name   name attribute of label
 * @param {string} label  label attribute of label
 * @param {string} type   type attribute of input
 * @return {string}       attributes of labels and inputs
 */

/**
 * TODO: Implement useRef/useReducer
 */

const Input = ({ name, label, type = "text" }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos del formulario y una manera de actualizar los mismos.
  const { userInfo, setUserInfo } = useContext(ContextoFormulario); 

  // También, utilizaremos un estado local para manejar el estado del input.
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input.
    const actualizarEstado = e.target.value;
    setInputValue(actualizarEstado); 
  };

  const onBlur = (e) => {
    e.preventDefault();
    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
    setUserInfo({...userInfo, [name]: e.target.value})
  };

  console.log(userInfo);

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={inputValue}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string
}

export default Input;
