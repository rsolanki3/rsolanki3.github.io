const button = document.querySelector("#clickMe");
const friends = ["Rinku", "Ruchi", "Brooke", "Ginna", "Megan", "Amy"];

button.addEventListener("click", function(){
    for (let i = 0; i < friends.length; i++){
      const user = document.createElement("h4");
      user.innerText = friends[i];
      document.body.appendChild(user);
    }
    const heading= document.createElement("h2");
    heading.innerText = "I've been clicked";
    document.body.appendChild(heading)
})
