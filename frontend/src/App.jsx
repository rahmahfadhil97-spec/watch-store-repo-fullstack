import React from 'react';
import './styles/App.css'; // استيراد ملف التنسيق المنفصل

const TUDOR_WATCHES = [
  { id: 1, name: "BLACK BAY 58", price: "3,850", image: "https://www.tudorwatch.com/-/media/tudorwatch/model-assets/upright/large/tudor-m79030n-0001.png" },
  { id: 2, name: "PELAGOS FXD", price: "4,100", image: "https://www.tudorwatch.com/-/media/tudorwatch/model-assets/upright/large/tudor-m25707kn-0001.png" },
  { id: 3, name: "TUDOR ROYAL", price: "2,450", image: "https://www.tudorwatch.com/-/media/tudorwatch/model-assets/upright/large/tudor-m28600-0005.png" },
];

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">Tudor Master</div>
        <ul className="nav-links">
          <li>WATCHES</li>
          <li>OUR HERITAGE</li>
          <li>STORE LOCATOR</li>
        </ul>
      </nav>

      <section className="hero">
        <h2>BORN TO DARE</h2>
        <p>Explore the 2026 Collection</p>
      </section>

      <main className="watch-grid">
        {TUDOR_WATCHES.map((watch) => (
          <div key={watch.id} className="watch-card">
            <img src={watch.image} alt={watch.name} className="watch-image" />
            <h3>{watch.name}</h3>
            <p className="price">${watch.price}</p>
            <button className="btn-discover">Discover More</button>
          </div>
        ))}
      </main>
    </div>
  );
}
export default App;