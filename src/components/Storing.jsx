import React, { useState } from 'react'
import { DualSearchBar } from './DualSearchBar';
import Modal from './Modal';
import Modal2 from './Modal2';

export const Storing = () => {
  const [searchFields, setSearchFields] = useState({ phoneNumber: '', referenceId: '' });
  const handleSearchSelect=({ phoneNumber, merchantId })=>{
    setSearchFields({ phoneNumber, referenceId: merchantId });
    localStorage.setItem('userData', JSON.stringify({ phone: phoneNumber, merchantId }));
  };

  return (
    <div>
      <DualSearchBar searchFields={searchFields} setSearchFields={setSearchFields} />
      <Modal onSelectMerchant={handleSearchSelect} />
      <Modal2 />
    </div>
  );
};

