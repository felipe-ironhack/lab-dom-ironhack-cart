// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span');

  const quantity = product.querySelector('.quantity input');

  const subtotal = parseFloat(price.innerHTML) * quantity.valueAsNumber;

  const subtotalElement = product.querySelector('.subtotal span');

  subtotalElement.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  let total = 0;

  const productNodes = document.getElementsByClassName('product');

  const productList = [...productNodes];

  productList.forEach((product) => {
    updateSubtotal(product);
    total += updateSubtotal(product);
  });

  const totalElement = document.querySelector('#total-value span');

  totalElement.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  console.log()
  const target = event.currentTarget;

  const parent = target.parentNode.parentNode;

  parent.remove();

  calculateAll();
}

// ITERATION 5


function createProduct() {
  const nameInput = document.querySelector('.create-product input');
  let nameValue = nameInput.value;

  const priceInput = document.querySelector('.create-product input[type=number]');
  let priceValue = priceInput.valueAsNumber;

  if (nameValue === '' || priceValue === 0){
    window.alert('You should add the informations')
    return
  }

  let newProduct = document.createElement('tr')
  newProduct.className = 'product'

  newProduct.innerHTML = `
    <td class="name">
      <span>${nameValue}</span>
    </td>
    <td class="price">$<span>${priceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const tbodyElement = document.querySelector('#cart tbody')

  tbodyElement.appendChild(newProduct)

  const removeBtn = newProduct.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct)

  nameInput.value = ''
  priceInput.value = 0

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName('btn-remove');
  for (let button of removeBtns) {
    button.addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
