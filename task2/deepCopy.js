function deepCopy(obj, clonesMap = new WeakMap()) {
  // вернем элемент если он не является объектом
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // проверяем наличие клона объекта
  if (clonesMap.has(obj)) {
    return clonesMap.get(obj);
  }

  const newObj = Array.isArray(obj) ? [] : {};
  // запоминаем объект во избежание бесконечных рекурсий
  clonesMap.set(obj, newObj);
  // копируем объект
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = deepCopy(obj[key], clonesMap);
    }
  }

  return newObj;
}
