// resolver는 schema로 정의한 각 필드들에 대해 실제로 데이터를 전달하는 등의 기능을 구현한 코드
let movies = [
	{
		id: 1,
		name: '스타워즈',
		score: 5,
	},
	{
		id: 2,
		name: '콘택트',
		score: 9,
	},
	{
		id: 3,
		name: '그래비티',
		score: 8,
	},
	{
		id: 4,
		name: '마션',
		score: 8,
	},
	{
		id: 5,
		name: '인터스텔라',
		score: 10,
	},
];

export const getMovies = () => movies;

export const getById = (id) => {
	const filteredMovies = movies.filter((movie) => movie.id === id);

	return filteredMovies[0];
};

export const deleteMovie = (id) => {
	const cleanedMovies = movies.filter((movie) => movie.id !== id);

	if (movies.length > cleanedMovies.length) {
		movie = cleanedMovies;

		return true;
	} else {
		return false;
	}
};

export const addMovie = (name, score) => {
	const newMovie = {
		id: movies.length + 1,
		name,
		score,
	};

    movies.push(newMovie);

    return newMovie;
};
