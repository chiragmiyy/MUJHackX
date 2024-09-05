const customerData = {};
const salesData = [];
const supportData = [];

function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function addCustomer() {
    const name = document.getElementById('customer-name').value.trim();
    const email = document.getElementById('customer-email').value.trim();
    if (name && email) {
        customerData[email] = name;
        const customerList = document.getElementById('customer-list');
        const listItem = document.createElement('li');
        listItem.textContent = `${name} (${email})`;
        customerList.appendChild(listItem);
        document.getElementById('customer-form').reset();
    }
}

function addSale() {
    const customerName = document.getElementById('sale-customer').value.trim();
    const amount = document.getElementById('sale-amount').value.trim();
    if (customerName && amount) {
        const saleList = document.getElementById('sale-list');
        const listItem = document.createElement('li');
        listItem.textContent = `${customerName} - $${amount}`;
        saleList.appendChild(listItem);
        salesData.push({ customerName, amount });
        document.getElementById('sale-form').reset();
    }
}

function addSupport() {
    const customerName = document.getElementById('support-customer').value.trim();
    const issue = document.getElementById('support-issue').value.trim();
    if (customerName && issue) {
        const supportList = document.getElementById('support-list');
        const listItem = document.createElement('li');
        listItem.textContent = `${customerName}: ${issue}`;
        supportList.appendChild(listItem);
        supportData.push({ customerName, issue });
        document.getElementById('support-form').reset();
    }
}

function getRecommendations() {
    const customerName = document.getElementById('recommendation-customer').value.trim();
    if (customerName) {
        const recommendations = generateRecommendations(customerName);
        const recommendationList = document.getElementById('recommendation-list');
        recommendationList.innerHTML = ''; // Clear previous recommendations
        recommendations.forEach(rec => {
            const listItem = document.createElement('li');
            listItem.textContent = rec;
            recommendationList.appendChild(listItem);
        });
        document.getElementById('recommendation-form').reset();
    }
}

function generateRecommendations(customerName) {
    // AI-driven recommendations simulation
    // In a real system, this would involve complex algorithms and data analysis
    return [
        `Recommended Product A for ${customerName}`,
        `Recommended Product B for ${customerName}`,
        `Recommended Product C for ${customerName}`
    ];
}

// Initialize default tab
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tablink').click();
});