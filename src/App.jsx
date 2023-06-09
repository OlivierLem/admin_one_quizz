import { Suspense, useState } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import AuthProvider from "./components/AuthProvider/AuthProvider";

function App() {

  const [log, setLog] = useState(true)

  function logout () {
    setLog(false)
  }

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <AuthProvider>
        <Header/>
        <Suspense>
          <Outlet />
        </Suspense>
      </AuthProvider>
    </div>
  );
}

export default App;
