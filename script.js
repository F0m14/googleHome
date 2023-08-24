const websites = [
  {
    title: 'YouTube',
    url: 'https://www.youtube.com',
    image: 'youtube.png'
  },
  {
    title: 'YouTube Studio',
    url: 'https://studio.youtube.com/',
    image: 'youtube-studio.png'
  },
  {
    title: 'Twitch',
    url: 'https://www.twitch.tv/',
    image: 'twitch.png'
  },
  {
    title: 'Epic Games',
    url: 'https://www.epicgames.com/home/',
    image: 'epic_games.png'
  },
  {
    title: 'Discord',
    url: 'https://discord.com/login',
    image: 'discord.png'
  },
  {
    title: 'Git Hub',
    url: 'https://github.com/',
    image: 'github.png'
  },
  {
    title: 'Replit',
    url: 'https://replit.com/',
    image: 'replit.png'
  },
  {
    title: 'PlayStation',
    url: 'https://www.playstation.com/',
    image: 'ps.png'
  },
  {
    title: 'Xbox',
    url: 'https://www.xbox.com/',
    image: 'xbox.png'
  },
  {
    title: 'Pornhub (VPN REQUIRED)',
    url: 'https://www.pornhub.com',
    image: 'pornhub.png'
  },
];

const websitesContainer = document.getElementById('websites-container');

websites.forEach((website) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = website.image;
  image.alt = website.title;
  image.classList.add('card-image');
  card.appendChild(image);

  const content = document.createElement('div');
  content.classList.add('card-content');

  const title = document.createElement('h3');
  title.classList.add('card-title');

  const link = document.createElement('a');
  link.classList.add('card-link');
  link.href = website.url;
  link.textContent = website.title;
  title.appendChild(link);

  content.appendChild(title);

  card.appendChild(content);

  websitesContainer.appendChild(card);
});