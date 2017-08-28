import React from 'react';
import {
	List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, EmailField, SimpleList,
	DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, Filter, Responsive
} from 'admin-on-rest';

export const PostList = (props) => (
    <List {...props} filters={<PostFilter />}>
        <Responsive
            // For mobile view
            small={
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            }

            // For desktop view
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="user" source="userId" reference="users">
                        <EmailField source="name"/>
                    </ReferenceField>
                    <TextField source="title" />
                    <TextField source="body" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

const PostFilter = (props) => (
	<Filter {...props}>
		<TextInput label="Search" source="q" alwaysOn />
		<ReferenceInput label="User" source="userId" reference="users" allowEmpty>
			<SelectInput optionText="name" />
		</ReferenceInput>
	</Filter>
);

const PostTitle = ({ record }) => (
	<span>Post {record ? `"${record.title}"` : '' }</span>
);

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);