import React from 'react';

import {pure} from 'recompose';
import {SvgIcon} from '@material-ui/core';

let VirtualsiteIcon = props => (
    <SvgIcon {...props} viewBox="0 0 512 512">
        <path d="M256,88C163.26,88,88,163.26,88,256s75.26,168,168,168,168-75.26,168-168S348.74,88,256,88ZM239.2,389.22A134.2,134.2,0,0,1,121.6,256a136,136,0,0,1,3.53-30.07L205.6,306.4v16.8a33.7,33.7,0,0,0,33.6,33.6Zm115.92-42.67A33.33,33.33,0,0,0,323.2,323.2H306.4V272.8A16.85,16.85,0,0,0,289.6,256H188.8V222.4h33.6a16.85,16.85,0,0,0,16.8-16.8V172h33.6a33.7,33.7,0,0,0,33.6-33.6v-6.89a134.1,134.1,0,0,1,48.72,215Z"/>
    </SvgIcon>
);

VirtualsiteIcon.displayName = 'VirtualsiteIcon';
VirtualsiteIcon = pure(VirtualsiteIcon);
VirtualsiteIcon.muiName = 'SvgIcon';

VirtualsiteIcon.primaryNodeType = 'jnt:virtualsite';

export default VirtualsiteIcon;
