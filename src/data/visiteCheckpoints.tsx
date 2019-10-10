export interface TourCheckpoint {
    title: string;
    anecdote?: string;
    lat: number;
    lng: number;
}

const visiteCheckpoints: TourCheckpoint[] = [
    { title: `Fontaine de l'orangerie`, lat: 48.4927027, lng: 1.090378 },
    { title: `Salons`, lat: 48.4929445, lng: 1.0890848 },
    {
        title: `Verrière Eiffel`,
        anecdote: `Les écuries qui envisiteent la cour abritaient jusqu'à 100 chevaux`,
        lat: 48.4938999,
        lng: 1.0891569,
    },
    { title: `Cerf Wild Code School`, lat: 48.4938072, lng: 1.0858199 },
    { title: `Temple de l'amour`, lat: 48.4989508, lng: 1.0804142 },
];

export default visiteCheckpoints;
