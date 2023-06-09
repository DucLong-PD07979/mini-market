import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { SearchIcon } from '../../../components/svg/IconSvg';
import MenuDrop from '../../../components/menu/menuDrop/MenuDrop';
import { useFetchWithFirebase } from '../../../hooks';
import Wrapper from '../../../components/wrapper/Wrapper';
import useDebonce from '../../../hooks/useDebonce';
import firebaseServices from '../../../services/firebase/firebase.services';
import { formatTextUpperCase } from '../../../util/helper';

const Search = (props) => {
    const cs = classNames;
    const [searchValue, setSearchValue] = useState('');
    const [valueSearchDelay] = useDebonce(searchValue, 600);
    const [resultSearch, setResultSearch] = useState([]);
    const [typeOfCategories, setTypeOfCategories] = useState('');

    const { getCategories, getSearchProducts } = firebaseServices.read_Data_To_Firebase;
    const { data: dataCategories, loading } = useFetchWithFirebase([], getCategories);

    let handleSearchChange = (e) => {
        let searchValue = e.target.value;
        setSearchValue(searchValue);
    };

    const { data: dataSearch } = useFetchWithFirebase(
        [valueSearchDelay, typeOfCategories],
        getSearchProducts(typeOfCategories, formatTextUpperCase(valueSearchDelay)),
    );

    useEffect(() => {
        setResultSearch(dataSearch);
    }, [dataSearch]);

    return (
        <div className={cs('header-search-wrap')}>
            <SearchIcon />
            <input
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Search and hit enter..."
            />
            <div className="search-with-categorie">
                <MenuDrop
                    title="All catergories"
                    icon={true}
                    itemsData={dataCategories}
                    loading={loading}
                    getTitle={setTypeOfCategories}
                ></MenuDrop>
            </div>
            <Wrapper
                className={valueSearchDelay ? `search-result-active` : 'search-result'}
            >
                <ul className="search-result-list">
                    {resultSearch.length > 0 &&
                        resultSearch.map((result) => (
                            <li
                                className="search-result-list--item"
                                key={result.title + result.id}
                            >
                                {result.title}
                            </li>
                        ))}
                </ul>
            </Wrapper>
        </div>
    );
};

export default Search;
