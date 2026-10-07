import RandomUserProfile from "./components/RandomUserProfile";
import styled from "styled-components";
import { useEffect, useState } from "react";
import type { Profile } from "./interfaces/Profile";

const ParentDiv=styled.div`
  width: 70vw;
  margin: auto;
  padding: 10px 20px;
  text-align: center;
  background-color: #bad8b6;
`;

export default function App() {

  const [data, setData] = useState<Profile[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://randomuser.me/api/?results=5");
      const {results} : {results: Profile[]} = await rawData.json();
      const profiles: Profile[] = results.map((user: any) => ({
        id: user.login.uuid,
        firstName: user.name.first,
        lastName: user.name.last,
        city: user.location.city,
        age: user.dob.age,
        img: user.picture.large
    }));
      setData(profiles);
    }
    fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
  }, [data.length])

  return (
    <ParentDiv>
      <RandomUserProfile data={data}/>
    </ParentDiv>
  )
}
