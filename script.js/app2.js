'use strict';
// Your JavaScript code goes here
var reviews = [
	{
		name: 'John Okafor',
		testimonial:
			'Working with Miss Jane was an absolute pleasure. Her attention to detail and creativity in design really made a difference in our project. Highly recommended!',
	},
	{
		name: 'Chinaku Boyanu',
		testimonial:
			"I couldn't be happier with the work Miss E.A Jane Duru did for us. Their professionalism and expertise exceeded our expectations. I look forward to working together again.",
	},
	{
		name: 'Alex Johnson',
		testimonial:
			"The quality of Jane's work is outstanding. They have a great eye for design and their attention to detail is impressive. I am thrilled with the outcome of our collaboration.",
	},
	{
		name: 'Sarah Anyawu',
		testimonial:
			'Working with Jane has been a fantastic experience. Her innovative ideas and problem-solving skills have contributed greatly to the success of our project. Highly recommended!',
	},
	{
		name: 'David Wilson',
		testimonial:
			'Jane Duru is an exceptionally talented frontend developer. She has a deep understanding of user experience and create intuitive interfaces that captivate users. It was a pleasure working with Her.',
	},
	{
		name: 'Emily Anderson',
		testimonial:
			"I'm incredibly impressed with Duru's expertise and professionalism. She consistently delivered high-quality work and went above and beyond to ensure our satisfaction. I highly recommend Her.",
	},
	{
		name: 'Michael Roberts',
		testimonial:
			'I have worked with many developers, but Jane stands out from the rest. She has a rare combination of technical skill, creativity, and excellent communication. It was a pleasure collaborating with Her.',
	},
];

function getRandomReview() {
	var randomIndex = Math.floor(Math.random() * reviews.length);
	return reviews[randomIndex];
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

// hire me button
var hireMeButton = document.getElementById('hire-me-button');
hireMeButton.addEventListener('click', function () {
	window.location.href = 'tel:351920009647'; // Replace with your phone number
});
