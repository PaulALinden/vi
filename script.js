const events = {
    Barcelona: [
        {
            imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.KwoYsNz9OWU5j3dIuZbcLQHaEo%3Fpid%3DApi&f=1&ipt=aeb84c78747838bf9c36ed1aa9e3b8d4ebbe80879984675ce0db77a3472727f3&ipo=images',
            title: 'Malmö 🚅 Köpenhamn ✈️  Barcelona',
            text: 'Nu flyger vi!',
            targetDate: '2025-07-23T08:55:00',
        },
        {
            imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.wPJYFAmQt9ZJfQgMO0OInAHaFj%3Fpid%3DApi&f=1&ipt=791b086b942fd5adf96e014d9e3e0385b80c4e38b614cc2ea4f4965135af85a3&ipo=images',
            title: 'Sagrada Família 📍',
            text: 'Besök i Basilikan',
            targetDate: '2025-07-24T09:00:00',
        },
        {
            imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.VYp1-jrJyAq8fhxcKYVMNAHaE0%3Fpid%3DApi&f=1&ipt=3d6cb9e841b4a47cb15a08c35b7f66eb28c41763bbeec7b76e0b43549f124c05&ipo=images',
            title: 'Park Güell 📍',
            text: 'Besök i parken',
            targetDate: '2025-07-24T17:00:00',
        },
        {
            imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.ZEV0i8RGZTlp8v1PoKkbqQHaKO%3Fpid%3DApi&f=1&ipt=9b0c0877376ca206018d732f01dd0c477d71c37ff87c6f704b5bae23eac6d70c&ipo=images',
            title: 'Casa Batlló 📍',
            text: 'Besök på Casa Batlló',
            targetDate: '2025-07-25T09:00:00',
        }
    ],
    Mallorca: [
        {
            imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.uplSC124SNgXPiY-l1mOdAHaE7%3Fpid%3DApi&f=1&ipt=330a2616df6dd0c7c1c2f27a334d81f574be6302370901930984eeb37e500224&ipo=images',
            title: 'Barcelona ✈️  Mallorca-Palma',
            text: 'Vamos ala playa',
            targetDate: '2025-07-26T06:30:00',
        },
        {
            imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.yL5bkDPN0pjJYeywnzX0YQHaEG%3Fpid%3DApi&f=1&ipt=e42f6bd8d68afce3eec0d6150b36c8dbcbb4a03873fc4fb64814bed5da286c30&ipo=images',
            title: 'Mallorca-Palma ✈️  Köpenhamn 🚅 Malmö',
            text: 'Borta bra men hemma bäst <3',
            targetDate: '2025-07-30T07:25:00',
        }
    ],
    Stockholm: [
        {
            imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.H5gHn8fA8Vgvm24i_WTWJgHaEK%3Fpid%3DApi&f=1&ipt=47640d198726af9288877214dae05c5a107643cbb097964e7685ba3fd5b7e93f&ipo=images',
            title: 'Malmö 🚅 Köpenhamn ✈️  Stockholm',
            text: 'Kom igen nu Ed Sheeran!',
            targetDate: '2025-08-23T07:00:00',
        },
        {
            imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.eWmE2jgtJ-ReC_JkLknF1wHaEK%3Fpid%3DApi&f=1&ipt=f5a915aebbc8634a47e3371cc54a410f5ce06d8b5d9e0412aedee90e5d0a5cba&ipo=images',
            title: 'Solna, Strawberry Arena 📍',
            text: 'Konsert',
            targetDate: '2025-08-23T16:30:00',
        },
        {
            imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.H5gHn8fA8Vgvm24i_WTWJgHaEK%3Fpid%3DApi&f=1&ipt=47640d198726af9288877214dae05c5a107643cbb097964e7685ba3fd5b7e93f&ipo=images',
            title: 'Stockholm ✈️ Köpenhamn 🚅  Malmö',
            text: 'Nu drar vi hem -->',
            targetDate: '2025-08-24T20:40:00',
        }
    ]
};

const main = document.getElementById('cards');
const completedSection = document.createElement('div');
completedSection.id = 'completed';
main.appendChild(completedSection);

function createCategory(title, cards) {
    const wrapper = document.createElement('div');

    const header = document.createElement('h2');
    header.classList.add('category-header');

    // Välj emoji baserat på titel
    let emoji = '';
    if (title.toLowerCase().includes('barcelona')) emoji = '🌇';
    else if (title.toLowerCase().includes('mallorca')) emoji = '🏖️';
    else if (title.toLowerCase().includes('ed sheeran') || title.toLowerCase().includes('stockholm')) emoji = '🎤';

    const titleSpan = document.createElement('span');
    titleSpan.textContent = `${emoji} ${title}`;

    const arrow = document.createElement('span');
    arrow.textContent = '⬇️';
    arrow.className = 'arrow-icon';

    header.appendChild(titleSpan);
    header.appendChild(arrow);

    const cardContainer = document.createElement('div');
    cardContainer.style.display = 'none';

    header.onclick = () => {
        const isVisible = cardContainer.style.display === 'block';
        cardContainer.style.display = isVisible ? 'none' : 'block';
        arrow.textContent = isVisible ? '⬇️' : '⬆️';
    };

    cards.forEach(cardData => {
        const card = createCard(cardData);
        cardContainer.appendChild(card);
    });

    wrapper.appendChild(header);
    wrapper.appendChild(cardContainer);
    main.appendChild(wrapper);
}


function createCard({ imageSrc, title, text, targetDate }) {
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.src = imageSrc;

    const content = document.createElement('div');
    content.className = 'card-content';

    const header = document.createElement('div');
    header.className = 'card-title';
    header.textContent = title;

    const body = document.createElement('div');
    body.className = 'card-text';
    body.textContent = text;

    const countdown = document.createElement('div');
    countdown.className = 'card-countdown';

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = new Date(targetDate).getTime() - now;

        if (distance < 0) {
            completedSection.appendChild(card);
            countdown.textContent = 'Tiden har gått ut!';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        countdown.textContent = `Tid kvar: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    content.appendChild(header);
    content.appendChild(body);
    content.appendChild(countdown);

    card.appendChild(image);
    card.appendChild(content);

    return card;
}

function getCategory(title) {
    return Object.keys(events).find(category =>
        events[category].some(e => e.title === title)
    );
}

// Render all categories
Object.entries(events).forEach(([category, cards]) => {
    createCategory(category, cards);
});

// Sista rubrik för avklarade
const doneTitle = document.createElement('h2');
doneTitle.textContent = '✅ Avklarade event';
doneTitle.style.cursor = 'pointer';
doneTitle.onclick = () => {
    completedSection.style.display = completedSection.style.display === 'none' ? 'block' : 'none';
};

main.appendChild(doneTitle);
main.appendChild(completedSection); // <-- nu sist!





