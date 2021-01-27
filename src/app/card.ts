export class Card {
    public imgUrl: string = '';
    public name: string = '';
    public description: string = '';
    public type: string = '';
    public crystals: number = 0;
    public atk: number = 0;
    public def: number = 0;
}

export const CATALOG:Card[] = [
    {
        imgUrl: '/assets/jasmine.jpg',
        name: 'Jasmine',
        description: 'C\est la princesse',
        type: 'common',
        crystals: 9,
        atk:   9,
        def:   9
    },
    {
        imgUrl: '/assets/aladdin.jpg',
        name: 'Aladdin',
        description: 'Prince ali, ali ababoua',
        type: 'common',
        crystals: 9,
        atk:   9,
        def:   9
    }, 
    {
        imgUrl: '/assets/genie.gif',
        name: 'Le génie',
        description: 'Je suis ton meilleur ami',
        type: 'legendary',
        crystals: 9,
        atk:   9,
        def:   9
    },
];

export const CARD_TYPES: any[] = [
    {
        value: "all",
        label: "Toutes"
    },
    {
        value: "common",
        label: "Communes"
    },
    {
        value: "legendary",
        label: "Légendaires"
    }
];
