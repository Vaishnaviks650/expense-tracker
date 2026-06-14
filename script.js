let total = 0;

function addExpense() {
    const name = document.getElementById("expenseName").value;
    const amount = parseFloat(
        document.getElementById("expenseAmount").value
    );

    if (name === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid expense name and amount");
        return;
    }

    total += amount;

    document.getElementById("total").textContent = total;

    const li = document.createElement("li");

    li.innerHTML = `
        ${name} - ₹${amount}
        <button class="delete-btn">❌</button>
    `;

    li.querySelector(".delete-btn").addEventListener("click", function () {
        total -= amount;
        document.getElementById("total").textContent = total;
        li.remove();
    });

    document.getElementById("expenseList").appendChild(li);

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}
