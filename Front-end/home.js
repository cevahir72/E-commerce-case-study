
fetch('./helpers/products.json')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('cardContainer');

    data.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');

      const name = document.createElement('h3');
      name.textContent = product.name;

      const price = document.createElement('p');
      price.textContent = '$' + product.price;

      const description = document.createElement('p');
      description.textContent = product.description;

      const button = document.createElement('button');
      button.textContent = "Sepete Ekle";

      card.appendChild(name);
      card.appendChild(price);
      card.appendChild(description);
      card.appendChild(button);

      cardContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });