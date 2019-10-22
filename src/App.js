import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">CRUD Genérico</h1>
          <p class="lead">A ideia é fazer um CRUD que seja customizavel através dos inputs que o usuário fornece</p>
        </div>
      <form>
      <div className="form-group">
        <label for="exampleFormControlInput1">Endereço de email</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="nome@exemplo.com"
        />
      </div>
    </form>
    </div>
  );
}

export default App;
