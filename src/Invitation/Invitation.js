import { Fragment } from "react"

export function Invitation(props) {
    const { subject, email, name, party, names, add } = props
    return (
        <Fragment>
            <p>Subject :{subject}</p>
            <p id="red">To :{email}</p>
            <p>Hi , {name}</p>
            <p>I am having a {party} next Friday at my Home.Would you liketo come?
                It will be fun. Look of people from my school are coming . you know some of them -{names}.</p>
            <p>My house is behind our school , near {add}.</p>
            <p>I hope you will come and see you soon .</p>
            <p>from ,</p>
            <p>{name}</p>
        </Fragment>
    )
}  