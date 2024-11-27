const cards = [
    {
        img: ["Img/1.jpg", "Img/2.jpg"],
        title: "Beautiful Beach",
        location: "Maldives",
        date: "2024-11-20 ~ 2024-12-15"
    },
    {
        img: ["Img/2.jpg", "Img/3.jpg"],
        title: "Mountain Hike",
        location: "Switzerland",
        date: "2024-12-05 ~ 2024-12-15"
    },
    {
        img: ["Img/3.jpg", "Img/4.jpg"],
        title: "City Lights",
        location: "Tokyo",
        date: "2024-12-15 ~ 2024-12-15"
    },
    {
        img: ["Img/6.jpg", "Img/1.jpg"],
        title: "City Lights",
        location: "Tokyo",
        date: "2024-12-15 ~ 2024-12-15"
    },
    {
        img: ["Img/2.jpg", "Img/3.jpg"],
        title: "City Lights",
        location: "Tokyo",
        date: "2024-12-15 ~ 2024-12-15"
    }
];

const cardContainer = document.querySelector('.cardContainer');
cards.forEach(card => {
    const cardHTML = `
        <div class="card">
            <img src="${card.img[0]}" alt="${card.title}" class="cardImg">
            <div class="cardContent">
                <h3 class="cardTitle">${card.title}</h3>
                <p>${card.location}</p>
                <span>${card.date}</span>
            </div>
        </div>
    `;
    cardContainer.innerHTML += cardHTML;
});