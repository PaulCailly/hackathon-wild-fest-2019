import { Color } from '@styles/theme/helpers/colors/colors';

/* @todo : replace this mock with data coming from an API */

export interface PointOfInterest {
    title: string;
    color: Color;
    type: string;
    description?: string;
    openingHours?: string;
    imageUrl: string;
    linkTo: string;
    lat: number;
    lng: number;
}

const pointsOfInterest: PointOfInterest[] = [
    {
        title: 'Château des Vaux',
        color: 'orange',
        type: 'castle',
        description: `Visitez le Château des Vaux, de la cour vitrée réalisée par les ateliers Eiffel au Temple de l'Amour. Découvrez l'histoire de ce domaine parmi les plus beaux du Val de Loire.`,
        openingHours: '10:00 - 19:00',
        imageUrl: './1.jpg',
        linkTo: '/details',
        lat: 48.4920159,
        lng: 1.0871082,
    },
    {
        title: 'Cloître de la Psalette',
        color: 'red',
        type: 'religious',
        imageUrl: './2.jpg',
        linkTo: '/',
        lat: 47.4229834,
        lng: -0.4952893,
    },
    {
        title: "Rivière de l'Eure",
        color: 'blue',
        type: 'water',
        imageUrl: './3.jpg',
        linkTo: '/',
        lat: 48.2991313,
        lng: 0.2086867,
    },
    {
        title: 'Château du Clos Lucé',
        color: 'orange',
        type: 'castle',
        imageUrl: './4.jpg',
        linkTo: '/',
        lat: 47.4102346,
        lng: 0.9920814,
    },
];

export default pointsOfInterest;
