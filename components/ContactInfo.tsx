import Heading from './Heading';
import { contactType } from '../types';
import { FC } from 'react';

type contactInfoProps = {
    contact: contactType;
};

const ContactInfo: React.FC<contactInfoProps> = ({ contact }) => {
    const { name, email, address } = contact || {};
    const { street, suite, city, zipcode } = address || {};

    if (!contact) return <Heading text="Data isn't found" tag="h3" />;

    return (
        <>
            <Heading tag="h2" text={name} />
            <table>
                <tbody>
                    <tr>
                        <td>Email: </td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td>Street: </td>
                        <td>{street}</td>
                    </tr>
                    <tr>
                        <td>Suite: </td>
                        <td>{suite}</td>
                    </tr>
                    <tr>
                        <td>City: </td>
                        <td>{city}</td>
                    </tr>
                    <tr>
                        <td>Zip code: </td>
                        <td>{zipcode}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default ContactInfo;
