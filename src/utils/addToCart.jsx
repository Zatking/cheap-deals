const addToCart = (product) => {
  // Lấy giỏ hàng hiện tại từ localStorage
  const existingCart = JSON.parse(localStorage.getItem('cart')) || []

  // Kiểm tra xem sản phẩm đã có trong giỏ chưa
  const existingItemIndex = existingCart.findIndex((item) => item.title === product.title)

  if (existingItemIndex !== -1) {
    // Nếu đã tồn tại, tăng số lượng
    existingCart[existingItemIndex].quantity += 1
  } else {
    // Nếu chưa có, thêm sản phẩm mới với quantity là 1
    existingCart.push({ ...product, quantity: 1 })
  }

  // Lưu lại vào localStorage
  localStorage.setItem('cart', JSON.stringify(existingCart))
}
export default addToCart
