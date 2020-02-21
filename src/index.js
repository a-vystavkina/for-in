const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};


export default function order(objInput, sortValue) {
  const array = [];
  for (const key in objInput) {
    if (Object.prototype.hasOwnProperty.call(objInput, key)) {
      array.push(
        {
          key,
          value: objInput[key],
        },
      );
    }
  }

  for (let i = sortValue.length - 1; i > -1; i -= 1) {
    array.sort((a) => {
      if (a.key === sortValue[i]) return -1;
      return 1;
    });
  }

  const arrTemp = array.splice(sortValue.length);
  arrTemp.sort((a, b) => {
    if (a.key > b.key) return 1;
    return -1;
  });
  const arrReturn = array.concat(arrTemp);
  return arrReturn;
}
console.log(order(obj, ['name', 'level']));
