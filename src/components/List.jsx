import React from 'react'

const List = () => {
    const numbers = [1,2,3,4,5];
    const userInfo = [
        {
            userName: "Rachit",
            email:"test@gmail.com",
            location: "USA",
        },
        {
            userName: "John Snow",
            email:"test1@gmail.com",
            location: "Winterfell",
        },
        {
            userName: "Jammi Lannister",
            email:"test2@gmail.com",
            location: "Westeros",
        },
    ];
 return (
    <main>
        {numbers.map(number=>(
            <ul key={number}>
                <li>{number}</li>
            </ul>
        ))}
        {userInfo.map(user=>(
            <ul key={Math.random()}>
                <li>{user.userName}</li>
                <li>{user.email}</li>
                <li>{user.location}</li>
            </ul>
        ))}
    </main>
  )
}

export default List