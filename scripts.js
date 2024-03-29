function query() {
    let query = document.getElementById("search").value;
    document.getElementById("results").innerHTML = "";

    fetch(`http://localhost:42069/q=${query}`).then(response => response.json())
        .then(data => {
            console.log(data);
            let ul = document.createElement('ul');
            document.getElementById("results").appendChild(ul);

            data.forEach(element => {
                let listItem = document.createElement("li");
                ul.appendChild(listItem);

                let link = document.createElement("a");
                let desc = document.createElement("p");

                link.setAttribute("href", element.url);

                link.text = element.url
                desc.innerHTML = element.snippet;
                
                listItem.appendChild(link);
                listItem.appendChild(desc);
            })
        })
}