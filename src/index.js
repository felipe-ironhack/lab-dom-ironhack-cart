// ITERATION 1
function updateSubtotal(product) {
	const price = product.querySelector('.price span')
	const quantity = product.querySelector('.quantity input')

	const subtotal = price.innerText * quantity.valueAsNumber
	const subtotalElm = product.querySelector('.subtotal span')
	subtotalElm.innerText = subtotal

	return subtotal
}

function calculateAll() {
	let total = 0
	const products = document.querySelectorAll('.product')
	products.forEach((singleProduct) => {
		total += updateSubtotal(singleProduct)
	})

	const totalElm = document.querySelector('#total-value span')
	totalElm.innerText = total
}

// ITERATION 4
function removeProduct(event) {
	const target = event.currentTarget
	const targetParent = target.parentNode.parentNode

	targetParent.remove()
  calculateAll()
}

// ITERATION 5
function createProduct() {
	const productName = document.querySelector('input[placeholder="Product Name"]')
	const priceTag = document.querySelector('input[placeholder="Product Price"]')

	const nameValue = productName.value
	const priceValue = priceTag.valueAsNumber

  if (!nameValue || !priceValue) {
    alert('Please fill out the fields')
    return
  }

	const newRow = document.createElement('tr')
	newRow.className = 'product'

	newRow.innerHTML = `
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
  `

  const deleteBtn = newRow.querySelector('.btn-remove')
	deleteBtn.addEventListener('click', removeProduct)

	const cart = document.querySelector('tbody')
	cart.appendChild(newRow)

  productName.value = ''
  priceTag.value = 0 
}

window.addEventListener('load', () => {
	const calculatePricesBtn = document.getElementById('calculate')
	calculatePricesBtn.addEventListener('click', calculateAll)

	const deleteBtn = document.querySelectorAll('.btn-remove')
	deleteBtn.forEach((button) => {
		button.addEventListener('click', removeProduct)
	})

	const createBtn = document.querySelector('#create')
	createBtn.addEventListener('click', createProduct)
})
