import "./App.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import { useQuery } from "react-query";
function App() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const { data, isLoading, error } = useQuery("noting", () =>
    fetch("https://hilly-view.herokuapp.com/").then((res) => res.json())
  );
  const signIn = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };
  if (isLoading) {
    return <h2>data is isLoading</h2>;
  }
  if (data) {
    console.log(data);
  }
  return (
    <div className="App">
      <small onClick={signIn} className="btn btn-success">{data.message}</small>
    </div>
  );
}

export default App;
