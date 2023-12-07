const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

const findOrange = (arr)=>{
    const orange = arr.indexOf("апельсин")
    if (orange !== -1) {
        console.log("Ура! нашел")
    } else {
        console.log("Придется поискать в другом магазине…")
    }
}

findOrange(words)