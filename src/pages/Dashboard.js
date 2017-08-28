import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { ViewTitle } from 'admin-on-rest/lib/mui';

export default () => (
	<Card>
		<ViewTitle title="Dashboard" />
		<CardHeader title="Welcome to the administration" />
		<CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam delectus, esse laborum natus quisquam deleniti distinctio dolore autem magnam, sequi, nemo ducimus! Possimus, vitae, vero! Hic ex voluptates, possimus?</CardText>
	</Card>
)