import guitars from '@/data/guitars';

const getGuitarById = (id) => {
    return guitars.find(guitar => guitar.id === id);
};

export default getGuitarById;