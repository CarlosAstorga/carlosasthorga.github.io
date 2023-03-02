const baseUrl = "https://api.warframe.market/v1";
const btnOrders = document.getElementById('button');

btnOrders.addEventListener('click', getOrders);

function getOrders() {
    fetch(`${baseUrl}/profile/Monsxer/orders`, {
        headers: {
            "authorization": "JWT=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaWQiOiI4eUtjWkFNTnhycDlkaVRIbzZVRHRvYW8yY1l2S1Z4VCIsImNzcmZfdG9rZW4iOiIzNjM5YzJlODU4YmM2MjJmNGIzNGI1YzRjMTIwNDFmYzYyODUyZDkzIiwiZXhwIjoxNjgyOTcxOTY5LCJpYXQiOjE2Nzc3ODc5NjksImlzcyI6Imp3dCIsImF1ZCI6Imp3dCIsImF1dGhfdHlwZSI6ImNvb2tpZSIsInNlY3VyZSI6ZmFsc2UsImxvZ2luX3VhIjoiYidNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTEwLjAuMC4wIFNhZmFyaS81MzcuMzYnIiwibG9naW5faXAiOiJiJzI4MDY6MjY3OjE0OGI6OTgzYToyNDU4OmJiNDI6ZDA3Mzo4OWNmJyIsImp3dF9pZGVudGl0eSI6ImFkUk0wckd0djcxYVJqM2RlZUZ6bUthc3JuT051ZlMzIn0.X9qOxDXFUvlhb8d3gO3FT5LwyBYqVYXW8GwrTVXHfkw"
        }
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
}