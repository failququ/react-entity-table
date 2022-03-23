
import styled from 'styled-components';


export const SubmitButton = styled.button`
transition: 0.4s all;
width: 210px;
height: 42px;
margin-top: 15px;
font-size: 20px;
border: none;
box-shadow: 5px 5px 5px gray;
border-radius: 2%;
background-color: darkcyan;
color: white;
cursor: pointer;
:hover{
    transform: scale(1.03)
}

`

export const FormBlock = styled.div`
padding: 18px;
width: 500px;
height: 250px;
margin: 0 auto;
display: flex;
justify-content: center;
`

export const Tr = styled.tr`
text-align: center;
`;

export const Td = styled.td`
    border: 1px solid black;
    width: 120px;
    background-color: gainsboro;
    `


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    gap: 15px;
`

export const AuthInput = styled.input`
    width: 300px;
    height: 25px;
    font-size: 16px;
    padding: 5px;
    border: 1px solid darkcyan;
    margin-top: 5px;
`

export const TableBlock = styled.div`
    width: 42%;
    margin: 50px  auto;
`

export const ChangeDataButton = styled.div`
    cursor: pointer;
`
export const DeleteDataButton = styled.div`
    cursor: pointer;
`

export const ManagingFormBlock = styled.div`
    width: 500px;
    margin: 0 auto;
`

export const ManagingForm = styled.form`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13px;
`

export const ManagingFormInput = styled.input`
    width: 360px;
    height: 23px;
    padding: 3px;
    font-size: 15px;
    border: 1px solid darkcyan;
`

export const ManagingFormSelect = styled.select`
    width: 368px;
    height: 33px;
    border: 1px solid darkcyan;
    font-size: 16px;
`

export const ManagingFormFileInput = styled.input`
`

export const ManagingFormButtonsBlock = styled.div`
    display: flex;
    gap: 15px;
`

export const ManagingFormButton = styled.button`
    transition: 0.4s all;
    background-color: darkcyan;
    color: white;
    border:none;
    height: 30px;
    font-size: 16px;
    box-shadow: 2px 2px 2px gray;
    cursor: pointer;
    :hover {
        transform: scale(1.03)
    }
`

export const EntityImage = styled.img`
    width: 170px;
    height: 120px;
    object-fit: contain;
`