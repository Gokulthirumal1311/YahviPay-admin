import React from 'react';
import useButtonWrapper from '../hooks/useButtonWrapper';

// Example showing integration with other custom hooks
const IntegratedExample = () => {
  const { handleButtonClick, isButtonDisabled, isButtonActive } = useButtonWrapper();

  // Mock custom hooks (replace with your friend's actual hooks)
  const useFetch = (url, options = {}) => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setData({ message: `Data from ${url}` });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    return { data, loading, error, fetchData };
  };

  const useAuthentication = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [user, setUser] = React.useState(null);

    const login = async (credentials) => {
      // Simulate login API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsAuthenticated(true);
      setUser({ name: 'John Doe', email: 'john@example.com' });
    };

    const logout = async () => {
      // Simulate logout API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsAuthenticated(false);
      setUser(null);
    };

    return { isAuthenticated, user, login, logout };
  };

  // Initialize custom hooks
  const { data: userData, fetchData: fetchUserData } = useFetch('/api/user');
  const { data: postsData, fetchData: fetchPosts } = useFetch('/api/posts');
  const { isAuthenticated, user, login, logout } = useAuthentication();

  // Wrapper functions that integrate with useButtonWrapper
  const handleFetchUser = async () => {
    await handleButtonClick('fetch-user', fetchUserData);
  };

  const handleFetchPosts = async () => {
    await handleButtonClick('fetch-posts', fetchPosts);
  };

  const handleLogin = async () => {
    await handleButtonClick('login', () => login({ email: 'test@example.com', password: 'password' }));
  };

  const handleLogout = async () => {
    await handleButtonClick('logout', logout);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Integrated Button Wrapper Example</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <p><strong>Authentication Status:</strong> {isAuthenticated ? 'Logged In' : 'Logged Out'}</p>
        {user && <p><strong>User:</strong> {user.name} ({user.email})</p>}
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button
          disabled={isButtonDisabled('fetch-user')}
          style={{
            padding: '10px 15px',
            backgroundColor: isButtonActive('fetch-user') ? '#007bff' : '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isButtonDisabled('fetch-user') ? 'not-allowed' : 'pointer',
            opacity: isButtonDisabled('fetch-user') ? 0.6 : 1
          }}
          onClick={handleFetchUser}
        >
          {isButtonActive('fetch-user') ? 'Fetching User...' : 'Fetch User Data'}
        </button>

        <button
          disabled={isButtonDisabled('fetch-posts')}
          style={{
            padding: '10px 15px',
            backgroundColor: isButtonActive('fetch-posts') ? '#007bff' : '#17a2b8',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isButtonDisabled('fetch-posts') ? 'not-allowed' : 'pointer',
            opacity: isButtonDisabled('fetch-posts') ? 0.6 : 1
          }}
          onClick={handleFetchPosts}
        >
          {isButtonActive('fetch-posts') ? 'Fetching Posts...' : 'Fetch Posts'}
        </button>

        {!isAuthenticated ? (
          <button
            disabled={isButtonDisabled('login')}
            style={{
              padding: '10px 15px',
              backgroundColor: isButtonActive('login') ? '#007bff' : '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isButtonDisabled('login') ? 'not-allowed' : 'pointer',
              opacity: isButtonDisabled('login') ? 0.6 : 1
            }}
            onClick={handleLogin}
          >
            {isButtonActive('login') ? 'Logging In...' : 'Login'}
          </button>
        ) : (
          <button
            disabled={isButtonDisabled('logout')}
            style={{
              padding: '10px 15px',
              backgroundColor: isButtonActive('logout') ? '#007bff' : '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isButtonDisabled('logout') ? 'not-allowed' : 'pointer',
              opacity: isButtonDisabled('logout') ? 0.6 : 1
            }}
            onClick={handleLogout}
          >
            {isButtonActive('logout') ? 'Logging Out...' : 'Logout'}
          </button>
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Data Display:</h3>
        {userData && <p><strong>User Data:</strong> {JSON.stringify(userData)}</p>}
        {postsData && <p><strong>Posts Data:</strong> {JSON.stringify(postsData)}</p>}
      </div>
    </div>
  );
};

export default IntegratedExample;