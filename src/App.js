// App.js
import React from 'react';
import ProfileCard from './ProfileCard';
import BlogCard from './BlogCard';
import FormWithValidation from './FormWithValidation';

const App = () => {
  return (
      <div>
        <h1>Reusable Components</h1>

        <h2>Profile Card</h2>
        <ProfileCard
            name="John Doe"
            image="https://via.placeholder.com/100"
            description="A passionate developer."
        />

        <h2>Blog Card</h2>
        <BlogCard
            title="React Basics"
            description="Learn the fundamentals of React in this post."
            imageUrl="https://via.placeholder.com/300x200"
        />

        <h2>Form with Validation</h2>
        <FormWithValidation />
      </div>
  );
};

export default App;
