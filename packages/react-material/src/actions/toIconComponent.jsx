import React from 'react';
import {SvgIcon} from '@material-ui/core';

function toIconComponent(icon, props) {
    let toComp = function(i) {
        if (i.nodeType === 1) {
            let props = {};
            Array.prototype.slice.call(i.attributes).forEach(attr => props[attr.name] = attr.value);
            let children = Array.prototype.slice.call(i.childNodes).map(child => toComp(child));
            return React.createElement(i.tagName, props, children);
        }
    };

    if (typeof icon === 'string') {
        if (icon.startsWith('<svg')) {
            let parser = new DOMParser();
            let doc = parser.parseFromString(icon, "image/svg+xml");
            let viewBox = doc.documentElement.attributes.viewBox ? doc.documentElement.attributes.viewBox.value : null;
            let children = Array.prototype.slice.call(doc.documentElement.childNodes).map(child => toComp(child));
            return <SvgIcon viewBox={viewBox} {...props}>{children}</SvgIcon>
        } else {
            return <img src={icon}/>
        }
    } else if (props && icon) {
        return React.cloneElement(icon, props)
    } else {
        return icon;
    }
}

export {toIconComponent};