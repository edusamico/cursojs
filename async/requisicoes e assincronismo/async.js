async function getPosts() {
    document.getElementById('posts').innerHTML = "carregando";
    let req = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await req.json();
    showPosts(json);
}

function showPosts(lista) {
    let html = '';
    for (let i in lista) {
        html += "<h3>"+lista[i].title+"</h3>";
        html += lista[i].body+"<br/>";
        html += "<hr/>"
    }
    document.getElementById('posts').innerHTML = html;
}