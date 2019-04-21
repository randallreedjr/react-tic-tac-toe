import React from 'react';
import Square from './square.js';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleSquareClick(i) {
    // Copy the squares array from state
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  handleComputerMove() {
    // Make a random move out of the available squares
    const possibleMoves = this.state.squares.map((square, index) => (square == null ? index : null)).filter((square) => square != null);
    const move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    this.handleSquareClick(move);
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleSquareClick(i)}
      />
    );
  }

  render() {
    const status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <button className="computer-move-button" onClick={() => this.handleComputerMove()}>Computer Move</button>
      </div>
    );
  }
}
