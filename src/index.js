import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from './components/progress_bar';
import Question from './components/question';
import Input from './components/input';
import Answer from './components/answer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestionNumber: 0,
      currentQuestion: null,
      correctAnswer: null,
      userAnswer: null,
    };
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
