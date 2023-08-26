import '../styles/Sidebar.scss';
import { DonutLarge, Chat, MoreVert } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
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
      <div className="sidebar__search"></div>
      <div className='sidebar__chats' ></div>
    </div>
  );
}

export default Sidebar;