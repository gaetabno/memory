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
    },
    {
        id: 7,
        item: "#999950",
        cardsId: [{
                id: 13,
                parentId: 7,
                hide: true
            },
            {
                id: 14,
                parentId: 7,
                hide: true
            }
        ]
    },
    {
        id: 8,
        item: "#B32428",
        cardsId: [{
                id: 15,
                parentId: 8,
                hide: true
            },
            {
                id: 16,
                parentId: 8,
                hide: true
            }
        ]
    },
    {
        id: 9,
        item: "#403A3A",
        cardsId: [{
                id: 17,
                parentId: 9,
                hide: true
            },
            {
                id: 18,
                parentId: 9,
                hide: true
            }
        ]
    },
    {
        id: 10,
        item: "#646B63",
        cardsId: [{
                id: 19,
                parentId: 10,
                hide: true
            },
            {
                id: 20,
                parentId: 10,
                hide: true
            }
        ]
    },
    {
        id: 11,
        item: "#2C5545",
        cardsId: [{
                id: 21,
                parentId: 11,
                hide: true
            },
            {
                id: 22,
                parentId: 11,
                hide: true
            }
        ]
    },
    {
        id: 12,
        item: "#4C514A",
        cardsId: [{
                id: 23,
                parentId: 12,
                hide: true
            },
            {
                id: 24,
                parentId: 12,
                hide: true
            }
        ]
    },
    {
        id: 13,
        item: "#C6A664",
        cardsId: [{
                id: 25,
                parentId: 13,
                hide: true
            },
            {
                id: 26,
                parentId: 13,
                hide: true
            }
        ]
    },
    {
        id: 14,
        item: "#8673A1",
        cardsId: [{
                id: 27,
                parentId: 14,
                hide: true
            },
            {
                id: 28,
                parentId: 14,
                hide: true
            }
        ]
    },
    {
        id: 15,
        item: "#F75E25",
        cardsId: [{
                id: 29,
                parentId: 15,
                hide: true
            },
            {
                id: 30,
                parentId: 15,
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