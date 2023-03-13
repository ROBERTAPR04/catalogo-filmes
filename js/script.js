let inputBuscarFilme= document.querySelector("#input-buscar-filme");
let btnBuscarFilme= document.querySelector("#btn-buscar-filme");

//btnBuscarFilme = () =>{
//if(inputBuscarFilme.value.length > 0){
//console.log(inputBuscarFilme.value);
//}
//return false;
//}

//btnBuscarFilme.onclick= () =>{
    //if(inputBuscarFilme.value.length > 0){
    //fetch("http://www.omdbapi.com/?i=tt3896198&apikey=670b97bd&s="+inputBuscarFilme.value,{mode:"cors"})
    //.then((resp)=> resp.json())
    //.then((resp)=> {
     //   console.log(resp);
   // })
    //}
  //  return false;
//}



  let listarFilmes = async (filmes) => {
	let listaFilmes = document.querySelector("#lista-filmes");
	listaFilmes.innerHTML = "";
	console.log(listaFilmes);
	if(filmes.length > 0) {
		filmes.forEach(async(filme) => {
			listaFilmes.appendChild(await filme.getCard());
		});
	}
}
    btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
          let filmes = new Array();
      fetch("http://www.omdbapi.com/?apikey=670b97bd&s="+inputBuscarFilme.value)
          .then((resp)=> resp.json())
          .then((resp)=> {
              resp.Search.forEach((item)=>{
                  console.log(item);
                  let filme=new Filme(
                      item.imdbID,
                      item.Title,
                      item.Year,
                      null,
                      null,
                      item.Poster,
                      null,
                      null,
                      null,
                      null,
                      null
                  );
                  filmes.push(filme);
                  
              });
              listarFilmes(filmes);
              
          })
          
    }
    return false;
  }