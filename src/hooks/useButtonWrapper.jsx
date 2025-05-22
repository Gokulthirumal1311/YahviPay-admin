import { useState, useCallback, useRef } from 'react';

// Custom hook for managing button states globally
const useButtonWrapper = () => {
    
    const [isAnyButtonActive, setIsAnyButtonActive] = useState(false);
    const activeButtonRef = useRef(null);

    // Function to handle button click
    const handleButtonClick = useCallback(async (buttonId, asyncFunction) => {
        // If any button is already active, prevent new clicks
        if (isAnyButtonActive) {
            console.warn('Another button is already processing. Please wait.');
            return;
        }

        try {
            // Set the current button as active
            setIsAnyButtonActive(true);
            activeButtonRef.current = buttonId;

            // Execute the async function (API call, etc.)
            await asyncFunction();
        } catch (error) {
            console.error('Error in button action:', error);
            throw error; // Re-throw so component can handle it
        } finally {
            // Reset the state
            setIsAnyButtonActive(false);
            activeButtonRef.current = null;
        }
    }, [isAnyButtonActive]);

    // Function to check if a specific button should be disabled
    const isButtonDisabled = useCallback((buttonId) => {
        return isAnyButtonActive && activeButtonRef.current !== buttonId;
    }, [isAnyButtonActive]);

    // Function to check if a specific button is currently active
    const isButtonActive = useCallback((buttonId) => {
        return isAnyButtonActive && activeButtonRef.current === buttonId;
    }, [isAnyButtonActive]);

    return {
        isAnyButtonActive,
        handleButtonClick,
        isButtonDisabled,
        isButtonActive,
        activeButtonId: activeButtonRef.current
    };
};

export default useButtonWrapper;