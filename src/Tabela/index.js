export default function Tabela (){
  
    let contatos =[
        {
            nome:'igor',
            telefone: '85 9 87876543',
            cidade: 'Caucaia-Ce',
        },
        {
            nome:'XeroVerde',
            telefone: '85 9 87879823',
            cidade: 'Fortaleza-ce',
        },
    ];

    return (
        <>
        <hr/>

        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Cidade</th>
                </tr>
            </thead>
                <tbody>
                    {contatos.mao(()=>{
                        return (
                            <tr>
                                <td>{contatos.nome}</td>
                                <td>{contatos.telefone}</td>
                                <td>{contatos.cidade}</td>                                
                            </tr>
                        )
                    })}
                </tbody>
        </table>
        </>
        
    )

}