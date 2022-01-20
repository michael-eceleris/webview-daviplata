export const createInsurrance = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve({
        status: 200,
        insuranceCreate: true,
        insuranceValue: 200000,
      });
    }, 1500);
  });
};
