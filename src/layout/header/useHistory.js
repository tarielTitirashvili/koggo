import { useState, useEffect, useCallback } from 'react';

const useHistory = () => {
  const [location, setLocation] = useState(window.location);

  useEffect(() => {
    const handleLocationChange = () => {
      setLocation(window.location);
    };

    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const push = useCallback((path) => {
    window.history.pushState({}, '', path);
    setLocation(window.location);
  }, []);

  const replace = useCallback((path) => {
    window.history.replaceState({}, '', path);
    setLocation(window.location);
  }, []);

  const goBack = useCallback(() => {
    window.history.back();
  }, []);

  const goForward = useCallback(() => {
    window.history.forward();
  }, []);

  return {
    location,
    push,
    replace,
    goBack,
    goForward,
  };
};

export default useHistory;
