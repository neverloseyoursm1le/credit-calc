function calculate() {
  const amount = document.getElementById("amount").value;
  const months = document.getElementById("months").value;
  if (!amount || !months) {
    alert("Введите сумму и срок!");
    return;
  }
  const rate = 0.12; // 12% годовых
  const monthlyRate = rate / 12;
  const payment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  document.getElementById("result").innerText =
    `Ежемесячный платеж: ${payment.toFixed(2)} ₽`;
}

fetch("data.csv")
  .then(r => r.text())
  .then(text => {
    const rows = text.split("\n").map(r => r.split(","));
    const table = document.getElementById("data");
    rows.forEach(r => {
      const tr = document.createElement("tr");
      r.forEach(cell => {
        const td = document.createElement("td");
        td.innerText = cell;
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
  });
