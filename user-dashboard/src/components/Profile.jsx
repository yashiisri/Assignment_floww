import { useState } from 'react';

const Profile = ({ user, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    setEditing(false);
  };

  return (
    <div className="section">
      <h2>👤 Profile Information</h2>

      {!editing ? (
        <>
          <div style={{ textAlign: 'center' }}>
            <img src={user.image} alt="Profile" className="profile-img" />
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button onClick={() => setEditing(true)}>✏️ Edit Profile</button>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <label>
              Name:
              <input name="name" value={formData.name} onChange={handleChange} type="text" />
            </label>
            <label>
              Email:
              <input name="email" value={formData.email} onChange={handleChange} type="email" />
            </label>
            <label>
              Profile Image URL:
              <input name="image" value={formData.image} onChange={handleChange} type="url" />
            </label>
          </div>

          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <button type="submit">✅ Save</button>
            <button type="button" onClick={() => setEditing(false)}>❌ Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
