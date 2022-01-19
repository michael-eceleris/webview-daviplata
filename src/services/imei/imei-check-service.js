export const imei = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve({
        brand: "Huawei",
        model: "P30 Lite (256GB)",
        insuranceValue: 1500000,
        secureValue: 200000,
      });
    }, 1500);
  });
};
