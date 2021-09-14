const button = document.getElementById("fetch-button");
const dogInfoParagraph = document.getElementById("dog-info");




button.addEventListener("click", () => {
    fetch("http://localhost:3000/api")
        .then(response => response.json())
        .then(customers => {
            customers.forEach((customer) => {
                const spanElement = document.createElement('span');
                 const convertStr = JSON.stringify(customer);
                 spanElement.textContent = convertStr;
                dogInfoParagraph.append(spanElement);
            });
        });
});