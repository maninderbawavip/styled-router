import Button from '../Button/Button';
import './personCard.css'

const PersonCard = (props) => {
    return(
        <div className="card">
            <p>Name: {props.name}</p>
            <p>{props.position ? props.position : "React Dev"}</p>
            <p>Gurgaon</p>
            <Button />
        </div>
    )
}

export default PersonCard;