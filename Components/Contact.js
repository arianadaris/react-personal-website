import React from 'react';
import Footer from './Footer';
import Background from './Background';
import styled from 'styled-components';

function Contact()
{
    return (

        <Container>
            <Background />
            <Section>
                <Wrap>
                    <TextH1>CONTACT ME</TextH1>
                    <TextH3>Let's Create Something Together!</TextH3>
                </Wrap>
            </Section>
            <Form>
                <FormItem>
                    <Label>Name</Label>
                    <Input />
                </FormItem>
                <FormItem>
                    <Label>Email</Label>
                    <Input />
                </FormItem>
                <FormItem>
                    <Label>Subject</Label>
                    <Input />
                </FormItem>
                <FormItem>
                    <Label>Message</Label>
                    <TextArea></TextArea>
                </FormItem>
            </Form>
            <Footer />
        </Container>
    );
}

export default Contact;

const Container = styled.div`
    width: 100%;
    height: auto;
    margin-top: 15vh;
    position: absolute;
    overflow: hidden;
`

const Section = styled.div`
    height: auto;
`

const Wrap = styled.div`
    z-index: 100;
    padding: 10px 0 0 165px;
`

const TextH1 = styled.h1`
    font-size: 32px;
    font-style: italic;
    color: #61B29C;
`

const TextH3 = styled.h3`
    font-size: 52px;
    font-weight: bold;
    line-height: 80px;
`

const FormItem = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`

const Form = styled.form`
    padding: 20px;
`

const Label = styled.label`
    font-size: 20px;
    margin-right: 20px;
`

const Input = styled.input`
    border: none;
    padding: 10px;
    background-color: rgba(0,0,0,0.1);
    box-shadow: 1px 3px 6px rgba(0,0,0,0.3);
    border-radius: 20px;

`

const TextArea = styled.textarea`
    border: none;
    padding: 10px;
    background-color: rgba(0,0,0,0.1);
    box-shadow: 1px 3px 6px rgba(0,0,0,0.3);
    border-radius: 20px;
`

const SubmitBtn = styled.input`

`