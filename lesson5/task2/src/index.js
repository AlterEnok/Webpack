import fetchUser from './profile/gateway.js';
import { printProfile } from './profile/index.js';
import renderDashboard from './dashboard/index.js';

fetchUser('github').then(userData =>
    printProfile({
        name: userData.name,
        company: userData.location,
    }),
);

renderDashboard();