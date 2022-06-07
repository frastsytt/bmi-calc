import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CalculateBmi = props => {
    const [height, inputHeight] = useState();
    const [weight, inputWeight] = useState();

    const formSubmitHandler = event => {
        event.preventDefault();
        props.onCalcBmi(height, weight);
    }

    return (
        <Form className='mx-0 bg-warning bg-opacity-10 text-dark' onSubmit={formSubmitHandler}>

            <Form.Group className="m-2" controlId="formWeight">
                <Form.Label className='h5'>Your weight in kilograms</Form.Label>
                <Form.Control className='w-25' type="number" min={20} max={350} step={0.1} value={weight} onChange={(weight) => inputWeight(weight.target.value)} />
                <Form.Range min={20} max={350} step={0.1} value={weight} onChange={(weight) => inputWeight(weight.target.value)} />
            </Form.Group>

            <Form.Group className="m-2" controlId="inputHeight">
                <Form.Label className='h5'>Your height in centimeters</Form.Label>
                <Form.Control className='w-25' type="number" min={50} max={250} step={1} value={height} onChange={(height) => inputHeight(height.target.value)} />
                <Form.Range min={50} max={250} step={1} value={height} onChange={(height) => inputHeight(height.target.value)} />
            </Form.Group>

            <Button className='m-3 rounded-start' variant="primary" type="submit">Submit</Button>

        </Form>
    );
};

export default CalculateBmi;