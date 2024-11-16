import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../css/Products.css'; // Import the CSS file

const products = [
  {
    id: 1,
    name: 'Rhyno SE03 Lite',
    description: 'SE03 Lite',
    image: require('../images/SE03 Lite.png'), // Adjust path as needed
    link: '/product/se03-lite' // Add a link for each product
  },
  {
    id: 2,
    name: 'Rhyno SE03',
    description: 'SE03',
    image: require('../images/SE03.png'), // Adjust path as needed
    link: '/product/se03' // Add a link for each product
  },
  {
    id: 3,
    name: 'Rhyno SE03 Max',
    description: 'SE03 Max',
    image: require('../images/SE03 Max.png'), // Adjust path as needed
    link: '/product/se03-max' // Add a link for each product
  },
];

const ComparisonTable = () => (
  <table className="comparison-table">
    <thead>
      <tr>
        <th>Specification</th>
        {products.map(product => (
          <th key={product.id}>{product.name}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Battery</td>
        <td>1.8Kwh</td>
        <td>2.7Kwh</td>
        <td>2.7Kwh</td>
      </tr>
      <tr>
        <td>Battery features</td>
        <td>LFP with 1500 cycles<br/>Active Balancing<br/>Waterproof (IP67)</td>
        <td>LFP with 1500 cycles<br/>Active Balancing<br/>Waterproof (IP67)</td>
        <td>LFP with 1500 cycles<br/>Active Balancing<br/>Waterproof (IP67)</td>
      </tr>
      <tr>
        <td>Battery warranty</td>
        <td>3 years</td>
        <td>3 years</td>
        <td>3 years</td>
      </tr>
      <tr>
        <td>Charging time</td>
        <td>3 hours (12A)</td>
        <td>4 hours (12A)</td>
        <td>4 hours (12A)</td>
      </tr>
      <tr>
        <td>Motor</td>
        <td>1500W</td>
        <td>1500W</td>
        <td>2000W</td>
      </tr>
      <tr>
        <td>Max speed</td>
        <td>55 km/h</td>
        <td>55 km/h</td>
        <td>65 km/h</td>
      </tr>
      <tr>
        <td>Warranty on electronics</td>
        <td>1 year</td>
        <td>1 year</td>
        <td>1 year</td>
      </tr>
      <tr>
        <td>Max range (@30km/h)</td>
        <td>100 km</td>
        <td>150 km</td>
        <td>120 km</td>
      </tr>
      <tr>
        <td>Max range (@45km/h)</td>
        <td>90 km</td>
        <td>110 km</td>
        <td>100 km</td>
      </tr>
      <tr>
        <td>Max range (@full speed)</td>
        <td>60 km</td>
        <td>90 km</td>
        <td>80 km</td>
      </tr>
      <tr>
        <td>Other key benefits</td>
        <td>Fire-safe battery<br/>Range prediction<br/>Comfortable ride<br/>Stable and safe</td>
        <td>Fire-safe battery<br/>Range prediction<br/>Comfortable ride<br/>Stable and safe</td>
        <td>Fire-safe battery<br/>Range prediction<br/>Comfortable ride<br/>Stable and safe</td>
      </tr>
    </tbody>
  </table>
);

const Products = () => {
  return (
    <div className="products">
      <div className="product-list">
        {products.map((product) => (
          <Link to={product.link} key={product.id} className="product-link">
            <div className="product">
              <img src={product.image} alt={product.name} />
              <div className="product-overlay">
                <p>{product.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <ComparisonTable />
    </div>
  );
};

export default Products;
