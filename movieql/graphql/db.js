// resolver는 schema로 정의한 각 필드들에 대해 실제로 데이터를 전달하는 등의 기능을 구현한 코드
export const people = [
	{
		id: 1,
		name: 'marco',
		age: '99',
		gender: 'female',
	},
	{
		id: 2,
		name: 'mesut',
		age: '99',
		gender: 'female',
	},
	{
		id: 3,
		name: 'bukayo',
		age: '99',
		gender: 'male',
	},
	{
		id: 4,
		name: 'bernd',
		age: '99',
		gender: 'female',
	},
	{
		id: 5,
		name: 'pierre',
		age: '99',
		gender: 'male',
	},
];

export const getById = (id) => {
	const filteredPeople = people.filter((person) => person.id === id);

	return filteredPeople[0];
};
