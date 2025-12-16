import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import styles from './SearchBox.module.css';

const SearchBox = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={`${styles.searchWrapper} ${open ? styles.active : ''}`}>
            <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
            />
            <button
                className={styles.iconBtn}
                onClick={() => setOpen(!open)}
                aria-label={open ? 'Close search' : 'Open search'}
            >
                {open ? <X size={20} /> : <Search size={22} />}
            </button>
        </div>
    );
};

export default SearchBox;
