import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment"
import UserCard from "./UserCard"
import avatar1 from "./images/image-1.jpg"
import avatar2 from "./images/image-2.jpg"
import avatar3 from "./images/image-3.jpg"

const App = () => {
    return (
        <div className="ui comments">
            <UserCard>
                <SingleComment
                    author="John"
                    date="Today at 5:00 PM"
                    text="Great Job"
                    avatar={avatar1}
                />
            </UserCard>
            <UserCard>
                <SingleComment
                    author="Doe"
                    date="Today at 6:00 PM"
                    text="Thanks"
                    avatar={avatar2}
                />
            </UserCard>
            <UserCard>
                <SingleComment
                    author="Cena"
                    date="Today at 7:00 PM"
                    text="This is amazing!"
                    avatar={avatar3}
                />
            </UserCard>

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
