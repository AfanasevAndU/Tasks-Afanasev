function isValid(s) {
  const stack = [];
  // пары для элементов
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // если символ удовлетворяет условиям в задаче то пушим стек
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      // проверяем соответсвие пар, если стек пустой или соответствие не найдено, возвращаем false
      const openingBracket = pairs[char];
      if (!stack.length || stack.pop() !== openingBracket) {
        return false;
      }
    }
  }
  // очищаем стек
  return stack.length === 0;
}
