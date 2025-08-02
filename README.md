# Healthcare Appointment Booking System

A modern, responsive web application for booking healthcare appointments built with React, TypeScript, and Tailwind CSS. This application allows patients to browse doctors, check their availability, and book appointments seamlessly.

## ✨ Features

- **Doctor Search**: Find doctors by name or specialization
- **Doctor Profiles**: View detailed information about each doctor
- **Appointment Booking**: Easy-to-use form with date and time selection
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Form Validation**: Real-time validation for all form fields
- **Confirmation**: Detailed confirmation page after booking
- **Modern UI**: Clean and intuitive user interface with Tailwind CSS

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with responsive utilities
- **State Management**: React Context API for global state
- **Routing**: React Router v6 for navigation
- **Build Tool**: Vite for fast development and building
- **Type Checking**: TypeScript for type safety
- **Linting**: ESLint and Prettier for code quality

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm (v8 or later) or yarn (v1.22 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/healthcare-appointment-booking.git
   cd healthcare-appointment-booking
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at `http://localhost:3000`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Sign up for a [Vercel account](https://vercel.com) if you don't have one
3. Import your project
4. Vercel will automatically detect your Vite + React project
5. Click "Deploy" and your app will be live!

## 📂 Project Structure

```
src/
├── assets/           # Static assets like images
├── components/       # Reusable UI components
│   ├── BookAppointment.tsx  # Appointment booking form
│   ├── DoctorCard.tsx       # Doctor card component
│   └── ...
├── context/          # React context providers
│   └── AppContext.tsx
├── data/             # Mock data
│   └── mockData.ts
├── pages/            # Page components
│   ├── DoctorDetail.tsx
│   ├── Home.tsx
│   └── ...
├── types/            # TypeScript type definitions
│   └── index.ts
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```

## 🛠 Available Scripts

- `dev`: Start development server
- `build`: Create production build
- `preview`: Preview production build locally
- `lint`: Run ESLint
- `lint:fix`: Fix ESLint issues
- `type-check`: Run TypeScript type checking

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Sign up for a [Vercel account](https://vercel.com) if you don't have one
3. Import your project
4. Vercel will automatically detect your Vite + React project
5. Click "Deploy" and your app will be live!


## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 🚧 Improvements with More Time

- Add user authentication
- Implement a real backend with Node.js/Express
- Add doctor login and appointment management
- Include patient history and medical records
- Add payment integration
- Implement real-time notifications

## 💡 Challenges Faced & Solutions

1. **State Management**
   - Challenge: Managing state across multiple components
   - Solution: Implemented React Context API for global state management

2. **Form Validation**
   - Challenge: Ensuring data integrity with complex forms
   - Solution: Added comprehensive form validation with clear error messages

3. **Responsive Design**
   - Challenge: Creating a consistent experience across devices
   - Solution: Used Tailwind's responsive utilities and mobile-first approach
