// src/App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';

const API_BASE = 'http://localhost:5000/api/widgets';

const WidgetCard = ({ title, image, content1, content2 }) => (
  <div className="bg-white rounded-2xl shadow-lg p-4 w-full md:w-[30%] text-center">
    <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-2" />
    <h2 className="text-xl font-bold text-blue-600 mb-2">{title}</h2>
    <p className="text-gray-700">{content1}</p>
    {content2 && <p className="text-gray-500">{content2}</p>}
  </div>
);

const Section = ({ title, data, renderItem }) => (
  <div className="my-8">
    <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">{title}</h1>
    <div className="flex flex-wrap justify-center gap-6">
      {data.map((item, i) => renderItem(item, i))}
    </div>
  </div>
);

const App = () => {
  const [weather, setWeather] = useState([]);
  const [crypto, setCrypto] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const w = await fetch(`${API_BASE}/weather`).then(r => r.json());
        const c = await fetch(`${API_BASE}/crypto`).then(r => r.json());
        const n = await fetch(`${API_BASE}/news`).then(r => r.json());
        setWeather(w);
        setCrypto(c);
        setNews(n);
      } catch (err) {
        console.error('Failed to load data', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="text-center text-xl mt-10">Loading...</div>;

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-purple-800 my-6">🌐 Widget Dashboard</h1>
      <Section
        title="🌤 Weather Updates"
        data={weather}
        renderItem={(item, i) => (
          <WidgetCard
            key={i}
            title={item.city}
            image={item.image}
            content1={`Temperature: ${item.temp}°C`}
            content2={`Condition: ${item.condition}`}
          />
        )}
      />
      <Section
        title="💰 Crypto Prices"
        data={crypto}
        renderItem={(item, i) => (
          <WidgetCard
            key={i}
            title={item.name}
            image={item.image}
            content1={`Price: ${item.price}`}
          />
        )}
      />
      <Section
        title="🗞 Latest News"
        data={news}
        renderItem={(item, i) => (
          <WidgetCard
            key={i}
            title={item.title}
            image={item.image}
            content1={`Source: ${item.source}`}
          />
        )}
      />
    </div>
  );
};

export default App;
