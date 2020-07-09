import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import $ from 'jquery';
import 'jquery-datetimepicker';
import 'jquery-datetimepicker/jquery.datetimepicker.css'
import 'jquery-modal';
import 'jquery-modal/jquery.modal.css';
import 'jquery-ui/themes/base/selectmenu.css';
import 'jquery-ui/ui/widgets/selectmenu';

import CreateEmployeeStore from '../stores/CreateEmployeeStore';
import US_STATES from './constants/us-states';

class CreateEmployeePage extends Component {
    constructor(props) {
        super(props);
        this.store = CreateEmployeeStore;
    }

    componentDidMount() {
        $('#birth-date').datetimepicker({
            timepicker: false,
            format: 'm/d/Y',
        });

        $("#state").selectmenu();

        $('#confirm').modal();
    }

    render() {
        const {
            firstName,
            lastName,
            street,
            city,
            state,
            zip,
            email,
            phone,
            dateOfBirth,
            setFirstName,
            setLastName,
            setStreet,
            setCity,
            setState,
            setZipCode,
            setEmail,
            setPhoneNumber,
            saveEmployee,
            setBirthDate,
        } = this.store;

        return (
            <Container>
                <h1>HRnet</h1>
                <Form onSubmit={saveEmployee}>
                    <FormGroup>
                        <Label for="first-name">First Name</Label>
                        <Input type="text" name="first-name" id="first-name" placeholder="First Name" value={firstName}
                               onChange={(evt) => setFirstName(evt.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="last-name">Last Name</Label>
                        <Input type="text" name="last-name" id="last-name" placeholder="Last Name" value={lastName}
                               onChange={(evt) => setLastName(evt.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="birth-date">Date of Birth</Label>
                        <Input type="text" name="birth-date" id="birth-date" value={dateOfBirth} onChange={(evt) => setBirthDate(evt.target.value)} />
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        <legend>Address</legend>
                        <Label for="street">Street</Label>
                        <Input type="text" name="street" id="street" placeholder="Street" value={street}
                               onChange={(evt) => setStreet(evt.target.value)}/>
                        <Label for="city">City</Label>
                        <Input type="text" name="city" id="city" placeholder="City" value={city} onChange={(evt) => setCity(evt.target.value)}/>
                        <Label for="state">State</Label>
                        <select id="#state">
                            {US_STATES.map((state) => (<option>{state.name}</option>))}
                        </select>
                        {/* <Input type="text" name="state" id="state" placeholder="State" value={state}
                               onChange={(evt) => setState(evt.target.value)}/> */ }
                        <Label for="zip-code">Zip Code</Label>
                        <Input type="text" name="zip-code" id="zip-code" placeholder="Zip Code" value={zip}
                               onChange={(evt) => setZipCode(evt.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email" value={email}
                               onChange={(evt) => setEmail(evt.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input type="text" name="phone" id="phone" placeholder="Phone Number" value={phone}
                               onChange={(evt) => setPhoneNumber(evt.target.value)}/>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
                <div id="confirm" className="modal">Employee Added!</div>
                <h2>Employees</h2>

            </Container>
        );
    }
}

export default observer(CreateEmployeePage);
