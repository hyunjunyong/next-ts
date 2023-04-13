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
type UserType = "ADMIN" | "GUEST";

interface User {
  id: Number;
  email: string;
  name: string;
  userType: UserType;
}

const getUser = gql`
  query {
    getUser(id: 1) {
      id
      email
      name
      userType
    }
  }
`;

export default function Client() {
  const { loading, error, data, refetch, networkStatus } = useQuery(getUser);
  console.log(data);
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
      <div key={data.getUser.id}>
        <h3>{data.getUser.name}</h3>
        <p>{data.getUser.id}</p>
        <p>{data.getUser.email}</p>
        <p>{data.getUser.userType}</p>
      </div>
    </>
  );
}
