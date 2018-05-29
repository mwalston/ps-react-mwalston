import React from 'react';
import PropTypes from 'prop-types';

/** Format a Number as Cash. */
function Cash({amount, showDecimal}) {
    let formatAmount = showDecimal ? (+amount).toFixed(2) : (+amount);
    return <div><span>$</span>{formatAmount}</div>
}

Cash.propTypes = {
    /** Amount to display as money */
    amount: PropTypes.string,
    showDecimal: PropTypes.bool
};
Cash.defaultProps = {
    amount: '0',
    showDecimal: true
};

export default Cash;