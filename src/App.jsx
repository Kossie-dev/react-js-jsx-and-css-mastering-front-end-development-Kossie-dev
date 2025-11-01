import {Routes, Route} from 'react-router-dom';
import TaskManager from './components/TaskManager'; 
import { Card } from './components/Card.jsx';
import Todos from './lib/api.jsx';
import Footer from './components/Footer';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';


export default function App() {
  return (
     <div className="">
      <Navbar /> 
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-[var(--card)] text-[var(--card-foreground)] overflow-hidden shadow rounded-lg p-6 border border-[var(--border)]">
                <div className="flex flex-col items-center justify-center">
                  <Home />
                  <div className="text-[var(--muted-foreground)] mt-4">
                      <TaskManager />
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="bg-[var(--card)] text-[var(--card-foreground)] overflow-hidden shadow rounded-lg p-6 border border-[var(--border)]">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-[var(--muted-foreground)] mt-4">
                    <About />
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/dashboard"
            element={
              <div className="bg-[var(--card)] text-[var(--card-foreground)] overflow-hidden shadow rounded-lg p-6 border border-[var(--border)]">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-[var(--muted-foreground)] mt-4">
                    <Dashboard />
                  </div>
                </div>
              </div>
            }
          />
          {/* API data display will go here */}
          <Route
            path="/api"
            element={
              <div className="bg-[var(--card)] text-[var(--card-foreground)] overflow-hidden shadow rounded-lg p-6 border border-[var(--border)]">
                <h2 className="text-2xl font-bold mb-4">API Data</h2>
                <div className="text-[var(--muted-foreground)]">
                  <Todos/> 
                    <Card /> 
                </div>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}
