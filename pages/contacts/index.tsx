import Heading from '../../components/Heading';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { contactType } from '../../types';
import { FC } from 'react';


type ContactsTypeProps = {
    contacts: [contactType] // так як contacts - масив, ми вказуємо, що кожен елемент масиву буде типу contactType
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();

    if (!data) {
        return { notFound: true };
    }

    return {
        props: {
            contacts: data,
        },
        revalidate: 3600, // перевірка кожну годину
    };
};
const Contacts: FC<ContactsTypeProps> = ({ contacts }) => {
    return (
        <>
            <Heading tag="h1" text="Contacts:" />
            <ul>
                {contacts.map((user, i) => (
                    <li key={i}>
                        <Link href={`/contacts/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Contacts;
