import React from 'react';
import { MenuItemLink } from 'admin-on-rest';

import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';

export default ({ resources, onMenuTap, logout }) => (
    <div>
        <MenuItemLink to="/posts" primaryText="Posts" onTouchTap={onMenuTap} icon={UserIcon} />
        <MenuItemLink to="/comments" primaryText="Comments" onTouchTap={onMenuTap} icon={UserIcon} />
        {logout}
    </div>
);