import React from 'react'
import ReactDOM from 'react-dom'
/*
const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = 'Reactin perusteet'
    const exercises1 = 10
    const part2 = 'Tiedonvälitys propseilla'
    const exercises2 = 7
    const part3 = 'Komponenttien tila'
    const exercises3 = 14
  
    return (
      <div>
        <h1>{course}</h1>
        <p>
          {part1} {exercises1}
        </p>
        <p>
          {part2} {exercises2}
        </p>
        <p>
          {part3} {exercises3}
        </p>
        <p>yhteensä {exercises1 + exercises2 + exercises3} tehtävää</p>
      </div>
    )
  }
*/

const Header = (props) => {
    return (
        <div>
        <h1>{props.kurssi}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <p>
            {props.osa1} {props.tehtavat1}
            </p>
            <p>
            {props.osa2} {props.tehtavat2}
            </p>
            <p>
            {props.osa3} {props.tehtavat3}
            </p>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>yhteensä {props.yhteensa} tehtävää</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack -sovelluskehitys';
    const part1 = 'Reactin perusteet';
    const exercises1 = 10;
    const part2 = 'Tiedonvälitys propseilla';
    const exercises2 = 7;
    const part3 = 'Komponenttien tila';
    const exercises3 = 14;

    return (
        <div>
            <Header kurssi={course} />
            <Content osa1={part1} osa2={part2} osa3={part3} tehtavat1={exercises1} tehtavat2={exercises2} tehtavat3={exercises3} />
            <Total yhteensa={exercises1 + exercises2 + exercises3} />
         </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));
