import Heading from '../../components/Heading';
import Link from 'next/link';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();

    if (!data) return { notFound: true };

    return {
        props: {
            posts: data,
        },
    };
};

const Posts = ({ posts }) => {
    return (
        <>
            <Heading tag="h1" text="Posts list" />
            <ul>
                {posts.map(({ title, id }) => {
                    return (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Posts;
