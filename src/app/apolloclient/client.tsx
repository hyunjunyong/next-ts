import { useQuery, gql } from "@apollo/client";

// 사용해야할 쿼리
// mutation{
//   signup(createUserRequest: {email: "hjy4649@naver.com"
//     password: "1234"
//     name: "test"
//     userType: "ADMIN"}){
//     id
//     email
//     name
//     userType
//   }
// }

// query{
//   getUser(id:1){
//     id
//     email
//     name
//     userType
//   }
// }

interface Location {
  id: string;
  name: string;
  description: string;
  photo: string;
}

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export default function Client() {
  const { loading, error, data, refetch, networkStatus } =
    useQuery(GET_LOCATIONS);

  if (loading)
    return (
      <>
        <p>Loading...</p>
      </>
    );
  if (error)
    return (
      <>
        <p>Error : {error.message}</p>
      </>
    );

  return (
    <>
      {data.locations.map(({ id, name, description, photo }: Location) => (
        <div key={id}>
          <h3>{name}</h3>
          <img width="400" height="250" alt="location-reference" src={photo} />
          <br />
          <b>About this location:</b>
          <p>{description}</p>
          <br />
        </div>
      ))}
    </>
  );
}
