import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = ({ username, onLogout }) => {
  const [salesData, setSalesData] = useState([]);
  const [topGames, setTopGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlatform, setSelectedPlatform] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [salesResponse, topGamesResponse] = await Promise.all([
          fetch('/sales-data.json'),
          fetch('/top-games.json')
        ]);

        const salesData = await salesResponse.json();
        const topGamesData = await topGamesResponse.json();

        setSalesData(salesData.salesData);
        setTopGames(topGamesData.topGames);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const platforms = ['All', 'Xbox', 'Steam', 'Nintendo', 'PlayStation'];

  const filteredData = selectedPlatform === 'All'
    ? salesData
    : salesData.filter(item => item.platform === selectedPlatform);

  const getTotalRevenue = () => {
    return filteredData.reduce((total, item) => total + item.revenue, 0);
  };

  const getPlatformStats = () => {
    const stats = {};
    salesData.forEach(item => {
      if (!stats[item.platform]) {
        stats[item.platform] = { count: 0, revenue: 0 };
      }
      stats[item.platform].count += 1;
      stats[item.platform].revenue += item.revenue;
    });
    return stats;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading">Loading dashboard...</div>
      </div>
    );
  }

  const platformStats = getPlatformStats();

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Gaming Sales Dashboard</h1>
          <p>Welcome, {username}!</p>
        </div>
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </header>

      <div className="dashboard-content">
        <div className="summary-cards">
          <div className="summary-card">
            <h3>Total Revenue</h3>
            <p className="revenue-amount">{formatCurrency(getTotalRevenue())}</p>
            <small>{selectedPlatform === 'All' ? 'All Platforms' : selectedPlatform}</small>
          </div>
          <div className="summary-card">
            <h3>Total Games</h3>
            <p className="games-count">{filteredData.length}</p>
            <small>Active Titles</small>
          </div>
          <div className="summary-card">
            <h3>Platforms</h3>
            <p className="platform-count">{Object.keys(platformStats).length}</p>
            <small>Gaming Platforms</small>
          </div>
        </div>

        <div className="dashboard-sections">
          <div className="section sales-section">
            <div className="section-header">
              <h2>Sales Data</h2>
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="platform-filter"
              >
                {platforms.map(platform => (
                  <option key={platform} value={platform}>
                    {platform}
                  </option>
                ))}
              </select>
            </div>
            <div className="sales-table-container">
              <table className="sales-table">
                <thead>
                  <tr>
                    <th>Game ID</th>
                    <th>Game Name</th>
                    <th>Platform</th>
                    <th>Revenue</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.game_id}</td>
                      <td>{item.game_name}</td>
                      <td>
                        <span className={`platform-badge ${item.platform.toLowerCase()}`}>
                          {item.platform}
                        </span>
                      </td>
                      <td>{formatCurrency(item.revenue)}</td>
                      <td>{new Date(item.date).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="section top-games-section">
            <h2>Top 5 Games by Revenue</h2>
            <div className="top-games-list">
              {topGames.map((game, index) => (
                <div key={game.game_id} className="top-game-item">
                  <div className="game-rank">#{game.rank}</div>
                  <div className="game-info">
                    <h4>{game.game_name}</h4>
                    <p className="game-platform">
                      <span className={`platform-badge ${game.platform.toLowerCase()}`}>
                        {game.platform}
                      </span>
                    </p>
                  </div>
                  <div className="game-revenue">
                    {formatCurrency(game.total_revenue)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section platform-stats-section">
            <h2>Platform Statistics</h2>
            <div className="platform-stats">
              {Object.entries(platformStats).map(([platform, stats]) => (
                <div key={platform} className="platform-stat-card">
                  <h4>
                    <span className={`platform-badge ${platform.toLowerCase()}`}>
                      {platform}
                    </span>
                  </h4>
                  <p>Games: {stats.count}</p>
                  <p>Revenue: {formatCurrency(stats.revenue)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;