import React, { useState } from 'react';
import './App.css';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalculateBmi from './components/Calc';

function App() {
    const [resultBmi, setBmi] = useState();

    const bmiCalc = (enteredHeight, enteredWeight) => {
        let curBmi = (Math.round(((enteredWeight/(enteredHeight/100) ** 2) * 10))/10);
        setBmi('Body mass index: ' + curBmi);

    };

    return (
        <div className='App-header'>
            <Container className='col-4 p-5' fluid="md">
                <Card className="bg-white text-dark">
                    <Card.Img src="14physed-running-photo-superJumbo.jpg" alt="Card image"/>
                </Card>
                <Card className='bg-warning text-dark p-5 h3'>
                    <Card.Body>
                        <Card.Title className='text-left'><h3>Select your <b>weight</b> and <b>height</b></h3></Card.Title>
                        <Card.Text className='h5 align-items-center'>
                            <CalculateBmi onCalcBmi={bmiCalc} />
                            {resultBmi}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default App;