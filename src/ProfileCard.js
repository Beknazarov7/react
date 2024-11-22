import React from 'react';

const ProfileCard = ({ name, image, description }) => {
    return (
        <div style={styles.card}>
            <img src={image} alt={name} style={styles.image} />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        width: '250px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
    }
};

export default ProfileCard;
