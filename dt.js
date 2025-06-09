document.addEventListener("DOMContentLoaded", function () {
    let cart = document.getElementById("cart");
    let cartItems = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");
    let total = 0;

    function addToCart(item, price) {
        let li = document.createElement("li");
        li.innerHTML = `${item} - ${price.toLocaleString()} VN�� 
            <button class="remove-item">���</button>`;
        
        cartItems.appendChild(li);
        total += price;
        totalPrice.textContent = total.toLocaleString() + " VN��";
        cart.style.display = "block";

        li.querySelector(".remove-item").addEventListener("click", function () {
            removeFromCart(li, price);
        });
    }

    function removeFromCart(itemElement, price) {
        itemElement.remove();
        total -= price;
        totalPrice.textContent = total.toLocaleString() + " VN��";
        if (total === 0) cart.style.display = "none";
    }

    document.querySelectorAll(".dish-card").forEach(dish => {
        dish.addEventListener("click", function () {
            let item = this.querySelector(".dish-title").textContent;
            let price = Math.floor(Math.random() * 50000 + 50000);
            addToCart(item, price);
        });
    });

    // Popup thanh to獺n
    let popup = document.getElementById("payment-popup");
    let openPopup = document.getElementById("open-payment-popup");
    let closePopup = document.querySelector(".close-popup");
    let zaloPay = document.getElementById("zalo-pay");
    let paypal = document.getElementById("paypal");
    let zaloQR = document.getElementById("zalo-qr");
    let paypalForm = document.getElementById("paypal-form");
    let cardInput = document.getElementById("card-number");
    let cardWarning = document.getElementById("card-warning");

    openPopup.addEventListener("click", function (event) {
        event.preventDefault();
        popup.style.display = "flex";
        zaloQR.style.display = "none";
        paypalForm.style.display = "none";
    });

    closePopup.addEventListener("click", function () {
        resetPaymentForm();
    });

    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            resetPaymentForm();
        }
    });

    zaloPay.addEventListener("click", function () {
        zaloQR.style.display = "block";
        paypalForm.style.display = "none";
    });

    paypal.addEventListener("click", function () {
        zaloQR.style.display = "none";
        paypalForm.style.display = "block";
    });

    // Ki廙�m tra s廙� th廕� ng璽n h�慙g PayPal
    cardInput.addEventListener("input", function () {
        let cardNumber = cardInput.value.replace(/\D/g, ""); // Ch廙� gi廙� l廕【 s廙�
        if (cardNumber.length > 0 && cardNumber.length !== 16) {
            cardWarning.textContent = "Số thẻ không hợp lệ! Vui lòng nhập 16 chữ số.";
            cardWarning.style.color = "red";
            cardWarning.style.display = "block";
        } else {
            cardWarning.textContent = "";
            cardWarning.style.display = "none";
        }
    });

    // Reset form khi �齅軟g popup
    function resetPaymentForm() {
        popup.style.display = "none";
        cardInput.value = ""; // X籀a s廙� th廕� �齅� nh廕計
        cardWarning.textContent = ""; // 廕盯 c廕τh b獺o
        cardWarning.style.display = "none";
        paypalForm.style.display = "none"; // 廕盯 form PayPal
        zaloQR.style.display = "none"; // 廕盯 QR ZaloPay
    }

    // X廙� l羸 khi b廕叮 n繳t Thanh to獺n PayPal
    document.querySelector(".pay-btn").addEventListener("click", function () {
        alert("Thanh toán qua PayPal đang được xử lý...");
    });
});