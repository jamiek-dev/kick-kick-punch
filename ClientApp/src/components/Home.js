import React, { Component } from "react";

export class Home extends Component {
  displayName = Home.name;

  render() {
    return (
      <div id="container" class="home-container">
        <h1>Please select your opponent and health.</h1>
        <form
          name="options"
          id="options"
          method="get"
          action="high-kick-low-kick-punch.php"
        >
          Opponent:{" "}
          <select name="cpu">
            <option value="true">Computer</option>
            <option value="false">Human</option>
          </select>
          Starting Health:{" "}
          <select name="health">
            <option name="" value="1">
              10%
            </option>
            <option name="" value="2">
              20%
            </option>
            <option name="" value="3">
              30%
            </option>
            <option name="" value="4">
              40%
            </option>
            <option name="" value="5">
              50%
            </option>
            <option name="" value="6">
              60%
            </option>
            <option name="" value="7">
              70%
            </option>
            <option name="" value="8">
              80%
            </option>
            <option name="" value="9">
              90%
            </option>
            <option name="" value="10">
              100%
            </option>
          </select>
          <br />
          <p>
            This game is played just like Rock, Paper, Scissors, but with the
            additon of stamina and combos.
            <br />
            Please select your opponent and starting health to continue.
          </p>
          <input type="submit" name="submit" id="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
