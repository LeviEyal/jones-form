import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { AllLeadsListPage, NewLeadFormPage, ScreenShotsPage } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="screenshots" element={<ScreenShotsPage />} />
          <Route path="newLeadForm" element={<NewLeadFormPage />} />
          <Route path="allLeadsList" element={<AllLeadsListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);