import Heading from '../../components/Heading';
import { GetStaticProps, GetStaticPaths } from 'next';
// механізм статичної генерації сторінок
export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();

    // формуємо масив шляхів
    // кожен елемент масиву - це спеціальний обʼєкт з властивістю params
    // id обовʼязково має бути string
    const paths = data.map(({ id }) => ({
        params: { id: id.toString() },
    }));

    // повертаємо спеціальний обʼєкт
    return {
        paths,
        fallback: false, // якщо виникне помилка - буде повернена 404 сторінка
    };
};

// наповнюємо сторінки контентом
export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();

    if (!data) return { notFound: true };

    return {
        props: {
            post: data,
        },
    };
};

const Post = ({ post }) => {
    return <Heading tag="h1" text={post.title} />;
};

export default Post;
