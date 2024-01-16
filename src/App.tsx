import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { Main, NotFound } from './pages';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
