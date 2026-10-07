import styled from "styled-components";
import type { Profile } from "../interfaces/Profile";

const AllProfileDiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
`;

const SingleProfileDiv=styled.div`
    color: #01352c;
    background-color: #61b390;
    padding 15px;
    border: 5px solid #01352c;
`;

const ProfileImage = styled.img`
    margin: 10px 0px;
    border-radius: 10px;
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
                        <ProfileImage src={profile.img} alt={`image of ${profile.firstName}`}/>
                    </SingleProfileDiv>
                )
            }
        </AllProfileDiv>
    )
}