const getProductsOfNormalQuality = (pArray) => {
return pArray
      .filter((pQuality) => pQuality.quality.indexOf("Normal") !== -1 )
      .map((pQuality) => pQuality)
};

const getProductImageWithPngExtension = (pArray) => {
  return pArray
              .filter((pImag) => pImag.productImage.includes("png") == true)
              .map((pPng) => pPng)
};

const getCalorieOfTheMostExpensiveProduct = (pArray) => {
  return pArray.sort((a , b) => b.price - a.price) [0].totalCalories
};

const sortByExpirationDate = (pArray) => {
  return pArray
                .sort((a , b) => a.expireDate - b.expireDate)
                .map((pProduct) => pProduct)
};

export {
  getProductsOfNormalQuality,
  getProductImageWithPngExtension,
  getCalorieOfTheMostExpensiveProduct,
  sortByExpirationDate,
};
//why we should pull request when we are done the task???