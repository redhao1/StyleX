import React, { useState } from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import ProductDetails from './ProductTabs/ProductDetails';
import ProductReviews from './ProductTabs/ProductReviews';
import SizeChart from './ProductTabs/SizeChart';
import ShippingReturns from './ProductTabs/ShippingReturns';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

function ProductTabs (props) {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen width is less than or equal to 'sm' (600px)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={`tabs-listing ${isMobile ? 'vertical-tabs' : ''}`}>
            <div className="product-tabs">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        orientation={isMobile ? 'vertical' : 'horizontal'} // Set orientation based on screen width
                    >
                        <Tab label="Product Details" className="tablink" />
                        <Tab label="Product Reviews" className="tablink" />
                        <Tab label="Size Chart" className="tablink" />
                        <Tab label="Shipping & Returns" className="tablink" />
                    </Tabs>
            </div>
            <div className="tab-container" style={{padding: "30px 0px"}}>
                {value === 0 && <ProductDetails productDetails={props.productDetails}/>}
                {value === 1 && <ProductReviews />}
                {value === 2 && <SizeChart />}
                {value === 3 && <ShippingReturns />}
            </div>
        </div>
    );
};

export default ProductTabs;
