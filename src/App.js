import React, {useState} from 'react';


function Form(){
const [formInfo, setFormInfo] = useState({
    name: "",
});

const [list, setList] = useState([]);

const handleChange = (e) => {
    setFormInfo({...formInfo, [e.target.name]: e.target.value})
};

const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, formInfo])
    setFormInfo({name:''})
};

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                type="text"
                onChange={handleChange}
                name = "name" 
                value={formInfo.name}
                />
                <button type="submit">Submit</button>  
            </form>

            <ul>
                {list.map((item) => {
                    return(
                    <li>
                        <h2>{item.name}</h2>
                    </li>)
                })}     
            </ul>

        </div>

    )
};

export default Form