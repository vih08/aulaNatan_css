const botaoBuscar = document.getElementById("bota-buscar")
const campoEntrada = document.getElementById("entrada")

botaoBuscar.addEventListener("click", async ()=>{
    const busca = campoEntrada.value.toLowerCase().trim();

    if(!busca)return;

    try{
        const resposta = await fetch("")
        if(!resposta.ok) throw new Error("Pokemon não encontrado")


        const dados = await resposta.json();
        document.getElementById("nome").textContent = dados.name;
        document.getElementById("numero").textContent = `#${dados.id}`;
        document.getElementById("imagem").textContent = dados.name;



    } 
    
    
    
    
    
    
    catch (erro){
        alert(erro.message);
    }
});
