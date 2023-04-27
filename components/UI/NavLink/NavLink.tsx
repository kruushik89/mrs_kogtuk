import React from 'react';
import { Link } from 'react-scroll';
import { NavLinkProps } from '@/components/UI/NavLink/navLink.props';
import styles from '@/components/Header/Header.module.css';

const NavLink: React.FC<NavLinkProps> = ({ path, children }) => {
  return (
    <div className={styles.navigationItem}>
      <Link
        to={path}
        smooth={true}
        duration={500}
        spy={true}
        offset={-70}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
