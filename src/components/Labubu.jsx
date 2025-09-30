

const Labubu = ({ imagem, nome, preco}) => {
  return (
    <div class="labubu">
        <img src={imagem} />
        <div>
            <p>{nome}</p>
        <p>${preco}</p>
        </div>
        
    </div>
  )
}

export default Labubu