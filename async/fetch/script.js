const DATA_BASE = 'https://jsonplaceholder.typicode.com/posts';

const btn = document.getElementById("btn");
btn.addEventListener('click', loadPosts);

async function loadPosts (){
    document.getElementById("posts").innerHTML = "loading...";

    let json = await 
        (await fetch (DATA_BASE))
    .json();
    loadBlog(json);

    /*fetch(DATA_BASE)
    .then(function(result){
        return result.json();
    })
    .then (function(json) {
        loadBlog(json);
    })
    .catch(function(error){
        console.log("deu erro");
    });*/
}

function loadBlog(list){
    let html = '';
    for (let i in list){
        html +='<h3>'+list[i].title+'</h3>';
        html += list[i].body + '<br/>';
        html +='<br/>'
    }
    document.getElementById("posts").innerHTML = html;
}