const purchasePrice = document.querySelector("#purchase-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const checkGainLossButton = document.querySelector("#submit-button");
const outputMessage = document.querySelector("#output");

function checkGainOrLossAndPercent(e) {
  if (purchasePrice.value < currentPrice.value) {
    var profit = (currentPrice.value - purchasePrice.value) * quantity.value;
    var profitPercent =
      ((currentPrice.value - purchasePrice.value) / purchasePrice.value) * 100;
    outputMessage.innerText = `yay..! you earned a profit of Rs.${profit} and the percent(gain) is ${profitPercent}`;
  } else if (purchasePrice.value > currentPrice.value) {
    var loss = (currentPrice.value - purchasePrice.value) * quantity.value;
    var lossPercent =
      ((currentPrice.value - purchasePrice.value) / purchasePrice.value) * 100;
    outputMessage.innerText = `ohh.No.! you got a loss of Rs.${loss} and the percent(loss) is ${lossPercent}`;
  } else {
    outputMessage.innerText = `No Gains or Losses for these prices`;
  }

  setTimeout(() => {
    purchasePrice.value = null;
    quantity.value = null;
    currentPrice.value = null;
  }, 2000);
  e.preventDefault();
}
checkGainLossButton.addEventListener("click", checkGainOrLossAndPercent);
