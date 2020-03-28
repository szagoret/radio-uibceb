import mock from "../utils/mock";
import faker from 'faker';

mock.onGet('/api/management/user/list').reply(200, {
    users: [...Array(35).keys()]
        .map(() => ({
            id: faker.random.number(),
            firstName: faker.name.firstName(undefined),
            lastName: faker.name.lastName(undefined),
            username: faker.internet.userName()
        }))
});