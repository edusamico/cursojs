function getPosts() {
    document.getElementById('posts').innerHTML = "carregando";
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(result) {
        return result.json();
    })
    .then(function(json) {
        showPosts(json);
    })
    .catch(function(error) {
        console.log(error);
    })
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