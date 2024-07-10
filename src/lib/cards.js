export const cards = [{
        id: 1,
        item: "#4A192C",
        cardsId: [{
                id: 1,
                parentId: 1,
                hide: true
            },
            {
                id: 2,
                parentId: 1,
                hide: true
            }
        ]
    },
    {
        id: 2,
        item: "#231A24",
        cardsId: [{
                id: 3,
                parentId: 2,
                hide: true
            },
            {
                id: 4,
                parentId: 2,
                hide: true
            }
        ]
    },
    {
        id: 3,
        item: "#343B29",
        cardsId: [{
                id: 5,
                parentId: 3,
                hide: true
            },
            {
                id: 6,
                parentId: 3,
                hide: true
            }
        ]
    },
    {
        id: 4,
        item: "#18171C",
        cardsId: [{
                id: 7,
                parentId: 4,
                hide: true
            },
            {
                id: 8,
                parentId: 4,
                hide: true
            }
        ]
    },
    {
        id: 5,
        item: "#1C542D",
        cardsId: [{
                id: 9,
                parentId: 5,
                hide: true
            },
            {
                id: 10,
                parentId: 5,
                hide: true
            }
        ]
    },
    {
        id: 6,
        item: "#ED760E",
        cardsId: [{
                id: 11,
                parentId: 6,
                hide: true
            },
            {
                id: 12,
                parentId: 6,
                hide: true
            }
        ]
    }
]


export const shuffleCards = (array) => {
    let currentIndex = array.length;

    while (currentIndex != 0) {

        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
}

export const handleShuffle = (cards) => {
    let newShuffle = [];
    [...cards].map((card) => {
        newShuffle.push(card.cardsId[0], card.cardsId[1]);
    });
    shuffleCards(newShuffle);
    return newShuffle;

};