const axios = require('axios');

const url = 'https://my-json-server.typicode.com/maurolcsilva/transactionsapi/employees';

// const user={
//     id: 125693,
//     name: 'Rafael Oliveira',
// }
// const nameEquals = (funcionario)=>
// funcionario.name===user.name
// &&funcionario.idfuncionario===user.id;
const userIsValido =async(user)=>{
    return await validar(user);
}
const validar=(user)=>{
    return axios.get(url)
    .then(resp=>{
            return resp.data.filter(
            funcionario=>funcionario.name===user.name
            &&funcionario.idfuncionario===user.id);   
    })
    .then(data=>data.length>0)
    .catch(err=> console.error(err));
}

module.exports=userIsValido;