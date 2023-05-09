// import { useState } from 'react'
import "./MiOrg.css";
const MiOrg = (props) => {
  // const [mostrar, actMostrar] = useState(true)
  // // const manejarClick = ()=>{
  // //     console.log('Mostrar/Ocultar elemento')
  // //     actMostrar(!mostrar)
  // // }
  return (
    <section className="orgSection">
      <h3 className="title">Mi organizacion </h3>
      <img src="/img/add.png" alt="imgForm" onClick={props.cambiarMostrar} />
    </section>
  );
};

export default MiOrg;
