# Financial Dashboard

## Setup Instructions

1. Clone repository
2. Install dependencies: `pnpm install`
3. Run development server: `pnpm dev`
4. Build for production: `pnpm build`

## Features

- Dashboard overview with financial metrics
- Card management
- Transaction history
- Statistical analysis
- Profile management

## Technical Stack

- React
- TypeScript
- TailwindCSS
- Recharts
- Zustand
- React Router
- Zod

## Architecture Highlights

- **State Management**: Zustand for simpler, efficient global state
- **Project Structure**: Feature-first with route co-location using `+` prefix convention
- **UI Components**: Custom components built with Tailwind and Radix primitives
- **Charts**: Recharts for consistent, React-native data visualization
- **Icons**: Unplugin Icons for optimized loading

## Development Assumptions

1. Mock data is used to simulate API responses
2. User authentication is not implemented as it wasn't in requirements
3. Form submissions are simulated with delays
4. Chart data is randomly generated for demonstration

## Deployment

The application is deployed and can be accessed at:

## Project Organization

```
app/
└── routes/
    └── dashboard/
        ├── +charts/
        │   ├── balance-history.tsx
        │   ├── expense-statistics.tsx
        │   └── weekly-activity.tsx
        ├── +components/
        │   └── transaction-list.tsx
        └── index.tsx
```

## Technical Decisions & Tradeoffs

### Chart Implementation

- **Pie Chart vs Polar Area**: Chose pie chart for expense statistics despite design showing polar area style
  - Ensures consistency across all charts using Recharts
  - Better TypeScript integration and maintainability
  - Trade-off: Slightly different visual style but better technical cohesion

### Performance Optimizations

- Build-time icon loading with unplugin-icons instead of runtime loading
- Modular dashboard components with consistent prop patterns
- Zustand for lightweight state management (compared to Redux)

### Component Architecture

- Feature-first organization with route co-location
- Consistent grid-based layout system using `span` props
- Base Card component that's reused across different card-type UI elements
- Semantic HTML with accessibility considerations

### Development Priorities

Given the timeline, prioritized:

1. Core functionality and data visualization
2. Consistent component patterns
3. Performance optimizations
4. Maintainable architecture

Future improvements could include:

- Enhanced chart interactivity
- Custom theme / dark mode setup
- Animation refinements
- E2E testing
- State persistence
