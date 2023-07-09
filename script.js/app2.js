'use strict';

var reviews = [
	{
		name: 'Client',
		testimonial:
			' Jane  really made a difference in our project. Highly recommended!',
	},

	{
		name: 'Recruiter',
		testimonial:
			" She delivered on on time.I recommend Miss Jane",
	},
	{
		name: 'Company',
		testimonial:
			' Her problem-solving skills have contributed greatly to the success of our project. Highly recommended!',
	},
	{
		name: 'Client',
		testimonial:
			'Jane has a deep understanding of user experience and creates intuitive interfaces that captivate users.',
	},
	{
		name: 'Recruiter',
		testimonial:
			" She delivered high-quality work and went above and beyond to ensure our satisfaction. I highly recommend her.",
	},

];

function getRandomReview() {
	return reviews[Math.floor(Math.random() * reviews.length)];
}

function displayReviews() {
	var reviewsContainer = document.getElementById('reviews');
	reviewsContainer.innerHTML = '';

	var numReviews = 5; // Number of reviews to display

	for (var i = 0; i < numReviews; i++) {
		var review = getRandomReview();
		var reviewElement = document.createElement('div');
		reviewElement.className = 'review';
		reviewElement.innerHTML =
			'<h3>' + review.name + '</h3><p>' + review.testimonial + '</p>';
		reviewsContainer.appendChild(reviewElement);
	}
}

displayReviews();

var hireMeButton = document.getElementById('hire-me-button');
hireMeButton.addEventListener('click', function () {
	window.location.href = 'tel:351920009647'; // Replace with your phone number
});
