import { useEffect, useState } from "react";
import Axios from "axios";
import "./LandingPage.css";

function LandingPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.users);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []);

  const ListNames = () => {
    return data.map((val) => (
      <tr key={val.id}>
        <td>{val.id}</td>
        <td><img width="100px" src={val.image} alt="profile" /></td>
        <td>{val.firstName}</td>
        <td>{val.lastName}</td>
        <td>{val.gender}</td>
        <td>{val.email}</td>
        <td>{val.username}</td>
        <td>{val.domain}</td>
        <td>{val.ip}</td>
        <td>{val.university}</td>
      </tr>
    ));
  };
  

  return (
    <div width="100%">
      <h1>Dummy Data</h1>
      <table>
        <tr>
            <th>S.no</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
        </tr>
        {ListNames()}
      </table>
    </div>
  );
}

export default LandingPage;
