let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
}

function updateCartUI() {
    const cartList = document.getElementById('cartItems');
    const totalPriceEl = document.getElementById('totalPrice');
    
    cartList.innerHTML = '';
    total = 0;

    if (cart.length === 0) {
        cartList.innerHTML = '<li>ยังไม่มีสินค้าในตะกร้า</li>';
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            let li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price} บาท`;
            cartList.appendChild(li);
        });
    }
    totalPriceEl.textContent = total;
}

function sendOrder() {
    let name = document.getElementById('customerName').value;
    let phone = document.getElementById('customerPhone').value;
    let address = document.getElementById('customerAddress').value;

    if (cart.length === 0) {
        alert('กรุณาเลือกเมนูก๋วยเตี๋ยวก่อนครับ!');
        return;
    }
    if (!name || !phone || !address) {
        alert('กรุณากรอกชื่อ เบอร์โทร และที่อยู่จัดส่งให้ครบถ้วนครับ');
        return;
    }

    let orderText = `📦 *มีออเดอร์ใหม่จากเว็บเดลิเวอรี่!*\n\n`;
    cart.forEach(item => {
        orderText += `- ${item.name} (${item.price} บาท)\n`;
    });
    orderText += `\n💰 *ยอดรวม:* ${total} บาท\n`;
    orderText += `👤 *ชื่อ:* ${name}\n`;
    orderText += `📞 *โทร:* ${phone}\n`;
    orderText += `📍 *ที่อยู่:* ${address}\n`;

    // ตัวอย่าง: ส่งข้อมูลเข้า LINE หรือเปิด WhatsApp / หน้าต่างสรุป
    let encodedText = encodeURIComponent(orderText);
    
    // หากต้องการส่งเข้า LINE ของร้านโดยตรง (เปลี่ยนเบอร์โทรเป็นเบอร์ร้าน หรือใช้ LINE OA Link)
    // หรือเด้งไปหน้าสรุปเพื่อก๊อปปี้ส่งแชท
    alert('สร้างออเดอร์สำเร็จ! ระบบจะพาคุณไปสรุปข้อมูลส่งร้าน');
    
    // ตัวอย่างเปิด Line ส่งข้อความหาตัวเองหรือร้าน (ใส่เบอร์ร้านแทนที่เบอร์ด้านล่าง)
    window.open(`https://line.me/R/msg/text/?${encodedText}`, '_blank');
}
