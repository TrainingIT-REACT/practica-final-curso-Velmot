import React from 'react';
import RawTooltip from 'rc-tooltip';

import './css/Tooltip.css';

const defaultProps = {
    placement: 'bottom',
    trigger: 'hover',
    prefixCls: 'tooltip-overlay',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1
}

const Tooltip = ({content, children}) => <RawTooltip overlay={() => content} {...defaultProps}>{children}</RawTooltip>;

export default Tooltip;