const btn = document.getElementById("fetch-posts");
//console.log(btn);
btn.onclick =() => {
    //console.log("fv fut");
    let xhr = new XMLHttpRequest();
   // console.log(xhr);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            //console.log(xhr.responseText);
            let posts = JSON.parse(xhr.responseText);
            //console.log(posts);
            let postList = "";
            for (const post of posts) {
                //összefűzéssel
                //postList += "<p>" + post.title + "</p>";
                //template literallal:
                postList += `
                <p>${post.title}</p> 
                `;
            }
            //adatok felpopulálása a konténerbe
            document.getElementById("post-list-container").innerHTML = postList;
        }else{
            console.log("Hiba a kérés során");
        }
    }

    //kapcsolati szál megnyitása
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    //kérés küldése
    xhr.send();
}