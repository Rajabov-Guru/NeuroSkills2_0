import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CoursePage } from '@/pages/Course';
import { LandingPage } from '@/pages/Landing';
import { ProfilePage } from '@/pages/Profile';
import { TopicPage } from '@/pages/Topic';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/course/:courseId" element={<CoursePage />} />
      <Route path="/course/:courseId/topic/:topicId" element={<TopicPage />} />
    </Routes>
  );
};

export default AppRouter;
