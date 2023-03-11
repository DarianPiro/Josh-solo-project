import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import store from '../store';
import Reducer from '../Reducer';

// export const renderWithProviders = (
//   ui: React.ReactElement,
//   {
//     initialState,
//     store = createStore(Reducer, initialState),
//     ...renderOptions
//   } = {}
// ) => {
//   const mockedUsedNavigate = jest.fn();
//   jest.mock('react-router-dom', () => ({
//     ...(jest.requireActual('react-router-dom') as any),
//     useNavigate: () => mockedUsedNavigate,
//   }));
//   const Wrapper: React.FC = ({ children }) => {
//     return (
//       <BrowserRouter>
//         <Provider store={store}>{children}</Provider>
//       </BrowserRouter>
//     );
//   };
//   return render(ui, { wrapper: Wrapper, ...renderOptions });
// };

export const renderWithProviders = (children: React.ReactElement) => {
  const mockedUsedNavigate = jest.fn();
  jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
  }));
  return render(
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};
