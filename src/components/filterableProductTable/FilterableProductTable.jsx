import React from 'react'
import SearchBar from '../searchBar/SearchBar'
import ProductTable from '../productTable/ProductTable'
import FilterableProductTable from '../filterableProductTable/FilterableProductTable'


export default function FilterableProductTable({ products }) {
    return (
        <div>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    );
}


