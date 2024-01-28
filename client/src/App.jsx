import './App.css';
import CustomCard from './components/CustomCard';

function App() {

  return (
    <>
      <div class="container mx-auto px-4 py-6">
        <CustomCard>
          <h1>These are children components.</h1>
        </CustomCard>
      </div>
    </>
  );
}

export default App;
