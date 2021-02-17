import React from 'react';
import ReactDOM from 'react-dom';
import './question-item.css';


const QuestionItem = ({question}) => {
    let adapter = {
        header: question.short_description,
        author: question.author,
        rate: question.rate,
        created: question.created
    };
    let createdDate = new Date(adapter.created);
    return (
        <div className="question-item card">
            <div className="card-body">
                <h5 className="header card-title"> {adapter.header} </h5>
                <p className="add-info card-text"> {adapter.author} спросил {createdDate.toDateString()} </p>
            </div>
        </div>
    );
};

export default QuestionItem;
