import { connect } from "react-redux";

import Platformer from "../games/Platformer.jsx";

const mapStateToProps = (state) => ({
  message: state.message,
});

const Game = connect(mapStateToProps)(Platformer);

export default Game;
