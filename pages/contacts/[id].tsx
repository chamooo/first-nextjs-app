import ContactInfo from '../../components/ContactInfo';
import { GetServerSideProps } from 'next';
import { contactType } from '../../types';
import { FC } from 'react';

type ContactTypeProps = {
    contact: contactType
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    if (!data) {
        return { notFound: true };
    }

    return {
        props: {
            contact: data,
        },
    };
};

const Contact:FC<ContactTypeProps> = ({ contact }) => {
    return (
        <>
            <ContactInfo contact={contact} />
        </>
    );
};

export default Contact;
