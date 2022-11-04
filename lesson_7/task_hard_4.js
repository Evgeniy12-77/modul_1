const allСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

// Используем Екмаскрипт 6

  const sumCheckCash = () => {
    const itogSum = allСashbox.reduce((sum, pair) => sum + pair[1], 0) / allСashbox.reduce((sum, pair) => sum + pair[0], 0);                  
    // Делим общую сумму товаров на общее кол-во товаров
    console.log(itogSum);
};

sumCheckCash();