
import { Redirect, Route, Switch } from 'react-router-dom';

import NavBar from './shared/components/nav/NavBar';
import SimpleFormContainer from './modules/snippets/simple-form/SimpleFormContainer';
import ComplexFormContainer from './modules/snippets/complex-form/ComplexFormContainer';
import FormikFormContainer from './modules/snippets/formik-form/FormikFormContainer';

import './App.css';
import SurveyContainer from './modules/survey/SurveyContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container app-container">
        <Switch>
          <Route exact path="/simple" component={SimpleFormContainer} />
          <Route exact path="/complex" component={ComplexFormContainer} />
          <Route exact path="/formik" component={FormikFormContainer} />
          <Route exact path="/survey" component={SurveyContainer} />
          <Redirect
            exact
            from="/"
            to="/simple"
          />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
