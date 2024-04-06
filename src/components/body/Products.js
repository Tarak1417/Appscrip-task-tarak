import React, { useState, useEffect, useRef } from 'react'
import downArrowLogo from '../../assets/icons/down-arrow-logo.png';
import upArrowLogo from '../../assets/icons/up-arrow-logo.png';
import leftArrowLogo from '../../assets/icons/left-arrow-logo.png';
import rightArrowLogo from '../../assets/icons/right-arrow-logo.png'
import heartLogo from '../../assets/icons/heart-logo.png';
import tickMarkLogo from '../../assets/icons/tick-mark-logo.png'
import { filterData } from '../../stores/filterData';
import './Products.css'

function Products() {
    const [products, setProducts] = useState([]);
    const [downArrow, setDownArrow] = useState(downArrowLogo);
    const [leftArrow, setLeftArrow] = useState(leftArrowLogo);
    const [dropdownCategories, setDropdownCategories] = useState({});
    const [hideFilters, setHideFilters] = useState(false);
    const [loading , setLoading] = useState(false);
    let filterSection = useRef(null);

    let toggleFilter = () => {
        setHideFilters(!hideFilters)
    }

    const showCategoriesHandler = (id) => {
        setDownArrow((previousArrow) => previousArrow === downArrowLogo ? upArrowLogo : downArrowLogo)
        setDropdownCategories((previous) => ({
            ...previous, [id]: !previous[id]
        }))
    }

    const hideFilterSection = () => {
        setLeftArrow((previousArrow) => previousArrow === leftArrowLogo ? rightArrowLogo : leftArrowLogo)
        if (filterSection.current) {
            filterSection.current.style.display = hideFilters ? 'none' : 'block'
        }
    }

    const getProducts = async () => {
        let URL = 'https://fakestoreapi.com/products'
        try {
            setLoading(true)
            const response = await fetch(URL);
            const data = await response.json();
            setProducts(data)
            setLoading(false)
        }
        catch (error) {
            alert('Internal server Errror', error)
        }
    }

    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setHideFilters(true)
        }
        else {
            setHideFilters(false)
        }
    }
    
    useEffect(() => {
        getProducts();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    useEffect(() => {
        handleResize();
    }, [])

    if(loading){
        return (
            <div>
               <center> <p> Loading.... </p></center>
            </div>
        )
    }

    return (
        <>
            <main id='filter-bar-top-section'>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <p className='total-products-count d-none-mobile'>3425 ITEMS</p>
                    <div style={{ display: 'flex', gap: '6px', cursor: 'pointer', color: '#888792' }} onClick={() => {
                        toggleFilter();
                        hideFilterSection()
                    }}>
                        <img src={leftArrow} alt='arrow-left-icon' />
                        <p style={{ textDecoration: 'underLine' }}>{hideFilters ? 'SHOW FILTERS' : 'HIDE FILTERS'}</p>
                    </div>
                </div>
                <section className='recomended-section' style={{ position: 'relative', cursor: 'pointer', paddingRight: '12px' }}>
                    <div className='recomended-head'>
                        <p>RECOMENDED</p>
                        <img src={downArrowLogo} alt='arrow-down-icon' />
                    </div>

                    <div className='recomeded-filter-dropdown'>
                        <div style={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <img src={tickMarkLogo} alt='tick-mark-icon' style={{ height: '26px', width: '26px' }} />
                            <p style={{ fontSize: '18px', fontWeight: '700', lineHeight: '40px', color: '#252020' }}>RECOMENDED</p>
                        </div>
                        <div className='recomended-dropdown-items'>
                            <p>newest first</p>
                            <p>popular</p>
                            <p>price : high to low</p>
                            <p>price : low to high</p>
                        </div>
                    </div>
                </section>
            </main>

            <main id='products-main-section'>
                <aside id='filter-section' ref={filterSection}>
                    <div className='filter-title' style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ height: '26px', width: '26px', border: '1px solid #4D4D4D' }}></div>
                        <p>CUSTOMIZE</p>
                    </div>
                    <hr />
                    {
                        filterData && filterData.map((item) => {
                            const { id, title } = item;
                            return (
                                <>
                                    <div className='filter-item' key={id}>
                                        <div className='filter-title'>
                                            <p>{title}</p>
                                            <img src={downArrow} alt='Dropdown Menu Arrow'
                                                onClick={() => showCategoriesHandler(id)} />
                                        </div>
                                        <div className='filter-details'>
                                            <p>All</p>
                                        </div>

                                        {dropdownCategories[id] &&
                                            <form class='filter-show-form'>
                                                <div class='filter-show-title'>
                                                    <p>Unselect all</p>
                                                </div>
                                                <div class='filter-checkboxes'>
                                                    <input type='checkbox' /> <label htmlFor='men'>Men</label>
                                                </div>
                                                <div class='filter-checkboxes'>
                                                    <input type='checkbox' /> <label htmlFor='women'>Women</label>
                                                </div>
                                                <div class='filter-checkboxes'>
                                                    <input type='checkbox' /> <label htmlFor='boys&kids'>Boys & Kids</label>
                                                </div>
                                            </form>
                                        }
                                    </div>
                                    <hr />
                                </>
                            )
                        })
                    }

                </aside>

                <section id='products-all-section'>
                    {
                        products && products.map((item) => {
                            const { id, image, price, title } = item
                            return (
                                <section key={id}>
                                    <div className='product-container'>
                                        <div>
                                            <img className='product-image' src={image} alt={title} />
                                            <p className='product-name'>{title}</p>
                                            <p className='product-price'>{`$${price}`}</p>
                                            <div className='account-creation-info'>
                                                <p><a href='#' style={{ textDecoration: 'underLine', color: '#888792' }}>Sign in</a>or Create an account to see pricing</p>
                                                <img src={heartLogo} alt='like-icon' />
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )
                        })
                    }
                </section>
            </main>
        </>
    )
}


export default Products
