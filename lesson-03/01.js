const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString(array) {
   const flag= array.filter(el=>{
      return el === "черный" || el === "красный" || el === "желтый"
   })
   return flag.join('-')
}

console.log(createColorString(colors));
