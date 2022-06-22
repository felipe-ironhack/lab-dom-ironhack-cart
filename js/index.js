// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span')

  const quantity = product.querySelector('.quantity input')

  const subtotal = parseFloat(price.innerHTML) 
                   * quantity.valueAsNumber
  
  const subtotalElement = product.querySelector('.subtotal span')
 
  subtotalElement.innerText = subtotal

  return subtotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  
  let total = 0

  const productNodes = document.getElementsByClassName('product')

  const productList = [...productNodes]

  productList.forEach(product => 
    {updateSubtotal(product);
    total += updateSubtotal(product);}
  )

  const totalElement = document.querySelector('#total-value span')
  
  totalElement.innerHTML = total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
 const parent = target.parentNode.parentNode
 console.log(parent)
 parent.remove()
 calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.getElementsByClassName('btn-remove')
  for (let button of removeBtns) {
  button.addEventListener('click', removeProduct)
  }
  //... your code goes here
});
