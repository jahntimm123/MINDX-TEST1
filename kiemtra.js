if(localStorage.getItem("accounts" === null)){
    localStorage.setItem("accounts", JSON.stringify([]))
}
document.getElementById('signup').addEventListener("click", ()=>{
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const account = {
        username: username,
        email: email,
        password: password
    }

    const accounts = JSON.parse(localStorage.getItem("accounts"));
    accounts.push(account)
    localStorage.setItem("accounts", JSON.stringify(accounts));
})

const container = document.getElementById('container');
const accounts = JSON.parse(localStorage.getItem("accounts"));
// console.log(accounts);
accounts.forEach(function(item, index){
    const li = document.createElement("li");
    li.innerText = item.username;
    container.appendChild(li)

})