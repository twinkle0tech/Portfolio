# Muskan Tamang - Professional Portfolio

A fully responsive portfolio website showcasing my skills, projects, and professional journey as a tech enthusiast and designer.

---

## 🌟 Features

- **Modern Responsive Design**
  - Mobile-first approach
  - Cross-browser compatible
  - Animated UI elements

- **Complete Sections**
  - Hero with animated profile image
  - About me with skills matrix
  - Interactive timeline
  - Project showcase
  - Working contact form

- **Technical Highlights**
  - Vanilla JavaScript (no jQuery)
  - CSS3 animations and transitions
  - PHP backend with MySQL database
  - Form validation (client + server side)
 
---

## 🛠️ Technologies

| Frontend       | Backend       | Tools          |
|----------------|---------------|----------------|
| HTML5          | PHP 7+        | XAMPP          |
| CSS3           | MySQL         | Git            |
| JavaScript     |               | VS Code        |
| Font Awesome   |               | Google Fonts   |

---

## 🚀 Quick Setup (XAMPP)

1. **Install XAMPP**  
   Download from [Apache Friends](https://www.apachefriends.org/)

2. **Project Setup**
   ```bash
   # Clone repository
   git clone https://github.com/twinkle0tech/portfolio.git
   # Move to htdocs
   mv portfolio /path/to/xampp/htdocs/

---
## Database Configuration

Access phpMyAdmin at http://localhost/phpmyadmin

Create database portfolio_db

Import this SQL:

sql
CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  subject VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


Launch Project
Start Apache & MySQL in XAMPP, then visit:
http://localhost/portfolio
