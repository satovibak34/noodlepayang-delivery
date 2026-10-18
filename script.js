* {
    box-sizing: border-box;
    font-family: 'Prompt', sans-serif;
}
body {
    background-color: #f4f7f6;
    margin: 0;
    padding: 0;
    color: #333;
}
.shop-banner {
    width: 100%;
    height: 200px;
    overflow: hidden;
}
.shop-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.shop-info {
    background: #fff;
    padding: 15px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
.shop-info h1 {
    margin: 0;
    color: #d9534f;
}
.status {
    color: #28a745;
    font-size: 14px;
    margin-top: 5px;
}
.container {
    max-width: 600px;
    margin: 20px auto;
    padding: 0 15px;
}
h2 {
    font-size: 18px;
    border-left: 4px solid #d9534f;
    padding-left: 10px;
    margin-bottom: 15px;
}
.menu-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 25px;
}
.menu-card {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.menu-card img {
    width: 100%;
    height: 110px;
    object-fit: cover;
}
.menu-details {
    padding: 10px;
    text-align: center;
}
.menu-details h3 {
    font-size: 14px;
    margin: 0 0 5px 0;
}
.price {
    color: #d9534f;
    font-weight: 600;
    margin-bottom: 8px;
}
.menu-card button {
    background: #d9534f;
    color: #fff;
    border: none;
    padding: 6px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;
    width: 100%;
}
.menu-card button:active {
    background: #b52b27;
}
.cart-section {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
#cartList {
    list-style: none;
    padding: 0;
    margin: 0 0 15px 0;
    max-height: 150px;
    overflow-y: auto;
}
#cartList li {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid #eee;
    font-size: 14px;
}
.empty-cart {
    color: #999;
    text-align: center;
}
.total-box {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    border-top: 2px dashed #eee;
    padding-top: 10px;
    margin-bottom: 15px;
}
.total-box strong {
    color: #d9534f;
}
.checkout-form .form-group {
    margin-bottom: 10px;
}
.checkout-form label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 3px;
}
.checkout-form input, .checkout-form textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
}
.order-btn {
    width: 100%;
    background: #28a745;
    color: #fff;
    border: none;
    padding: 12px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 10px;
}
.order-btn:active {
    background: #218838;
}
