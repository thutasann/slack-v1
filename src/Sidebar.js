import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from './SidebarOption';
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InputBoxIcon from "@material-ui/icons/Input";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from './firebase';
import { useStateValue } from './StateProvider';


function Sidebar() {

    const [ channels , setChannels ] = useState([]);
    const [{user}] = useStateValue();

    useEffect(() =>{
        db.collection("rooms").onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc=>({
                id: doc.id,
                name: doc.data().name,
            }))
            )
        ));
    },[]);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Slack Clone</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon/>
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InputBoxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved Item" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & users" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File Browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show Less" />

            <hr />
            <SidebarOption Icon={ExpandMoreIcon}  title="Channels" />

            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

            {/* Connect to DB and list all the channels */}
            {
                channels.map(channel=>(
                    <SidebarOption title={channel.name} id={channel.id} />
                ))
            }

        </div>
    )
}

export default Sidebar;
