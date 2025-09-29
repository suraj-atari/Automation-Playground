# Gaming Dashboard - QA Automation Test Project

## 📋 Project Overview

This is a React-based gaming sales dashboard designed specifically for **QA Test Automation Engineer** interviews. The application provides a realistic testing environment with user authentication, data visualization, and multiple testing scenarios.

## 🔧 Prerequisites

### System Requirements
- **Node.js**: Version 14.x or higher (Recommended: 16.x or 18.x)
- **npm**: Version 6.x or higher (comes with Node.js)
- **Operating System**: Windows, macOS, or Linux
- **Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

### Check Your Node.js Version
```bash
node --version
npm --version
```

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/)

## 🚀 Installation & Setup

### Step 1: Clone/Download the Project
```bash
# If using git
git clone <repository-url>

# Or download and extract the zip file
```

### Step 2: Navigate to Project Directory
```bash
cd gaming-dashboard
```

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Start the Development Server
```bash
npm start
```

The application will automatically open in your default browser at `http://localhost:3000`

### Step 5: Verify Installation
- You should see the login page
- Try logging in with demo credentials (see below)
- Dashboard should load with gaming data

## 🔑 Test User Credentials

The following users are available for testing (stored in `public/users.csv`):

| Username | Password | Role |
|----------|----------|------|
| admin | admin123 | Administrator |
| testuser | password123 | Test User |
| automation | test123 | Automation Tester |
| engineer | qwerty456 | QA Engineer |
| demo | demo123 | Demo User |
| manager | manager789 | Manager |
| analyst | data123 | Data Analyst |
| tester | test456 | Tester |
| developer | dev789 | Developer |
| user1 | user123 | Regular User |

## 📊 Data Sources

### User Authentication Data
- **File**: `public/users.csv`
- **Format**: CSV (Comma Separated Values)
- **Fields**: username, password
- **Purpose**: Controls user login access

### Gaming Sales Data
- **File**: `public/sales-data.json`
- **Format**: JSON
- **Records**: 20 game entries
- **Fields**:
  - `game_id` (string)
  - `game_name` (string)
  - `platform` (Xbox, Steam, Nintendo, PlayStation)
  - `revenue` (number)
  - `date` (YYYY-MM-DD format)

### Top Games Ranking
- **File**: `public/top-games.json`
- **Format**: JSON
- **Records**: Top 5 highest revenue games
- **Fields**:
  - `game_id` (string)
  - `game_name` (string)
  - `platform` (string)
  - `total_revenue` (number)
  - `rank` (1-5)

## 🏗️ Project Structure

```
gaming-dashboard/
├── public/
│   ├── users.csv              # User authentication data
│   ├── sales-data.json        # Gaming sales data (20 records)
│   ├── top-games.json         # Top 5 games ranking
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js                 # Main application component
│   ├── App.css                # Global styles
│   ├── Login.js               # Login component
│   ├── Login.css              # Login page styles
│   ├── Dashboard.js           # Dashboard component
│   ├── Dashboard.css          # Dashboard styles
│   └── index.js               # Application entry point
├── package.json               # Project dependencies
├── package-lock.json          # Dependency lock file
└── README.md                  # This file
```

## 🎯 Features for Testing

### 1. Authentication System
- CSV-based user validation
- Login/logout functionality
- Session management
- Error handling for invalid credentials

### 2. Dashboard Features
- **Sales Data Table**: Displays all 20 games with filtering
- **Platform Filter**: Filter by Xbox, Steam, Nintendo, PlayStation
- **Top 5 Games**: Revenue-based ranking
- **Summary Cards**: Total revenue, game count, platform count
- **Platform Statistics**: Revenue breakdown by platform

### 3. Data Validation Points
- User authentication against CSV data
- Sales data display accuracy
- Revenue calculations
- Platform filtering functionality
- Top games ranking correctness

## 🔧 Available Scripts

### Development
```bash
npm start          # Start development server (http://localhost:3000)
npm run build      # Create production build
npm test           # Run tests (if any)
npm run eject      # Eject from Create React App (use with caution)
```

### Testing Commands
```bash
# Start the application for testing
npm start

# Build for production testing
npm run build

# Serve production build locally (requires serve package)
npx serve -s build
```

## 🧪 QA Testing Guidelines

### Key Testing Areas

1. **Login Functionality**
   - Test all 10 valid users from `users.csv`
   - Verify invalid credentials are rejected
   - Test empty fields and edge cases

2. **Data Accuracy**
   - Verify all 20 games display correctly
   - Check revenue calculations
   - Validate platform filtering
   - Confirm top 5 games ranking

3. **UI/UX Testing**
   - Responsive design across devices
   - Platform badge colors and styling
   - Navigation and user flow
   - Error message display

4. **Data Integrity**
   - Cross-reference UI data with source files
   - Verify mathematical calculations
   - Test data refresh scenarios

### Browser Testing
- Chrome (primary)
- Firefox
- Safari (macOS)
- Edge

### Responsive Testing
- Desktop (1920x1080, 1366x768)
- Tablet (768x1024)
- Mobile (375x667, 414x896)

## 🐛 Troubleshooting

### Common Issues

**Port 3000 already in use:**
```bash
# Kill process using port 3000
npx kill-port 3000

# Or start on different port
PORT=3001 npm start
```

**Dependencies installation fails:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Application doesn't load:**
1. Check Node.js version (should be 14+)
2. Verify all dependencies installed successfully
3. Check browser console for errors
4. Ensure no firewall blocking localhost:3000

**Data not loading:**
1. Verify data files exist in `public/` folder
2. Check browser network tab for 404 errors
3. Ensure JSON files have valid syntax

## 📝 Testing Notes

### Expected Behavior
- Only users in `users.csv` can login
- All sales data should match `sales-data.json` exactly
- Top 5 games should match `top-games.json` ranking
- Revenue calculations should be mathematically correct
- Platform filtering should show only relevant games

### Test Data Characteristics
- **Total Games**: 20 (5 per platform)
- **Platforms**: Xbox, Steam, Nintendo, PlayStation
- **Date Range**: 2024-01-15 to 2024-01-19
- **Revenue Range**: $540,000 to $2,100,000
- **Total Revenue**: $25,000,000

## 🔄 Data Modification

To modify test data:

1. **Users**: Edit `public/users.csv`
2. **Sales Data**: Edit `public/sales-data.json`
3. **Top Games**: Edit `public/top-games.json`

*Note: Refresh browser after data changes*

## 📞 Support

For technical issues during the interview:
1. Check the troubleshooting section above
2. Verify Node.js and npm versions
3. Ensure all files are present in correct locations
4. Check browser console for specific error messages

## 🎯 Interview Focus Areas

This project is designed to test:
- **Functional Testing**: Login, data display, calculations
- **UI Testing**: Responsive design, user interactions
- **Data Validation**: Accuracy, integrity, edge cases
- **Cross-browser Testing**: Compatibility across browsers
- **Test Case Design**: Comprehensive test coverage
- **Bug Reporting**: Issue identification and documentation
- **Automation Potential**: Identifying automation opportunities

---

**Good luck with your QA automation testing! 🚀**
