# CraneCorp - PortFlow Management System

A comprehensive IoT-enabled port management system built with multiple technology stacks, featuring real-time monitoring, mobile controls, and embedded hardware integration.

## 🚀 Project Overview

CraneCorp is an innovative port management solution that combines:
- **Mobile Application**: Flutter-based mobile interface for port operations
- **Database Backend**: Node.js API server with SQLite database
- **Embedded Systems**: Raspberry Pi Zero W integration for hardware control
- **Hardware Design**: Custom circuit schemes for IoT connectivity

## 📋 Features

- Real-time port equipment monitoring
- Mobile-first user interface
- RESTful API for data management
- Embedded hardware integration
- Cross-platform mobile support (iOS/Android)
- Secure database operations

## 🏗️ Architecture

```
├── 📱 MOBILE/          Flutter mobile application
├── 🗄️  DATABASE/       Node.js backend with SQLite
├── 🔧 EMBEDDED/        Raspberry Pi Zero W code
├── ⚡ HARDWARE/        Circuit designs and schematics
└── 📄 Documentation   Project reports and guides
```

## 🛠️ Quick Start

### Prerequisites
- Node.js (v14 or higher)
- Flutter SDK
- Raspberry Pi Zero W (for embedded features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayan-furkan/CRANECORP.git
   cd CRANECORP
   ```

2. **Setup Database Backend**
   ```bash
   cd DATABASE
   npm install
   node server.js
   ```

3. **Setup Mobile Application**
   ```bash
   cd MOBILE/crane_corp
   flutter pub get
   flutter run
   ```

4. **Setup Embedded System**
   ```bash
   cd EMBEDDED
   make
   ```

## 📚 Component Documentation

Each component has detailed setup instructions:

- **[Mobile App Setup](MOBILE/README.md)** - Flutter installation and app configuration
- **[Database Setup](DATABASE/README.md)** - Backend API server setup
- **[Embedded Setup](EMBEDDED/README.md)** - Raspberry Pi configuration
- **[Hardware Design](HARDWARE/)** - Circuit schematics and PCB layouts

## 🔧 Development

### Database API
The backend server runs on port 3000 by default and provides RESTful endpoints for:
- Equipment status monitoring
- User authentication
- Data logging and analytics

### Mobile Application
Built with Flutter, supporting:
- Cross-platform deployment
- Real-time data synchronization
- Intuitive user interface

### Embedded Integration
Raspberry Pi Zero W handles:
- Sensor data collection
- Hardware control interfaces
- IoT connectivity

## 📖 Documentation

- **[Final Project Report](docs/CSE396%20Computer%20Engineering%20Project%20Final%20Report.pdf)** - Complete project documentation
- **[Contributing Guide](CONTRIBUTING.md)** - How to contribute to the project
- **Component Documentation:**
  - [Mobile App Setup](MOBILE/README.md) - Flutter installation and configuration
  - [Database Setup](DATABASE/README.md) - Node.js backend server setup
  - [Embedded Setup](EMBEDDED/README.md) - Raspberry Pi configuration
  - [Hardware Design](HARDWARE/README.md) - Circuit schematics and PCB layouts
  - [Simulation](SIMULATION/README.md) - Testing and validation environment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of a Computer Engineering final project (CSE396).

## 👥 Team

Developed as part of CSE396 Computer Engineering Project.

---

For detailed setup instructions for each component, please refer to the README files in the respective directories.
