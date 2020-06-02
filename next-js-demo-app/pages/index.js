import NavbarComp from "../components/navbar";
import React from 'react';
import axios from 'axios';
import Link from "next/link";

const NameByChoice = ({ posts }) => {
    return (
        <>
            <NavbarComp />
            <h1> Here is the APP</h1>
            <ul>
                
                {posts.map(post => (
                <li key="post.id">
                    <Link href={`/post?id=${post.id}`}>{post.title}></Link>
                </li>))}
            </ul>
        </>
    );
}

NameByChoice.getInitialProps = async () => {
    const response = await axios.get("http://jsonplaceholder.typicode.com/posts");
    const { data } = response;
    console.log(data[0]);
    return { posts: data, mood: "Happy!!!" };
};

export default NameByChoice;