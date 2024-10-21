comp1.jsx


function Comp1(){

    let itens = ['item1','item2','item3','item4']
    let usuarios = [
        {id:1, nome:'João', idade: 25}, //0
        {id:2, nome:'Maria', idade: 30}, //1
        {id:3, nome:'Pedro', idade: 35} //2
    ]

    // let CriarCard = ({usuario}) => (
    //     <div style={{border: '1px solid red',backgroundColor:'azure',width:'250px'}}>
    //         <p>nome: {usuario.nome}</p>
    //         <p>Idade: {usuario.Idade}</p>
    //     </div>
    // )

    function CriarCard({usuario}){
        return(
            <div style={{border: '1px solid red',backgroundColor:'azure',width:'250px'}}>
                <p>nome: {usuario.nome}</p>
                <p>Idade: {usuario.idade}</p>
            </div>
        )
        
    }


    
    return(
        <>
            <h1>Loops com map</h1>
            <ul>
                {itens.map((item, i) => (
                    <li key={i}> {item} </li>
                ))}
            </ul>

            <h2>Usuarios</h2>
            <ul>
                {usuarios.map((usuario) =>(
                    <li key={usuario.id}> {usuario.nome} - {usuario.idade} anos </li>
                ))}
            </ul>

            <h2>Loop para criação de cards</h2>
            <div>
                {usuarios.map((usuario) => (
                    <CriarCard key = {usuario.id} usuario={usuario}/>
                ))}
            </div>


        </>
    )
}

export default Comp1
