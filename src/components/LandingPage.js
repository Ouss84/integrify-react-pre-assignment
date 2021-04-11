import UserOverView from './UserOverView';
import axios from 'axios';
import React , {useState, useEffect }from 'react';
import './LandingPage.css';


const LandingPage = () => {
  const [data, setData] = useState([]);

   useEffect(() => {
    const fetchData = async () => {
      const res = await axios('https://jsonplaceholder.typicode.com/users');
      setData(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="Home">
      {data &&
        data.map((item) => (
          <UserOverView key={item.id} id={item.id} name={item.name} username={item.username} website={item.website} />
        ))}
    </div>
  );

};


export default LandingPage ;
 
