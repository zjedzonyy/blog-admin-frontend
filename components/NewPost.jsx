import  { useState } from 'react';



export default function NewPost() {
    const [formData, setFormData] = useState({ title: '', body: ''});
    const token = localStorage.getItem('token');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            window.location.reload();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }


    return(
        <>
        {localStorage.token ? ( <form onSubmit={handleSubmit}>
        <input 
        type="title" 
        id='title'
        name='title'
        value={formData.title}
        onChange={e => setFormData({...formData, title: e.target.value})}
        placeholder='title'
        />
        <input 
        type="body" 
        id='body'
        name='body'
        value={formData.body}
        onChange={e => setFormData({...formData, body: e.target.value})}
        placeholder='body'
        />
        <button type='submit'>Create Post</button>
        </form> ) : (        
            <p>Log In first!</p>
        )}
        </>
    )
}