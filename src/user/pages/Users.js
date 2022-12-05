import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Talha Mehmet Karamuk",
      image:
        "https://img.freepik.com/free-photo/parrot-profile_1136-16.jpg?w=740&t=st=1670245348~exp=1670245948~hmac=65e37e50943cea56f84d95c386e0ac77765ca5701e50a5b93f7617925082853c",
      places: 4,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
