import classNames from 'classnames';
import { useState } from 'react';
import AlertProvider from './components/alert/AlertProvider';
import RepoSection from './components/RepoSection';
import SearchBar from './components/SearchBar';
import OpenModalButton from './components/alert/OpenModalButton';
import Alert from './components/alert/Alerts';
import Portal from './components/Portal';
import UserSection from './components/UserSection';
import { useFetch } from './hooks/useFetch';
import { IUser } from './types';
import AddAlertModal from './components/alert/AddAlertModal';

const BASE_URL = 'https://api.github.com/users/'

const App = () => {
  const [userId, setUserId] = useState<string>()
  const [user, isUserLoading, userError] = useFetch<IUser>(userId ? BASE_URL + userId : undefined)

  const handleSearchInput = (value: string) => {
    setUserId(value)
  }
  return (
    <AlertProvider>
      <div className="App">
        <OpenModalButton />
        <AddAlertModal />
        <div className={classNames('container', { 'input-dirty': userId !== undefined })}>
          <h1 className="title">Github Users API</h1>
          <h4 className="subtitle">by Askar Ibrayev</h4>
          <div className="searchbar-container">
            <SearchBar
              handleSearchInput={handleSearchInput}
              placeholder='Enter user ID'
            />
          </div>
          <UserSection
            user={user}
            isLoading={isUserLoading}
            error={userError}
          />
          {user && <RepoSection repos_url={user.repos_url} />}
        </div>
        <Portal>
          <Alert />
        </Portal>
      </div>
    </AlertProvider>
  );
}

export default App;
