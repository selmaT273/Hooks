import { useState } from 'react';

export default function useForm(saveTodo){
    const [values, setValues] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        saveTodo(values);

    }

    const handleChange = e => {
        const { title, value } = e.target;
        setValues(values => ({
            ...values,
            [title]: value,

        }));
    }
    return [
        handleSubmit,
        handleChange,
    ];
}