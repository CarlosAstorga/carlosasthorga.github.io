const baseUrl = "https://api.warframe.market/v1";
const btnOrders = document.getElementById('button');

btnOrders.addEventListener('click', getOrders);

function getOrders() {
    fetch(`${baseUrl}/profile/Monsxer/orders`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}