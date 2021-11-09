import React from "react";

const Form = (props) => {

    const handleChange = event => {
        const { name, value } = event.target;
        props.change(name, value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name
                <input
                    placeholder="Enter Name Here"
                    value={props.values.name}
                    name="name"
                    onChange={handleChange}
                    />
            </label>
            <label>Email
                <input
                    placeholder="Enter Email Here"
                    value={props.values.email}
                    name="email"
                    onChange={handleChange}
                    />
            </label>
            <label>Role
            <select value={props.values.role} name="role" onChange={handleChange}>
            <option value="">-- Select a Role --</option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="Designer">Designer</option>
          </select>       
            </label>
            <input type="submit" value="Create Your Team" />
        </form>
    )
}
export default Form;