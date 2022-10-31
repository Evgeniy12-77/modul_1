'use strick'
// функция выполняющая условие если товаров больше 10
const minSale = (cost) => {
    const allCost = cost * 0.97
    return allCost
}                    

//функция выполняющая условие - если покупка более 30000
const purchase = (cost) => {
    const allCost = (30000 + ((cost - 30000) * 0.85))
    return allCost
}


// функция выполняещая условия промокодов

const promocode = (cost, promo) => {
   const allCost = cost;
   if ( promo === 'METHED') {
        return allCost * 0.9
   } else if (promo === 'G3H2Z1') {
      if (allCost > 2000) {
            return allCost -= 500
   } 
   }

    return allCost;
    
}
// калькулятор

const calculate = (cost, amo, promo) => {
    let allCost = cost;
    const amount = amo;
    const salePromo = promo;
  
    if (amount > 10) {
      allCost = minSale(allCost);
  
      if (allCost > 30000) {
        allCost = purchase(allCost);
        allCost = promocode(allCost, salePromo);
      } else {
        allCost = promocode(allCost, salePromo);
      }
    } else if (allCost > 30000) {
      allCost = purchase(allCost);
      allCost = promocode(allCost, salePromo);
    } else {
      allCost = promocode(allCost, salePromo);
    }
  
    return allCost;
  }

  console.log(calculate(20000, 15, 'METHED'))