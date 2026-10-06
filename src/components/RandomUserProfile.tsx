import styled from "styled-components";
import type { Profile } from "../interfaces/Profile";

const AllProfileDiv=styled.div`
`;

const SingleProfileDiv=styled.div`
`;

export default function RandomUserProfile(props: { data:Profile[] }) {
    return (
        <AllProfileDiv>
            {
                props.data.map((profile: Profile) =>
                    <SingleProfileDiv key={profile.id}>
                        <h1>{profile.firstName} {profile.lastName}</h1>
                        <h2>{profile.city}</h2>
                        <p>{profile.age}</p>
                        <img src={profile.img} alt={`image of ${profile.firstName}`}/>
                    </SingleProfileDiv>
                )
            }
        </AllProfileDiv>
    )
}