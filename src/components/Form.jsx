import React from 'react'

const Form = ({ fname, password, phone, handleInput, handleSubmit }) => {
    return (
        <div>
            <div style={{width:"250px",border:"2px solid",margin:"auto",padding:15}}>
                <form>
                    <label style={{ marginLeft: "10px" }}>FullName:</label><input style={{ marginLeft: "10px" }} type='text' name='fname' value={fname} onChange={handleInput} /><br /><br />
                    <label style={{ marginLeft: "10px" }}>Phone:</label><input style={{ marginLeft: "15px" }} type='Phone' name='phone' value={phone} onChange={handleInput} /><br /><br />
                    <label style={{ marginLeft: "10px" }}>Password:</label><input style={{ marginLeft: "10px" }} type='password' name='password' value={password} onChange={handleInput} /><br /><br />
                <button style={{magin:"auto",backgroundColor: "green",color:"white", padding: "10px", borderRadius: "5px"}} onClick={handleSubmit}>Submit</button>:
                </form>
                
               
            </div>
        </div>
    )
}

export default Form