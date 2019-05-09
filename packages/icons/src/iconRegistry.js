import NavMenuTextIcon from './NavMenuTextIcon';
import PageIcon from './PageIcon';
import VirtualsiteIcon from './VirtualsiteIcon';
import ContentIcon from './ContentIcon';
import {Folder} from '@material-ui/icons';

const ICON_BY_NODE_TYPE = {
    'jnt:navMenuText': NavMenuTextIcon,
    'jnt:page': PageIcon,
    'jnt:virtualsite': VirtualsiteIcon,
    'jnt:folder': Folder,
    'jnt:contentFolder': Folder,
    'jnt:content': ContentIcon
};

function getIcon(nodeType) {
    return ICON_BY_NODE_TYPE[nodeType];
}

export {getIcon};
