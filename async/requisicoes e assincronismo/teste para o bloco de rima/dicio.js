async function getRimas () {
    
    document.getElementById('rimas').innerHTML = "carregando";

    let props = document.querySelector("#wordToSearch");
    
    props = props.value;
    let word = "";
    
    if (props.length > 3) {
        word = props.slice(props.length - 3);
    } else {
        word = props;
    }

    console.log(word);

    let url = 'https://api.dicionario-aberto.net/suffix/' + word;
    let req = await fetch(url);
    let json = await req.json();
    
    showRimas(json);
}

function showRimas(props) {
    let html = "sua palavra pode rimar com " + props.length + " palavras, são elas:";
    for(let i in props) {
        html += "<li>"+ props[i].word +"</li>";
    }
    document.getElementById('rimas').innerHTML = html;
}