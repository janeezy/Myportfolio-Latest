'use strict';
'use strict';

const reviews = [
	{
		name: 'Ngozi James',
		testimonial:
			'Jane really made a difference in our project. Highly recommended!',
	},
	{
		name: 'Recruiter',
		testimonial:
			'She delivered on time. I recommend Miss Jane.',
	},
	{
		name: 'Jether tech',
		testimonial:
			'Her problem-solving skills have greatly contributed to the success of our project. Highly recommended!',
	},
	{
		name: 'Williams',
		testimonial:
			'Jane has a deep understanding of user experience and creates intuitive interfaces that captivate users.',
	},
	{
		name: 'Peter brooks',
		testimonial:
			'She delivered high-quality work and went above and beyond to ensure our satisfaction. I highly recommend her.',
	},
];

const displayedReviews = new Set();

function getRandomReview() {
	let randomReview = reviews[Math.floor(Math.random() * reviews.length)];
	while (displayedReviews.has(randomReview)) {
		randomReview = reviews[Math.floor(Math.random() * reviews.length)];
	}
	displayedReviews.add(randomReview);
	return randomReview;
}

function displayReviews() {
	const reviewsContainer = document.getElementById('reviews');
	reviewsContainer.innerHTML = '';

	const numReviews = 5; // Number of reviews to display

	for (let i = 0; i < numReviews; i++) {
		const review = getRandomReview();
		const reviewElement = document.createElement('div');
		reviewElement.className = 'review';
		reviewElement.innerHTML =
			'<h3>' + review.name + '</h3><p>' + review.testimonial + '</p>';
		reviewsContainer.appendChild(reviewElement);
	}
}

displayReviews();
