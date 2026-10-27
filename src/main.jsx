import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PortfolioPreview from './portfolio2027/preview/PortfolioPreview.jsx';

// Portfolio 2027 is now the root entry. The 2025 app remains in Git history
// and src/App.jsx for rollback; it is not imported into the release bundle.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioPreview />
  </StrictMode>,
);
