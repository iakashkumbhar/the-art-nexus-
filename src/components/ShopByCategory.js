import React from 'react';

const CategoryItem = ({ category }) => {
    return (
        <div className="category-item">
            <div className="category-name">{category}</div>
        </div>
    );
};

const ShopByCategory = () => {
    const categories = ['Painting', 'Photography', 'Fine Art Prints', 'Sculpture'];

    return (
        <>
            <hr className="shop-line" />
            <div className="shop-by-category">
                <div className="category-title">Shop by Category</div>
                <div className="category-list">
                    {categories.map((category, index) => (
                        <CategoryItem key={index} category={category} />
                    ))}
                </div>
            </div>
            <hr className="shop-line" />
        </>

    );
};

export default ShopByCategory;
