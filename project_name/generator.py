import csv

rows = [
    ["Сумма", "Срок", "Платеж"],
    [100000, 12, 8884.17],
    [200000, 24, 9414.86],
    [300000, 36, 9963.75],
]

with open("docs/data.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows(rows)

print("data.csv обновлён")
