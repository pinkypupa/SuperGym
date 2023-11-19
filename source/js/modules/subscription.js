const monthBtn = document.querySelectorAll('[data-month]');
const subscriptionPriceCoach = document.querySelector('[data-value="coach"]');
const subscriptionPriceDay = document.querySelector('[data-value="day"]');
const subscriptionPriceFull = document.querySelector('[data-value="full"]');
const allItems = document.querySelectorAll('[data-item]');
const itemCoach = document.querySelector('[data-item="coach"]');
const itemDay = document.querySelector('[data-item="day"]');
const itemFull = document.querySelector('[data-item="full"]');
const subscriptionButtons = document.querySelectorAll('[data-button]');

const prices = {
  oneMonth: {
    coach: '5000',
    day: '1700',
    full: '2700',
  },
  sixMonths: {
    coach: '30 000',
    day: '10 200',
    full: '16 200',
  },
  twelveMonths: {
    coach: '60 000',
    day: '20 400',
    full: '32 400',
  },
};

const monthName = {
  oneMonth: 'one-month',
  sixMonths: 'six-months',
  twelveMonths: 'twelve-months',
};

const removeClassActiveTab = (item) => {
  item.classList.remove('is-active');
};

const changeItemClass = (item, firstEl, secondEl, thirdEl) => {
  item.classList.remove(firstEl);
  item.classList.remove(secondEl);
  item.classList.add(thirdEl);
};

const changePrices = (monthChosen) => {
  if (monthChosen === monthName.oneMonth) {
    subscriptionPriceCoach.textContent = prices.oneMonth.coach;
    subscriptionPriceDay.textContent = prices.oneMonth.day;
    subscriptionPriceFull.textContent = prices.oneMonth.full;
    changeItemClass(itemCoach, 'card-list__item--coach-six', 'card-list__item--coach-twelve', 'card-list__item--coach');
    changeItemClass(itemDay, 'card-list__item--daily-six', 'card-list__item--daily-twelve', 'card-list__item--daily');
    changeItemClass(itemFull, 'card-list__item--full-six', 'card-list__item--full-twelve', 'card-list__item--full');
  }
  if (monthChosen === monthName.sixMonths) {
    subscriptionPriceCoach.textContent = prices.sixMonths.coach;
    subscriptionPriceDay.textContent = prices.sixMonths.day;
    subscriptionPriceFull.textContent = prices.sixMonths.full;
    changeItemClass(itemCoach, 'card-list__item--coach-twelve', 'card-list__item--coach', 'card-list__item--coach-six');
    changeItemClass(itemDay, 'card-list__item--daily-twelve', 'card-list__item--daily', 'card-list__item--daily-six');
    changeItemClass(itemFull, 'card-list__item--full-twelve', 'card-list__item--full', 'card-list__item--full-six');
  }
  if (monthChosen === monthName.twelveMonths) {
    subscriptionPriceCoach.textContent = prices.twelveMonths.coach;
    subscriptionPriceDay.textContent = prices.twelveMonths.day;
    subscriptionPriceFull.textContent = prices.twelveMonths.full;
    changeItemClass(itemCoach, 'card-list__item--coach', 'card-list__item--coach-six', 'card-list__item--coach-twelve');
    changeItemClass(itemDay, 'card-list__item--daily-six', 'card-list__item--daily', 'card-list__item--daily-twelve');
    changeItemClass(itemFull, 'card-list__item--full-six', 'card-list__item--full', 'card-list__item--full-twelve');
  }
};

const changeMonth = () => {
  if (monthBtn) {
    monthBtn.forEach(function (item) {
      item.addEventListener('click', function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-month');

        monthBtn.forEach(removeClassActiveTab);
        currentBtn.classList.add('is-active');
        changePrices(tabId);
      });
    });
  }
};

const changeItem = () => {
  if (allItems) {
    allItems.forEach(function (item) {
      item.addEventListener('click', function () {
        let currentBlock = item;
        allItems.forEach(removeClassActiveTab);
        currentBlock.classList.add('is-active');
        subscriptionButtons.forEach(removeClassActiveTab);
        item.querySelector('[data-button]').classList.add('is-active');
      });
    });
  }
};

export {changeItem, changeMonth};
