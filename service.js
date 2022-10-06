
//RECETA PARA CONSUMIR APIS CO JS PURO

//1. PA ONDE VAS MIJO
//URI DEL SEVICIO
const URI="https://api.spotify.com/v1/artists/5nGIFgo0shDenQYSE0Sn7c/top-tracks?market=us"

//2.TIENES DATOS ESPECIALES 
//HAY DATOS DE CONTROL EN LA PETICION?
const TOKEN="Bearer BQBGV0EEr8D4dxnjto2AefdM1u5w1s1EthxdG9eM6CxZ9uvAVVnpiqM4R0JcU09213TxZWYKixXAcW4q8Nu2uYB13m_VdEe77xGjx6_5tniLyabOnBteW6ktwoh5zL6Ki2kiM50HDuyyQBQr7gH91l-GhWecCzXHtZ2J-GFUTaXMur08K_SKFa7VNc2-R864BtM"

//3. QUE VAS A MANDAR
//CONFIGURA LA PETICION (LA PETICION ES UN OBJETO)
const PETICION={
    method: "GET",
    headers:{Authorization:TOKEN}
}
    

//4. ARRANCA
//UTILIZAR UNA PROMESA LLAMADA FETCH
fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){
    console.log(respuesta)
})