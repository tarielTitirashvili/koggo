

export const fetchStockDetails = async (onSuccess, onError=()=>{}) => {
  try {
    const response = await fetch('https://localhost:7141/Stocks/details', {
      method: 'GET', // default method for fetch
      headers: {
        'Content-Type': 'application/json', // optional but good to specify
      },
    });

    if (!response.ok) {
      onError()
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); // assuming the response is JSON
    onSuccess(data)
  } catch (error) {
    console.error('Error fetching stock details:', error);
  }
};

export const setNotificationsOnStockPriceChange = async (params, onSuccess, onError=()=>{}) => {
  try {
    const response = await fetch('https://localhost:7141/Configurations', {
      method: 'POST', // default method for fetch
      headers: {
        'Content-Type': 'application/json', // optional but good to specify
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      onError()
      throw new Error('Network response was not ok');
    }else{
      onSuccess()
    }
  } catch (error) {
    console.error('Error fetching stock details:', error);
  }
};