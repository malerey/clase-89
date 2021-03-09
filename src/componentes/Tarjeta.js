const Tarjeta = ({ title, price, free}) => {

  return (
    <article>
      <h2>{title}</h2>
      <h3>{price}</h3>
      <h4>Envio gratuito: {free ? "Si" : "No"}</h4>
    </article>
  )
}

export default Tarjeta
