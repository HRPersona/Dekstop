import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'admin-on-rest';

export const UserList = (props) => (
	<List title="All Users" {...props}>
		<Datagrid>
			<TextField source="fullName" />
			<EmailField source="email" />
			<TextField source="profileImage" />
			<TextField source="roles" />
		</Datagrid>
	</List>
)