import React from 'react'

const Title = ({text}) => {
    return (
        <h1>{text}</h1>
    )
};

const CoursePart = ({part}) => {
    return (
        <p>{part.name} {part.tasks}</p>
    )
};

const Content = ({courseParts}) => {
    return (
        <div>
            {courseParts.map(coursePart => <CoursePart key={coursePart.id} part={coursePart}/>)}
        </div>
    )
};

const TaskAmount = ({courseParts}) => {

    const calculateTaskSum = (taskSum, part) => {
        return taskSum + part.tasks;
    };

    let taskSum = courseParts.reduce(calculateTaskSum, 0);

    return (
        <p>yhteensä {taskSum} tehtävää</p>
    )
};

const Course = ({course}) => {
    return (
        <div>
            <Title text={course.name}/>
            <Content courseParts={course.parts}/>
            <TaskAmount courseParts={course.parts}/>
        </div>
    )
};

export default Course;