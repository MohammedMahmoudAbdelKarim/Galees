// document.addEventListener('DOMContentLoaded', () => {
//     const container = document.querySelector('.input-range-container');


//     const rangeLower = document.querySelector('input[name="range-lower"]');
//     const rangeUpper = document.querySelector('input[name="range-upper"]');
//     const trackerBetween = document.querySelector('.input-range-tracker-between');
//     const minValue = 0;
//     const maxValue = Number(rangeUpper.getAttribute('max'));

//     let containerHoverOnPercent = 0;

//     const updateTrackerBetween = () => {
//         const lowerValue = Number(rangeLower.value);
//         const upperValue = Number(rangeUpper.value);
//         trackerBetween.style.width = `${((upperValue - lowerValue) / maxValue)  * 100 }%`;
//         trackerBetween.style.left = `${((lowerValue ) / maxValue ) *  100 }%`;
//     };
//     updateTrackerBetween();

//     const moveAppropriateThumbToUpper = () => {
//         const lowerValue = Number(rangeLower.value);
//         const upperValue = Number(rangeUpper.value);
//         const closeValue = maxValue / 10;

//         if (
//             upperValue - lowerValue < closeValue &&
//             upperValue > maxValue * .9
//         ) {
//             rangeLower.classList.add('display-upper');
//             rangeUpper.classList.remove('display-upper');
//         } else if (
//             upperValue - lowerValue < closeValue &&
//             lowerValue < maxValue * .1
//         ) {
//             rangeLower.classList.remove('display-upper');
//             rangeUpper.classList.add('display-upper');
//         } else {
//             const middleValue = lowerValue + (upperValue - lowerValue) / 2;
//             if (containerHoverOnPercent < middleValue / maxValue) {
//                 rangeLower.classList.add('display-upper');
//                 rangeUpper.classList.remove('display-upper');
//             } else {
//                 rangeLower.classList.remove('display-upper');
//                 rangeUpper.classList.add('display-upper');
//             }
//         }
//     };

//     [
//         'mouseenter',
//         'mousemove',
//         'touchstart',
//         'touchmove',
//     ].forEach(eventName => {
//         container.addEventListener(eventName, event => {
//             containerHoverOnPercent = event.offsetX / event.target.clientWidth;
//             moveAppropriateThumbToUpper();
//         }, false);
//     });

//     rangeLower.addEventListener('input', event => {
//         const lowerValue = Number(event.target.value);
//         const upperValue = Number(rangeUpper.value);
//         if (lowerValue < minValue) {
//             event.target.value = minValue;
//         } else if (lowerValue > upperValue) {
//             event.target.value = upperValue;
//         }
//         document.getElementById("lowRange").innerHTML = lowerValue;
//         moveAppropriateThumbToUpper();
//         updateTrackerBetween();
//     }, false);

//     rangeUpper.addEventListener('input', event => {
//         const lowerValue = Number(rangeLower.value);
//         const upperValue = Number(event.target.value);
//         if (upperValue > maxValue) {
//             event.target.value = maxValue;
//         } else if (upperValue < lowerValue) {
//             event.target.value = lowerValue;
//         }
//         document.getElementById("upperRange").innerHTML = upperValue;
//         moveAppropriateThumbToUpper();
//         updateTrackerBetween();
//     }, false);

// });

// // Document






// document.addEventListener('DOMContentLoaded', () => {
//     const container = document.querySelector('.input-range-container-2');

//     const rangeLower = document.querySelector('input[name="range-lower-2"]');
//     const rangeUpper = document.querySelector('input[name="range-upper-2"]');
//     const trackerBetween = document.querySelector('.input-range-tracker-between-2');
//     const minValue = 22;
//     const maxValue = Number(rangeUpper.getAttribute('max'));

//     let containerHoverOnPercent = 0;

//     const updateTrackerBetween = () => {
//         const lowerValue = Number(rangeLower.value);
//         const upperValue = Number(rangeUpper.value);
//         trackerBetween.style.width = `${(upperValue - lowerValue) / maxValue * 100}%`;
//         trackerBetween.style.left = `${lowerValue  / maxValue * 100}%`;
//     };
//     updateTrackerBetween();

//     const moveAppropriateThumbToUpper = () => {
//         const lowerValue = Number(rangeLower.value);
//         const upperValue = Number(rangeUpper.value);
//         const closeValue = maxValue / 10;

//         if (
//             upperValue - lowerValue < closeValue &&
//             upperValue > maxValue * .9
//         ) {
//             rangeLower.classList.add('display-upper');
//             rangeUpper.classList.remove('display-upper');
//         } else if (
//             upperValue - lowerValue < closeValue &&
//             lowerValue < maxValue * .1
//         ) {
//             rangeLower.classList.remove('display-upper');
//             rangeUpper.classList.add('display-upper');
//         } else {
//             const middleValue = lowerValue + (upperValue - lowerValue) / 2;
//             if (containerHoverOnPercent < middleValue / maxValue) {
//                 rangeLower.classList.add('display-upper');
//                 rangeUpper.classList.remove('display-upper');
//             } else {
//                 rangeLower.classList.remove('display-upper');
//                 rangeUpper.classList.add('display-upper');
//             }
//         }
//     };

//     [
//         'mouseenter',
//         'mousemove',
//         'touchstart',
//         'touchmove',
//     ].forEach(eventName => {
//         container.addEventListener(eventName, event => {
//             containerHoverOnPercent = event.offsetX / event.target.clientWidth;
//             moveAppropriateThumbToUpper();
//         }, false);
//     });

//     rangeLower.addEventListener('input', event => {
//         const lowerValue = Number(event.target.value);
//         const upperValue = Number(rangeUpper.value);
//         if (lowerValue < minValue) {
//             event.target.value = minValue;
//         } else if (lowerValue > upperValue) {
//             event.target.value = upperValue;
//         }
//         document.getElementById("exp-low").innerHTML = lowerValue;
//         moveAppropriateThumbToUpper();
//         updateTrackerBetween();
//     }, false);

//     rangeUpper.addEventListener('input', event => {
//         const lowerValue = Number(rangeLower.value);
//         const upperValue = Number(event.target.value);
//         if (upperValue > maxValue) {
//             event.target.value = maxValue;
//         } else if (upperValue < lowerValue) {
//             event.target.value = lowerValue;
//         }
//         document.getElementById("exp-up").innerHTML = upperValue;
//         moveAppropriateThumbToUpper();
//         updateTrackerBetween();
//     }, false);

// });
