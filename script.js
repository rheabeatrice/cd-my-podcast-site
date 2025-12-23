// Simple episodes renderer. Update the `episodes` array to add/edit episode rows.
// Each object: { id, image, alt, date, title, excerpt, url }

const episodes = [
  {
    id: 27,
    image: "episode-27-art.jpg",
    alt: "Episode 27 cover art",
    date: "12/5/25",
    title: "Episode 27: Chana-kah Masala (with Helen Zaltzman and Josey Baker)",
    excerpt: "Jingle Bells, caramels\n\nDo those two things rhyme?\n\nMy flour smells, you can tell\n\nIt spoils over time! Hey!",
    url: "#"
  },
  {
    id: 26,
    image: "episode-26-art.jpg",
    alt: "Episode 26 cover art",
    date: "11/22/25",
    title: "Episode 26: Another Great Conversation",
    excerpt: "Short excerpt from episode 26 — a brief teaser.",
    url: "#"
  }
];

function renderEpisodes(list){
  const container = document.getElementById('episodes-list');
  container.innerHTML = '';

  list.forEach(ep => {
    const row = document.createElement('article');
    row.className = 'episode-row';
    row.setAttribute('data-id', ep.id);

    // Image column
    const imgCol = document.createElement('div');
    imgCol.className = 'episode-image';
    const img = document.createElement('img');
    img.src = ep.image; // Replace with correct path or URL
    img.alt = ep.alt || `Episode ${ep.id} cover`;
    img.loading = 'lazy';
    imgCol.appendChild(img);

    // Content column
    const content = document.createElement('div');
    content.className = 'episode-content';

    const dateEl = document.createElement('div');
    dateEl.className = 'episode-date';
    dateEl.textContent = ep.date;
    content.appendChild(dateEl);

    const titleEl = document.createElement('h2');
    titleEl.className = 'episode-title';
    titleEl.textContent = ep.title;
    content.appendChild(titleEl);

    const excerptEl = document.createElement('p');
    excerptEl.className = 'episode-excerpt';
    excerptEl.innerHTML = ep.excerpt.replace(/\n/g, '<br>');
    content.appendChild(excerptEl);

    const readMore = document.createElement('a');
    readMore.className = 'read-more';
    readMore.href = ep.url || '#';
    readMore.textContent = 'Read More';
    content.appendChild(readMore);

    row.appendChild(imgCol);
    row.appendChild(content);
    container.appendChild(row);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderEpisodes(episodes);
  document.getElementById('year').textContent = new Date().getFullYear();
});
