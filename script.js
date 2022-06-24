function func(arr1, arr2) {
  // lista cu elemetele din prima lista care nu apara in a doua lista
  var arr3 = arr1.filter((x) => {
    return arr2.indexOf(x) == -1;
  });
  //lista cu elemte din a doua lista care nu apar in prima lista
  var arr4 = arr2.filter((x) => {
    return arr1.indexOf(x) == -1;
  });
  //lista cu elemte diferite dintre cele doua liste
  arrFinal = arr3.concat(arr4);
  console.log(arrFinal);
  let sum = 0;
  //adunare elemtelor din lista finala
  for (i = 0; i < arrFinal.length; i++) {
    sum += arrFinal[i];
  }
  console.log(sum);
}
