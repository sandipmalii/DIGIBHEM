document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('booking-form');
  const balanceAmountInput = document.getElementById('balance-amount');
  const totalRoomCostInput = document.getElementById('total-room-cost');
  const totalAmenitiesCostInput = document.getElementById('total-amenities-cost');
  const totalCostInput = document.getElementById('total-cost');
  const roomTypeSelect = document.getElementById('room-type');
  const amenitiesAC = document.getElementById('amenities-ac');
  const amenitiesLocker = document.getElementById('amenities-locker');
  const advancePaymentInput = document.getElementById('advance-payment');
  const numDaysInput = document.getElementById('num-days');
  const numPersonsInput = document.getElementById('num-persons');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const roomRates = {
      Delux: 2500,
      Suite: 4000
    };

    const extraPersonCost = 1000;
    const amenitiesACCost = 1000;
    const amenitiesLockerCost = 300;

    const selectedRoomType = roomTypeSelect.value;
    const isAmenitiesACSelected = amenitiesAC.checked;
    const isAmenitiesLockerSelected = amenitiesLocker.checked;
    const advancePayment = parseFloat(advancePaymentInput.value);
    const numDays = parseInt(numDaysInput.value);
    const numPersons = parseInt(numPersonsInput.value);

    const totalRoomCost = roomRates[selectedRoomType] * numDays;
    // const amenities = roomRates[amenities] * numDays;

    const totalAmenitiesCost = (isAmenitiesACSelected ? amenitiesACCost : 0) +
      (isAmenitiesLockerSelected ? amenitiesLockerCost : 0);
    const totalCost = totalRoomCost + totalAmenitiesCost;

    const extraPersonsCost = numPersons > 2 ? (numPersons - 2) * extraPersonCost * numDays : 0;
    const balanceAmount = totalCost - advancePayment - extraPersonsCost;

    balanceAmountInput.value = `${balanceAmount}/-`;
    totalRoomCostInput.value = `${totalRoomCost}/-`;
    totalAmenitiesCostInput.value = `${totalAmenitiesCost}/-`;
    totalCostInput.value = `${totalCost}/-`;
  });
});
