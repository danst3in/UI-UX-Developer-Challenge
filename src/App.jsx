import React, { useMemo, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FourOhFour from "./FourOhFour";
import Home from "./Home";
import ResetPassword from "./ResetPassword";
import { SuccessContext } from "./SuccessContext";
import { useForm } from "./useForm";

function App() {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [reset, setReset] = useState(false);

  const providerValue = useMemo(() => ({ reset, setReset }), [reset, setReset]);

  return (
    <BrowserRouter>
      <SuccessContext.Provider value={providerValue}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reset-password" exact component={ResetPassword} />
          <Route path="/" component={FourOhFour} />
        </Switch>
      </SuccessContext.Provider>
    </BrowserRouter>
  );
}

export default App;
