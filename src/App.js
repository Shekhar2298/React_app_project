import logo from './logo.svg';
import './App.css';
import LoginForm from './Login';
import RegistrationForm from './Registration';
import DatabaseTable from './Database';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Header />
    <Routes>
      
      <Route path='/Login' element={<LoginForm />} />
      <Route path='/Registration' element={<RegistrationForm />} />
      <Route path='/Database' element={<DatabaseTable />} />

    </Routes>

  </>
  );
}

export default App;
