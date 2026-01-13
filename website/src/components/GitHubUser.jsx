import { useState, useEffect } from 'react';
import axios from 'axios'
import Icons from './Icons';
import './GitHubUser.css';

function GitHubUser({ username, role, roleDescription }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        try {
          const response = await axios.get(`https://api.github.com/users/${username}`, { timeout: 10000 })
          setUserData(response.data)
        } catch (e) {
          // keep silent; show placeholder
        }
      } catch {
        console.error('Error fetching GitHub user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  if (loading) {
    return (
      <div className="github-user-card loading">
        <div className="avatar-skeleton"></div>
        <div className="content-skeleton">
          <div className="line-skeleton"></div>
          <div className="line-skeleton short"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="github-user-card">
      <div className="user-avatar">
        {userData?.avatar_url ? (
          <img src={userData.avatar_url} alt={userData.name || username} />
        ) : (
          <div className="avatar-placeholder">{Icons.github}</div>
        )}
      </div>
      <div className="user-info">
        <h3>{userData?.name || username}</h3>
        <span className="user-role">{role}</span>
        {roleDescription && <p className="user-description">{roleDescription}</p>}
        <a 
          href={`https://github.com/${username}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link-btn"
        >
          {Icons.github}
          <span>@{username}</span>
        </a>
      </div>
    </div>
  );
}

export default GitHubUser;
