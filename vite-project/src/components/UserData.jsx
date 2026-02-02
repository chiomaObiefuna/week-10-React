import { useState, useEffect } from "react";

function UserData() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={containersStyle}>
      <h2>User Data</h2>
      {user && (
        <div style={cardStyle}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>City:</strong> {user.address.city}</p>
        </div>
      )}
    </div>
  );
};

//----Styles------
const containersStyle = {
  fontFamily: 'sans-serif',
  marginTop: '80px',
  textAlign: 'center'
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  maxWidth: '300px',
  margin: '0 auto',
  backgroundColor: '#b49595f9',
  boxShadow: '0 2px 4px'
}

export default UserData;
