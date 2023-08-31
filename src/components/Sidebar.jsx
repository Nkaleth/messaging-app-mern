import '../styles/Sidebar.scss';
import {
  DonutLarge, Chat, MoreVert, SearchOutlined,
} from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://randomuser.me/api/portraits/women/65.jpg" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats" />
    </div>
  );
}

export default Sidebar;
