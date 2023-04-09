import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SearchIcon } from '../../../components/svg/IconSvg';
import MenuDrop from '../../../components/menu/menuDrop/MenuDrop';
import { useFetch } from '../../../hooks';
import { fetchCategories } from '../../../services/api/productsServices';
import Wrapper from '../../../components/wrapper/Wrapper';
import useDebonce from '../../../hooks/useDebonce';
// import { SearchProducts } from '../helper';
import { fetchSearchProducts } from '../../../services/api/productsServices';

const Search = (props) => {
    const cs = classNames;
    const [categoriesData, setCategoriesData] = useState([]);
    const { data: dataCategories, loading } = useFetch([], fetchCategories);
    const [searchValue, setSearchValue] = useState('');
    const [valueSearchDelay] = useDebonce(searchValue, 600);
    const [resultSearch, setResultSearch] = useState([]);

    useEffect(() => {
        let categoriesMain = dataCategories.slice(0, 6); // lấy các categories chính
        setCategoriesData(categoriesMain);
    }, [dataCategories]);

    let handleSearchChange = (e) => {
        let searchValue = e.target.value
        setSearchValue(searchValue);
    };

    useEffect(() => {
        const fecthData = async () => {
            let dataSearch = await fetchSearchProducts(valueSearchDelay);
            setResultSearch(dataSearch.data);
        };

        return () => {
            fecthData();
        };
    }, [valueSearchDelay]);

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
                    itemsData={categoriesData}
                    loading={loading}
                ></MenuDrop>
            </div>
            <Wrapper
                className={valueSearchDelay ? `search-result-active` : 'search-result'}
            >
                <ul className="search-result-list">
                    {resultSearch.length > 0 && resultSearch.map((result) => (
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

Search.propTypes = {};

export default Search;
