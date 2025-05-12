// Універсальний інтерфейс
interface Container<T> {
  items: T[];
  addItem(item: T): void;
  getItem(index: number): T | undefined;
}
function getLastElement<T>(container: Container<T>): T | undefined {
  if (container.items.length === 0) return undefined;
  return container.items[container.items.length - 1];
}
// Контейнер чисел
const numberContainer: Container<number> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

// Контейнер рядків
const stringContainer: Container<string> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};
// Робота з числовим контейнером
numberContainer.addItem(10);
numberContainer.addItem(20);
console.log(numberContainer.getItem(0)); // 10
console.log(getLastElement(numberContainer)); // 20

// Робота з рядковим контейнером
stringContainer.addItem("hello");
stringContainer.addItem("world");
console.log(stringContainer.getItem(1)); // "world"
console.log(getLastElement(stringContainer)); // "world"
