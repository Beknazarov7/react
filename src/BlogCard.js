import React from 'react';

const BlogCard = ({ title, description, imageUrl }) => {
    return (
        <div style={styles.card}>
            <img src={imageUrl} alt={title} style={styles.image} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        width: '300px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '100%',
        height: '200px',
        borderRadius: '8px',
        objectFit: 'cover',
    }
};

export default BlogCard;
