// resolver는 schema로 정의한 각 필드들에 대해 실제로 데이터를 전달하는 등의 기능을 구현한 코드
const marco = {
	name: 'marco',
	age: '99',
	gender: 'female',
};
const resolvers = {
	Query: {
		person: () => marco,
	},
};

export default resolvers;
