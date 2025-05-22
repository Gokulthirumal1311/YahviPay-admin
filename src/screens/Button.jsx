import React from 'react';
import useButtonWrapper from '../hooks/useButtonWrapper';

// Example component showing how to use the useButtonWrapper hook

const Button = () => {

  const { handleButtonClick, isButtonDisabled, isButtonActive } = useButtonWrapper();

  // Mock API functions
  const fetchUserData = async () => {
    // Simulate API call
    return new Promise(resolve => setTimeout(resolve, 2000));
  };

  const updateProfile = async () => {
    // Simulate API call
    return new Promise(resolve => setTimeout(resolve, 3000));
  };

  const deleteAccount = async () => {
    // Simulate API call
    return new Promise(resolve => setTimeout(resolve, 1500));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Button Wrapper Example</h2>
      
      <div className = 'flex gap-2.5 flex-col w-48'>
        <button
          disabled={isButtonDisabled('fetch-user')}
          className = 'p-2.5 white border-0 rounded-xs'
          style={{
            backgroundColor: isButtonActive('fetch-user') ? '#007bff' : '#28a745',
            cursor: isButtonDisabled('fetch-user') ? 'not-allowed' : 'pointer',
            opacity: isButtonDisabled('fetch-user') ? 0.6 : 1,
            display : isButtonDisabled('fetch-user') ? "none" : ""
          }}
          onClick={() => handleButtonClick('fetch-user', fetchUserData)}
        >
          {isButtonActive('fetch-user') ? 'Fetching...' : 'Fetch User Data'}
        </button>

        <button
          disabled={isButtonDisabled('update-profile')}
          className = 'p-2.5 white border-0 rounded-xs'
          style={{
            backgroundColor: isButtonActive('update-profile') ? '#007bff' : '#fd7e14',
            cursor: isButtonDisabled('update-profile') ? 'not-allowed' : 'pointer',
            opacity: isButtonDisabled('update-profile') ? 0.6 : 1,
            display : isButtonDisabled('update-profile') ? "none" : ""
          }}
          onClick={() => handleButtonClick('update-profile', updateProfile)}
        >
          {isButtonActive('update-profile') ? 'Updating...' : 'Update Profile'}
        </button>

        <button
          disabled={isButtonDisabled('delete-account')}
          className = 'p-2.5 white border-0 rounded-xs'
          style={{
            padding: '10px',
            backgroundColor: isButtonActive('delete-account') ? '#007bff' : '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isButtonDisabled('delete-account') ? 'not-allowed' : 'pointer',
            opacity: isButtonDisabled('delete-account') ? 0.6 : 1,
            display : isButtonDisabled('delete-account') ? "none" : ""
          }}
          onClick={() => handleButtonClick('delete-account', deleteAccount)}
        >
          {isButtonActive('delete-account') ? 'Deleting...' : 'Delete Account'}
        </button>
      </div>
    </div>
  );
};

export default Button;