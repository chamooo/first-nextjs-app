import Heading from '../components/Heading';


export const getStaticProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/socials/`);
    const data = await response.json();

    if (!data) return { notFound: true };

    return {
        props: { socials: data },
    };
};


const Home = ({ socials }) => {
    return (
        <Heading tag="h1" text="Hello"/>
    );
};

export default Home;
