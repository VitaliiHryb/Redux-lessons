import React from 'react';
import AvailableOptions from './AvailableOptions';
import SelectedOptions from './SelectedOptions';

const TransferList = () => {
  return (
    <div className="transfer-list">
      <AvailableOptions title="Avalible options" />
      <SelectedOptions title="Selected options" />
    </div>
  );
};

export default TransferList;
