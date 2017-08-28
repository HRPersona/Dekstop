import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';

// rest
import RestProvider from './helpers/RestClient';
import AuthClient from './helpers/AuthClient';

// pages
import Dashboard from './pages/Dashboard';
import { PostList, PostEdit, PostCreate } from './pages/Posts';
import { UserList } from './pages/Users';

// icon
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';

const App = () => (
    <Admin title="HR Persona" dashboard={Dashboard} authClient={AuthClient} restClient={RestProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;
