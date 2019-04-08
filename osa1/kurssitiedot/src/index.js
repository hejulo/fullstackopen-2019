import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
        <h1>{props.kurssi}</h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.osa} {props.maara}</p>
        </div>
    )}

const Content = (props) => {
    return (
        <div>
            <Part osa={props.osa1.name} maara={props.osa1.exercises} />
            <Part osa={props.osa2.name} maara={props.osa2.ecercises} />
            <Part osa={props.osa3.name} maara={props.osa3.exercises} />
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

    const part1 =  {
        name: 'Reactin perusteet',
        exercises: 10
    }
    const part2 = {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
    }
    const part3 = {
        name: 'Komponenttien tila',
        exercises: 14
    }

    return (
        <div>
            <Header kurssi={course} />
            <Content osa1={part1} osa2={part2} osa3={part3} />
            <Total yhteensa={part1.exercises + part2.exercises + part3.exercises} />
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));
