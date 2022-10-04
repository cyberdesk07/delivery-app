import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { AppContext } from '../context';

function OrderStatus({ status, testId, sx }) {
  const { userData } = useContext(AppContext);
  const theme = useTheme();

  const displayText = {
    Pendente: 'Pendente',
    Preparando: 'Preparando',
    Entregue: 'Entregue',
    'Em Trânsito': 'Em Trânsito',
  };

  const backgroundColor = {
    Pendente: '#CCB800',
    Preparando: '#66CC00',
    Entregue: '#00CC9B',
    'Em Trânsito': '#66CC00',
  };

  return (
    <span
      style={ {
        backgroundColor: backgroundColor[status],
        borderRadius: '8px',
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.typography.h6,
        ...sx,
      } }
      data-testid={ `${userData.role}_orders__element-delivery-status-${testId}` }
    >
      {displayText[status].toUpperCase()}
    </span>
  );
}

OrderStatus.defaultProps = {
  sx: {},
};

OrderStatus.propTypes = {
  testId: PropTypes.number.isRequired,
  status: PropTypes.oneOf(['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'])
    .isRequired,
  sx: PropTypes.objectOf(PropTypes.string),
};

export default OrderStatus;
