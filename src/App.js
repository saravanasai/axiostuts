import { Suspense } from 'react';
import './App.css';
import ContactList from './components/contactList/ContactList';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h2>Loading.....</h2>}> 

      <ContactList />

      </Suspense>
        
    </div>
  );
}

export default App;
