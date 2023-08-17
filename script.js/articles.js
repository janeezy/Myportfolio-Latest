'use strict';

const articlesContainer = document.querySelector('.articles-container');

const articlesData = [
  {
    title: 'Here are some tips on how to use ChatGPT effectively',
    content: 'Get the most out of your interactions with this AI language model...',
    link: 'https://medium.com/@janeezy/here-are-some-tips-on-how-to-use-chatgpt-effectively-and-get-the-most-out-of-your-interactions-with-73e8bb95b77d',
  },
  {
    title: 'Unlocking Opportunities for Junior Frontend Developers:  ',
    content:'Making a Positive Impact...',
    link: 'https://medium.com/@janeezy/unlocking-opportunities-for-junior-frontend-developers-promoting-fair-hiring-practices-in-tech-71e44eb95522',
  },

  {
    title: '— -📚 Tutorial: Creating a Responsive Navigation Bar with CSS and JavaScript 🌐  ',
    content:'Navigation Bar with CSS and JavaScript 🌐...',
    link: 'https://medium.com/@janeezy/-9c515acb6786',
  },

  {
    title: 'several online platforms where you can sell your code and earn money.   ',
    content:'Here are a few options you can explore:...',
    link: 'https://janeezy.medium.com/as-a-frontend-engineer-there-are-several-online-platforms-where-you-can-sell-your-code-and-earn-3a78b04a5db9',
  },
  // Add more articles
];
function createArticleCard(article) {
  const articleCard = document.createElement('div');
  articleCard.className = 'article-card zoom-in';
  articleCard.innerHTML = `
    <h3>${article.title}</h3>
    <p>${article.content}</p>
    <a href="${article.link}" target="_blank">Read more</a>
  `;
  return articleCard;
}

function displayArticles() {
  articlesData.forEach((article) => {
    const articleCard = createArticleCard(article);
    articlesContainer.appendChild(articleCard);

    // Apply zoom-in animation
    setTimeout(() => {
      articleCard.classList.remove('zoom-in');
    }, 100);

    // Apply zoom-out animation after a delay
    setTimeout(() => {
      articleCard.classList.add('zoom-out');
    }, 4000);
  });
}

displayArticles();