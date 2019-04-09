import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
        <h1>{props.kurssi.name}</h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            {console.log(props.osa + " " + props.maara)}
            <p>{props.osa} {props.maara}</p>
        </div>
    )}

const Content = (props) => {
    return (
        <div>
            {console.log(props)}
            <Part osa={props.kurssi.parts[0].name} maara={props.kurssi.parts[0].exercises} />
            <Part osa={props.kurssi.parts[1].name} maara={props.kurssi.parts[1].exercises} />
            <Part osa={props.kurssi.parts[2].name} maara={props.kurssi.parts[2].exercises} />
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>yhteensä {props.cource.parts[0].exercises + props.cource.parts[1].exercises + props.cource.parts[2].exercises} tehtävää</p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
        {
        name: 'Reactin perusteet',
        exercises: 10
        },
        {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
        },
        {
        name: 'Komponenttien tila',
        exercises: 14
        }
        ]
    }

    return (
        <div>
            <Header kurssi={course} />
            <Content kurssi={course} />
            <Total cource={course} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
