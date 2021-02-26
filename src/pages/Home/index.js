import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
        background-color: black;
        color: white;
        line-height: 30px;
        font-size: 16px;
        text-align: center;
        padding: 5px;
        margin: 10px;
    `    
const PrimaryButton = styled(Button)`
    background-color: yellow;
    color: black;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.col ? "column": "row"};
    margin: 50px
`

const ThirdButton = styled(Button)`
    background-color: green;
`;


const data = [
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 4},
    { id: 5}
]

export const Home = (props) => {
    console.log(props)
    return (
        <div>
            <h1>This is my Home Page</h1>
            <FlexContainer col>
                <button className="btn"> My New Button </button>
                {
                    data.map(datapoint => {
                        return(
                            <Link to={`/profile/${datapoint.id}`}>
                                <Button>Styled Button</Button>
                            </Link>
                        )
                })
                }
                
                <Button type1>Styled Button</Button>
                <PrimaryButton > primary </PrimaryButton>
                <ThirdButton>Third</ThirdButton>
            </FlexContainer>
        </div>)
}