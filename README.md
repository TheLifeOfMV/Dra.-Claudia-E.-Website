# General Surgeon Website

A patient-centric web application that showcases a surgeon's expertise and allows visitors to request appointments online.

## Project Overview

This project is a modern, responsive website for a general surgeon's practice that:

- Highlights the surgeon's expertise and services
- Makes it easy for patients to learn about surgical procedures
- Provides a simple way to request appointments online
- Offers contact information and location details

## Tech Stack

### Backend
- **FastAPI** (Python 3.11): Provides a RESTful API with automatic OpenAPI documentation
- **Pydantic**: Enforces data validation and generates API schemas
- **SQLAlchemy** (future implementation): Database ORM for data persistence
- **uvicorn**: ASGI server for running the application

### Frontend
- **Next.js 13**: React framework with hybrid rendering capabilities
- **TypeScript**: Type-safe JavaScript for more robust code
- **Styled Components**: CSS-in-JS styling solution
- **React Query**: Data fetching and state management
- **React Hook Form**: Form validation and submission

## Project Structure

```
general-surgeon-website/
├── backend/              # FastAPI server
│   ├── main.py           # API endpoints and app configuration
│   └── requirements.txt  # Python dependencies
│
└── frontend/             # Next.js application
    ├── components/       # Reusable UI components
    ├── pages/            # Next.js pages
    ├── styles/           # Global styles and theme
    ├── package.json      # JavaScript dependencies
    └── tsconfig.json     # TypeScript configuration
```

## Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **WCAG Accessible**: Uses semantic HTML and proper color contrast
- **Modern UI**: Clean, professional design appropriate for healthcare
- **Appointment Booking**: Online form for requesting appointments
- **Service Showcase**: Detailed information about surgical procedures
- **Contact Information**: Map integration and contact details
- **SEO Optimized**: Proper metadata for search engine visibility

## Getting Started

### Prerequisites

- Node.js (v16+)
- Python (v3.11+)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd general-surgeon-website/backend
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Run the server:
   ```
   uvicorn main:app --reload
   ```

The API will be available at http://localhost:8000 with documentation at http://localhost:8000/docs

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd general-surgeon-website/frontend
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

The website will be available at http://localhost:3000

## Deployment

### Backend
- Deploy to a PaaS like Render or Heroku
- Or deploy to a VPS using Gunicorn and Nginx

### Frontend
- Deploy to Vercel (optimized for Next.js)
- Or deploy to Netlify, AWS Amplify, etc.

## Future Enhancements

- Add database integration for storing appointment requests
- Implement admin panel for managing appointments
- Add testimonials section with CRUD functionality
- Implement email notifications for appointment requests
- Add image gallery for before/after cases (with patient consent)
- Integrate with electronic health record systems

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by modern healthcare websites
- Icons from Material Design icons
- Stock images placeholder (to be replaced with actual content) 