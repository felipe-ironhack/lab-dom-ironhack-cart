// ITERATION 1
function updateSubtotal(product) {
	const priceElm = product.querySelector('.price span').innerText
	const quantityElm = product.querySelector('.quantity input').value
  const subtotal = Number(priceElm) * Number(quantityElm)
  
  const subtotalElm = product.querySelector('.subtotal span')
  
  subtotalElm.innerText = subtotal
  return subtotal
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product')
  const productsCopy = [...allProducts]
  let total = 0
  productsCopy.forEach(product => total += updateSubtotal(product))

  // ITERATION 3
  const totalElm = document.querySelector('#total-value span')
  totalElm.innerText = total
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget.parentNode;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
	
  const rmvPricesBtn = [...document.getElementsByClassName('btn-remove')];
	rmvPricesBtn.forEach(btn => btn.addEventListener('click', removeProduct))

  //... your code goes here
});
