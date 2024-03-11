import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import Cards from './Cards';
import Repocards from './Repocards'

const Profile = () => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [repositories, setRepositories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/user/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        if (profileData) {
          const response = await fetch(`https://api.github.com/users/${profileData.login}/followers`);
          if (!response.ok) {
            throw new Error('Failed to fetch followers data');
          }
          const data = await response.json();
          setFollowers(data);
        }
      } catch (error) {
        console.error('Error fetching followers data:', error);
        setError(error.message);
      }
    };

    const fetchRepos = async () => {
      try {
        if (profileData) {
          const response = await fetch(`https://api.github.com/users/${profileData.login}/repos`);
          if (!response.ok) {
            throw new Error('Failed to fetch repositories data');
          }
          const data = await response.json();
          setRepositories(data);
        }
      } catch (error) {
        console.error('Error fetching repositories data:', error);
        setError(error.message);
      }
    };

    if (profileData) {
      fetchFollowers();
      fetchRepos();
    }
  }, [profileData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }


  return (
    <>
      <div className="profilePage">
        <div className='topProf'>
          <img src={profileData.avatar_url} alt={profileData.login} className='profAv'/>
          <h2 className='profUsr' style={{color: "#EE6C4D"}}>{profileData.login}</h2>
          <p className='profType'>{profileData.type}</p>
          <a className='viewOnGH' href={`https://github.com/${profileData.login}`} target='_blank' rel='noopener noreferrer'>View on GitHub</a>
        </div>
        <div className="middle">
          <div className="followers">
            <h1 className="flwtext">Followers</h1>
            <div className='flwlist'>
              {followers && followers.map(data => (
                <Cards key={data.id} data={data} />
              ))}
            </div>
          </div>
          <div className="repos">
            <h1 className="repostext">Repositories</h1>
            <div className="reposlist">
            {repositories && repositories.map(data => (
                <Repocards key={data.id} data={data} />
              ))}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
