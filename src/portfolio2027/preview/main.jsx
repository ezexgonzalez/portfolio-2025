import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PortfolioPreview from './PortfolioPreview.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode><PortfolioPreview /></StrictMode>,
);
