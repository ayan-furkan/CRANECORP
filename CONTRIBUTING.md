# Contributing to CraneCorp - PortFlow Management System

Thank you for your interest in contributing to CraneCorp! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Flutter SDK (v3.0 or higher)
- Git
- Raspberry Pi Zero W (for embedded development)

### Development Setup
1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/CRANECORP.git
   cd CRANECORP
   ```
3. Follow component-specific setup instructions in respective README files

## 📋 How to Contribute

### Reporting Issues
- Check existing issues before creating new ones
- Use clear, descriptive titles
- Include steps to reproduce
- Provide system information and error messages
- Use appropriate issue templates

### Suggesting Features
- Open an issue with the "enhancement" label
- Describe the feature and its benefits
- Include mockups or examples if applicable
- Discuss implementation approach

### Code Contributions

#### 1. Choose an Issue
- Look for issues labeled "good first issue" for beginners
- Comment on the issue to indicate you're working on it
- Ask questions if requirements are unclear

#### 2. Create a Branch
```bash
git checkout -b feature/descriptive-feature-name
# or
git checkout -b fix/issue-description
```

#### 3. Make Changes
- Follow existing code style and conventions
- Write clear, concise commit messages
- Include tests for new functionality
- Update documentation as needed

#### 4. Test Your Changes
- Run component-specific tests
- Test integration between components
- Verify mobile app functionality
- Test embedded system if applicable

#### 5. Submit a Pull Request
- Push your branch to your fork
- Create a pull request with clear description
- Link related issues
- Ensure CI checks pass
- Respond to review feedback

## 🏗️ Project Structure

```
CRANECORP/
├── 📱 MOBILE/          Flutter mobile application
├── 🗄️  DATABASE/       Node.js backend API
├── 🔧 EMBEDDED/        Raspberry Pi code
├── ⚡ HARDWARE/        Circuit designs
├── 🎯 SIMULATION/      Testing & validation
└── 📄 docs/           Documentation
```

## 📝 Code Style Guidelines

### General
- Use clear, descriptive variable and function names
- Write comments for complex logic
- Keep functions small and focused
- Follow DRY (Don't Repeat Yourself) principles

### JavaScript/Node.js (Backend)
- Use ES6+ features
- Follow semicolon usage consistently
- Use meaningful error handling
- Document API endpoints

### Dart/Flutter (Mobile)
- Follow official Dart style guide
- Use meaningful widget names
- Implement proper state management
- Handle platform differences appropriately

### C++ (Embedded)
- Use consistent indentation (4 spaces)
- Follow RAII principles
- Handle errors appropriately
- Comment hardware-specific code

## 🧪 Testing Guidelines

### Backend Testing
```bash
cd DATABASE
npm test
```

### Mobile Testing
```bash
cd MOBILE/crane_corp
flutter test
```

### Embedded Testing
- Test on actual Raspberry Pi hardware
- Verify GPIO functionality
- Test network communication

## 📖 Documentation

### Code Documentation
- Document public APIs
- Include usage examples
- Explain complex algorithms
- Update README files for changes

### User Documentation
- Update setup instructions
- Include troubleshooting guides
- Provide configuration examples
- Document new features

## 🔄 Pull Request Process

1. **Create PR**: Open with clear title and description
2. **Review**: Address feedback promptly
3. **Testing**: Ensure all tests pass
4. **Approval**: Obtain required approvals
5. **Merge**: Maintainers will merge approved PRs

### PR Checklist
- [ ] Code follows project style guidelines
- [ ] Tests added/updated for changes
- [ ] Documentation updated
- [ ] No breaking changes (or properly documented)
- [ ] Commit messages are clear
- [ ] PR description explains the change

## 🚫 What Not to Contribute

- Proprietary or copyrighted code
- Code that breaks existing functionality
- Changes without proper testing
- Large refactors without prior discussion
- Unrelated or experimental features

## 🏷️ Issue Labels

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Documentation improvements
- `good first issue`: Beginner-friendly
- `help wanted`: Community assistance needed
- `priority-high`: Critical issues

## 💬 Communication

### Channels
- **Issues**: Bug reports and feature requests
- **Pull Requests**: Code review and discussion
- **Discussions**: General questions and ideas

### Guidelines
- Be respectful and constructive
- Stay on topic
- Provide context and details
- Help others when possible

## 🎯 Development Priorities

### Current Focus Areas
1. **Mobile App**: UI/UX improvements
2. **Backend**: API optimization
3. **Embedded**: Hardware integration
4. **Documentation**: Setup guides
5. **Testing**: Automated test coverage

### Future Goals
- Real-time communication enhancements
- Advanced monitoring features
- Performance optimizations
- Security improvements

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

Contributors will be recognized in:
- Project README
- Release notes
- Contributors section

Thank you for helping improve CraneCorp! 🚀