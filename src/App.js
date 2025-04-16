import React from 'react';
import styled from 'styled-components';

// スタイリング
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f8ff;
  height: 100vh;
  font-family: 'Arial', sans-serif;
`;

const ProfileCard = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  text-align: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const ProfileName = styled.h1`
  font-size: 2em;
  margin: 20px 0 10px;
`;

const ProfileJob = styled.h2`
  font-size: 1.2em;
  color: #888;
  margin-bottom: 20px;
`;

const ProfileDescription = styled.p`
  font-size: 1em;
  color: #555;
  line-height: 1.5;
`;

const SocialLinks = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
`;

const SocialIcon = styled.a`
  font-size: 1.5em;
  color: #888;
  transition: color 0.3s ease;
  
  &:hover {
    color: #000;
  }
`;

function App() {
  return (
    <ProfileContainer>
      <ProfileCard>
        <ProfileImage src="https://via.placeholder.com/150" alt="Profile" />
        <ProfileName>Anonymous User</ProfileName>
        <ProfileJob>Web Developer</ProfileJob>
        <ProfileDescription>
          I am passionate about creating modern web applications using React. Always eager to learn new technologies and improve my skills!
        </ProfileDescription>
        <SocialLinks>
          <SocialIcon href="https://github.com" target="_blank">🐱 GitHub</SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank">🐦 Twitter</SocialIcon>
          <SocialIcon href="https://linkedin.com" target="_blank">🔗 LinkedIn</SocialIcon>
        </SocialLinks>
      </ProfileCard>
    </ProfileContainer>
  );
}

export default App;
