import ParentChanger from './ParentChanger';
import ParentProvider from './ParentProvider';

function App() {
  return (
    <ParentProvider>
      <ParentChanger />
    </ParentProvider>
  );
}

export default App;
