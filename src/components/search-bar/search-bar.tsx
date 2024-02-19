import React from 'react';

import styles from './styles.module.css';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className={styles['search-bar']}>
      <input
        type='text'
        placeholder='Search your trip...'
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles['search']}
      />

      <span className={styles['search-icon']}>
        <Search size={20} />
      </span>
    </div>
  );
};

export default SearchBar;
