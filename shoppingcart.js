// Get all cart items
const cartItems = document.querySelectorAll('.cart-item');

// Variables for price calculation (in VND)
const subtotal = 290000;
const tax = 29000;
let deliveryFee = 90000;
let discount = 0;
let total = subtotal + tax + deliveryFee;

// DOM Elements for price display
const totalPrice = document.getElementById('total-price');

// Item prices (unit price in VND)
const itemPrices = {
    'Guacamole và Chips': 95000,
    'Tacos Al Pastor': 120000,
    'Churros': 75000
};

// Function to update cart subtotal and total
function updateCartTotals() {
    // Calculate new subtotal
    let newSubtotal = 0;

    cartItems.forEach(item => {
        const itemName = item.querySelector('.item-info h3').textContent;
        const quantity = parseInt(item.querySelector('.quantity-value').textContent);
        const unitPrice = itemPrices[itemName];

        newSubtotal += unitPrice * quantity;
    });

    // Update subtotal display
    var subtotalDisplay = document.getElementById('subTotalDisplay');
    subtotalDisplay.textContent = formatVND(newSubtotal);

    // Recalculate tax (10% of subtotal)
    const newTax = Math.round(newSubtotal * 0.1);
    var taxDisplay = document.getElementById('taxDisplay');
    taxDisplay.textContent = formatVND(newTax);

    // Update total
    total = newSubtotal + newTax + deliveryFee - discount;
    totalPrice.textContent = formatVND(total);
}

// Function to format price in VND
function formatVND(amount) {
    return amount.toLocaleString('vi-VN') + ' vnd';
}

// Add event listeners to quantity buttons
cartItems.forEach(item => {
    const minusButton = item.querySelector('.quantity-button:first-child');
    const plusButton = item.querySelector('.quantity-button:last-of-type');
    const quantityElement = item.querySelector('.quantity-value');
    const itemPriceElement = item.querySelector('.item-price');
    const itemName = item.querySelector('.item-info h3').textContent;
    const unitPrice = itemPrices[itemName];

    // Increase quantity
    plusButton.addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;

        // Update item price
        itemPriceElement.textContent = formatVND(quantity * unitPrice);

        // Update cart totals
        updateCartTotals();
    });

    // Decrease quantity
    minusButton.addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;

            // Update item price
            itemPriceElement.textContent = formatVND(quantity * unitPrice);

            // Update cart totals
            updateCartTotals();
        }
    });

    // Initialize item price display
    const initialQuantity = parseInt(quantityElement.textContent);
    itemPriceElement.textContent = formatVND(initialQuantity * unitPrice);
});

// Make remove buttons functional
const removeButtons = document.querySelectorAll('.remove-button');
removeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const cartItem = button.closest('.cart-item');
        cartItem.remove();

        // Check if cart is empty
        const remainingItems = document.querySelectorAll('.cart-item');
        if (remainingItems.length === 0) {
            document.querySelector('.cart-empty').style.display = 'block';
        }

        // Update cart totals
        updateCartTotals();
    });
});

//discount
const voucherInput = document.getElementById('voucher-input');
const applyButton = document.getElementById('apply-voucher');
const deliveryRow = document.getElementById('delivery-row');
const discountRow = document.getElementById('discount-row');
const discountValue = document.getElementById('discount-value');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const closePopup = document.getElementById('close-popup');

// Update the total price
function updateTotal() {
    total = subtotal + tax + deliveryFee - discount;
    totalPrice.textContent = formatVND(total);
}

// Show popup
function showPopup() {
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

// Hide popup
function hidePopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

// Apply voucher function
function applyVoucher() {
    const voucherCode = voucherInput.value.trim().toUpperCase();

    if (voucherCode === 'NHOM10') {
        // Apply free delivery
        const deliverySpan = deliveryRow.querySelector('span:last-child');
        deliverySpan.innerHTML = '<span class="strikethrough">90.000 vnd</span> 0 vnd';

        // Update the delivery fee and discount
        discount = deliveryFee;
        deliveryFee = 0;

        // Update discount row
        discountRow.style.display = 'flex';
        discountValue.textContent = '-' + formatVND(discount);

        // Update total
        updateTotal();

        // Show success popup
        showPopup();

        // Disable the input and button
        voucherInput.disabled = true;
        applyButton.disabled = true;
        applyButton.style.backgroundColor = '#999';
    } else if (voucherCode !== '') {
        // Invalid voucher code
        alert('Invalid voucher code. Please try again.');
    }
}

// Event listeners
applyButton.addEventListener('click', applyVoucher);
closePopup.addEventListener('click', hidePopup);
overlay.addEventListener('click', hidePopup);

// Allow Enter key to apply voucher
voucherInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        applyVoucher();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const addressTypeSelect = document.getElementById('address-type');
    const fullNameInput = document.getElementById('full-name');
    const phoneNumberInput = document.getElementById('phone-number');
    const addressInput = document.getElementById('address');
    const districtSelect = document.getElementById('district');

    const addressPresets = {
        home: {
            name: 'Nguyễn Văn A',
            phone: '0987654321',
            address: '144 Xuân Thủy',
            district: 'cau-giay'
        },
        company: {
            name: 'Công Ty ABC',
            phone: '0243456789',
            address: 'Tầng 5, Tòa Nhà XYZ, Duy Tân',
            district: 'cau-giay'
        },
        girlfriend: {
            name: 'Nguyễn Thúy B',
            phone: '0912345678',
            address: '25 Trúc Bạch, Nghĩa Dũng',
            district: 'ba-dinh'
        }
    };

    addressTypeSelect.addEventListener('change', function() {
        const selectedType = this.value;
        
        if (selectedType && addressPresets[selectedType]) {
            const preset = addressPresets[selectedType];
            
            fullNameInput.value = preset.name;
            phoneNumberInput.value = preset.phone;
            addressInput.value = preset.address;
            districtSelect.value = preset.district;
        } else {
            // Clear inputs if no preset is selected
            fullNameInput.value = '';
            phoneNumberInput.value = '';
            addressInput.value = '';
            districtSelect.value = '';
        }
    });
});