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
  const target = event.currentTarget;
  // Target is the remove button
  // The target parent is the td element
  // The grandparent is the tr element
  // Selects the grandparent of the target
  const row = target.parentNode.parentNode
  row.remove()

  calculateAll()
}

// ITERATION 5
function createProduct() {
  // Select the create product context
  const productInfo = document.querySelector('.create-product')

  // Select the name input (which is the first one in that context)
  // const productName = productInfo.querySelector('input[ type=text]')
  const productName = productInfo.querySelector('input')

  //Select the price input
  // const productPrice = productInfo.querySelector('input[type=number]')
  const productPrice = productInfo.querySelector('input[placeholder="Product Price"]')
  
  // Grab the values
  const nameValue = productName.value
  const priceValue = productPrice.valueAsNumber

  // Check if the values are invalid 
  if (nameValue === '' || priceValue === 0) {
    // Preferably use a modal or maybe a toast
    window.alert('Please inform name and price')
    // stop function execution
    return
  } 

  const newRow = document.createElement('tr')
  newRow.className = 'product'

  // Create information that should go inside the Product Row that was created
  const newProduct = `
    <td class="name">
      <span>${nameValue}</span>
    </td>
    <td class="price">
      $<span>${priceValue}</span>
    </td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">
      $<span>0</span>
    </td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `
  // Put the information inside the row html
  newRow.innerHTML = newProduct

  // Add the event to the button that was created dinamically
  // Those buttons are created after the first events were added
  const removeButton = newRow.querySelector('.btn-remove')
  removeButton.addEventListener('click', removeProduct)

  // Append all the info to the tbody
  // Get the newRow to appear on the screen
  const tBodyElm = document.querySelector('tbody')
  tBodyElm.appendChild(newRow)

  // Reset the input values, so it's ready for the user to input a new value
  productName.value = ''
  productPrice.value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
	
  const removeButtons = document.querySelectorAll('.btn-remove')
  removeButtons.forEach(button => button.addEventListener('click', removeProduct))
  
  const createButton = document.getElementById('create')
  createButton.addEventListener('click', createProduct)

  // Creates the event listeners with a switch or if/else statement
  // const buttons = document.querySelectorAll('.btn')
  // buttons.forEach(button => {
  //   switch(button.id) {
  //     case 'calculate':
  //       button.addEventListener('click', calculateAll)
  //       break
  //     case 'create':
  //       button.addEventListener('click', createProduct)
  //       break
  //     default:
  //       button.addEventListener('click', removeProduct)
  //   }
  // })
});
