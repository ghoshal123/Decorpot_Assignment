import React from 'react'

const Table= ({ data }) => {

    return (
        <div>

            <table style={{ margin: "auto", border: "2px solid", borderCollapse: "collapse" }}>
                <thead style={{ backgroundColor: "grey" }}>
                    <tr>
                        <th style={{ borderCollapse: "collapse", border: "2px solid", padding: "10px" }}>S.No</th>
                        <th style={{ borderCollapse: "collapse", border: "2px solid", padding: "10px" }}>Name</th>
                        <th style={{ borderCollapse: "collapse", border: "2px solid", padding: "10px" }} >Phone</th>
                        <th style={{ borderCollapse: "collapse", border: "2px solid", padding: "10px" }}>Password</th>

                    </tr>

                </thead>
                <tbody style={{ backgroundColor: "whitesmoke" }}>
                    {
                        data.map((elem, index) => {
                            return (
                                <tr key={elem.id}>
                                    <td style={{ borderCollapse: "collapse", border: "2px solid", padding: "10px" }}>{index + 1}.</td>
                                    <td style={{ borderCollapse: "collapse", border: "2px solid", padding: "10px" }}>{elem.fname}</td>
                                    <td style={{ borderCollapse: "collapse", border: "2px solid", padding: "10px" }}>{elem.phone}</td>
                                    <td style={{ borderCollapse: "collapse", border: "2px solid", padding: "10px" }}>{elem.password}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table