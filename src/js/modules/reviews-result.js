export const getReviewsResult = () => {
    if(document.querySelector('.js-reviewsCircle')) {
        const reviewsCircle = document.querySelector('.js-reviewsCircle');
        let reviewsNumber = Number(document.querySelector('.js-reviewsNumber').innerHTML);
        reviewsNumber = reviewsNumber * 10 * 8.2;
        reviewsCircle.setAttribute('stroke-dasharray', `${reviewsNumber}, ${410 - reviewsNumber}`)
    }
}