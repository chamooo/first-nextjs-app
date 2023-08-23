import s from '../styles/Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

const Navbar: FC = () => {
    const navigation = [
        { id: 0, title: 'Home', path: '/' },
        { id: 1, title: 'Posts', path: '/posts' },
        { id: 2, title: 'Contacts', path: '/contacts' },
    ];

    const { pathname } = useRouter(); //шлях поточної сторінки

    return (
        <nav className={s.nav}>
            <div className={s.logo}>
                <Image src="/favicon.ico" width={50} height={50} alt="logo" />
            </div>
            <ul className={s.links}>
                {navigation.map(({ id, path, title }) => (
                    <li key={id} className={path === pathname ? s.active : null}>
                        <Link href={path}>{title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Navbar;
