import '../assets/styles/avatar.css'
import React, { useState } from 'react';
import boyAvatar from '../assets/images/boyAvatar.webp'


function Avatar() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="profile__avatar">
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="upload-avatar"
        onChange={handleImageChange}
      />
      <label htmlFor="upload-avatar">
        {image ? (
          <img src={image} alt="Avatar" className="profile__avatar-img" />
        ) : (
            <img src={boyAvatar} alt="Avatar"  className="profile__avatar-img"/>

        )}
      </label>
    </div>
  );
}

export default Avatar;


