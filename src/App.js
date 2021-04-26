import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import ContactList from "./components/ContactList";
import Detail from "./components/Detail";
import ContactState from "./context/ContactState";

const App = () => {
    return (
        <ContactState>
            <div className="container mt-3">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={ContactList} />
                        <Route path="/detail/:index" component={Detail} />
                        <Redirect to="/" />
                    </Switch>
                </BrowserRouter>
            </div>
        </ContactState>
    );
};


export default App;