import NavMenuTextIcon from "./NavMenuTextIcon";
import PageIcon from "./PageIcon";
import VirtualsiteIcon from "./VirtualsiteIcon";
import {Folder} from '@material-ui/icons';

const ICON_BY_NODE_TYPE = {
    "jnt:navMenuText": NavMenuTextIcon,
    "jnt:page": PageIcon,
    "jnt:virtualsite": VirtualsiteIcon,
    "jnt:folder": Folder,
    "jnt:contentFolder": Folder
}

function getIcon(nodeType) {
    return ICON_BY_NODE_TYPE[nodeType];
}

export {getIcon};