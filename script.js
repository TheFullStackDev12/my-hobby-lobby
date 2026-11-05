// 1. Simple Like Counter Logic
let likes = 0;

function incrementLikes() {
    likes++;
    document.getElementById('like-count').innerText = likes;
    
    // Quick pop effect on click
    const btn = document.getElementById('like-button');
    btn.style.transform = 'scale(1.1)';
    setTimeout(() => btn.style.transform = 'scale(1)', 100);
}

// 2. Hobby Category Filter Logic
function filterHobbies(category) {
    // Manage button highlighting active states
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Highlight the clicked button
    event.target.classList.add('active');

    // Filter the cards
    const cards = document.querySelectorAll('.hobby-card');
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            if (card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}
