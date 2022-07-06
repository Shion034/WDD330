import { makeRequest } from "./authHelpers.js";
import Auth from "./auth.js";

makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
    });

const loginCall = new Auth();

const buttonCall = document.getElementById("button");
buttonCall.addEventListener('click', () => {
    console.log("HELP")
    loginCall.login(getPosts);
    console.log("TAKEN");
});

async function getPosts() {
    try {
        console.log("NEED")
        const getAllPosts = await makeRequest('posts', 'GET', null, loginCall.token);
        console.log(getAllPosts);
        let list = document.getElementById('list');
        list.innerHTML = '';
        for(let i = 0;  i < getAllPosts.length; i++){
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(getAllPosts[i].title));
            list.appendChild(li);
    }
    } catch(error) {
        console.log(error);
    }
    
    // return getAllPosts;
}