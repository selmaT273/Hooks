import { useState } from 'react';

export default function useForm(onSubmit){
    const [values, setValues] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(values);

    }

    const handleChange = e => {
        const { name, value } = e.target;
        setValues(values => ({
            ...values,
            [name]: value,

        }));
    }
    return [
        handleSubmit,
        handleChange,
    ];
}