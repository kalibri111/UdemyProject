import React from 'react';
import ReactDOM from 'react-dom';
import QuestionItem from "../question-item";
import AskService from "../../services/ask-service";


class QuestionList extends React.Component{
    state = {
        questions: null
    };
    askService = new AskService();

    constructor() {
        super();
        this.update();
    };
    update() {
        this.askService.getAllQuestions().then(
            (questionsList) => {
                this.setState({
                    questions: questionsList
                });
            });
    }
    render() {
        let elements = (
            <div className='card card-body'>
                <p>loading...</p>
            </div>
        )
        if (this.state.questions) {
            console.log(this.state);
            elements = this.state.questions.map(
                (item) => {
                    return <QuestionItem question={item}/>;
                }
            );
            console.log(elements)
        }

        return (
            <div className="container">
                { elements }
            </div>
        );
    }
}

//
// const QuestionList = () => {
//     let askService = new AskService();
//     return askService.getAllQuestions().then(
//         (questions) => {
//             const elements = questions.map(
//                 (item) => {
//                     return <QuestionItem props={item}/>;
//                 }
//             );
//             return (
//                 <div className="container">
//                     { elements }
//                 </div>
//             );
//         }
//     );
//
// };


export default QuestionList;
