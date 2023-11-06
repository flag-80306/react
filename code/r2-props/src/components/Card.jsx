// Criar um cartao
// que recebe um nome e uma imagem
// mostrar pelo menos 3 cartoes diferentes

function Card({ name, imageURL }) {  
    return(
        <>
            <div className="card">
                <img src={ imageURL} alt={ name } />
                <p>{ name }</p>
            </div>
        </>
    )
}

export default Card;