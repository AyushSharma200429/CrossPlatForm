import React from 'react';
import '../css/SE03Max.css'; // Import the CSS file for styling

const SE03Max = () => {
  const product = {
    id: 1,
    name: 'SE03 Max',
    images: [
      require('../images/SE03 Max.png')
    ],
    description: 'The SE03 Lite is a sleek and efficient bike designed for urban commuting and weekend adventures.',
    features: {
      'Battery' : '2,7Kwh',
      'Battery Feature' : 'LFP with 1500 cycles Active Balancing Waterproof (IP67)',
      'Battery warranty' : '1 Years',
      'Charging time' : '4 hours',
      'Motor' : '1500w',
      'Max Speed' : '55km/h',
      'Warrenty On Electronic' : '1 year',
      'Max Range(@30km/h)' : '150km',
      'Max Range (@ 45km/h)' :'110km',
      'Max Range (@ Full Speed)' : '90Km',
    }
  };

  return (
    <div className="product-page">
      <div className="product-overview">
        <div className="product-details">
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
        </div>
        <div className="product-image-container">
          <img src={product.images[0]} alt={product.name} className="product-image" />
        </div>
      </div>
      <table className="product-features">
        <tbody>
          {Object.entries(product.features).map(([feature, value]) => (
            <tr key={feature}>
              <td className="feature-name">{feature}</td>
              <td className="feature-value">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SE03Max;
