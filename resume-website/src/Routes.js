import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage} from './pages/AboutPage';
import { ResumePage } from './pages/ResumePage';
import { ContactPage } from './pages/ContactPage';
import { TouchdesignerPage } from './pages/TouchdesignerPage';


export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <HomePage />
                </Route>
                <Route path="/">
                    <AboutPage />
                </Route>
                <Route path="/">
                    <ResumePage />
                </Route>
                <Route path="/">
                    <TouchdesignerPage />
                </Route>
                <Route path="/">
                    <ContactPage />
                </Route>
            </Switch>
        </Router>
    );  
}