import React from 'react';
import useForm from '../hooks/form';
import useSettings from '../contexts/settings';

export default function EditSettings() {
    const [handleSubmit, handleChange] = useForm();
    const { twitter, title, setTitle, setTwitter } = useSettings();

    return (
        <>
        <p><label>
            <input onChange={e => setTitle(e.target.value)} value={title} />
            </label></p>
        </>
    )
}