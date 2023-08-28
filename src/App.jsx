import { useState } from "react";
import Student from "./Student";
import './app.css'
const App = () => {
    const [records, setRecords] = useState([]);
    const [newRecord, setNewRecord] = useState({ name: '', roll: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewRecord((prevRecord) => ({ ...prevRecord, [name]: value }));
    }

    const addNewRecord = () => {
        setRecords((prevRecord) => [...prevRecord, newRecord]);
        setNewRecord({ name: '', roll: '' });
    }

    const handleDelete = (index) => {
        setRecords((prevRecord) => {
            const renewRecord = [...prevRecord]
            renewRecord.splice(index, 1)
            return renewRecord
        })
    }
    return (
        <section className="entry">
            <h1>Detail Entry</h1>
            <p>Enter Name:</p>
            <input
                type="text"
                name="name"
                value={newRecord.name}
                onChange={handleInputChange}
                placeholder="Name"
            />
            <p>Enter Roll number:</p>
            <input
                type="number"
                name="roll"
                value={newRecord.roll}
                onChange={handleInputChange}
                placeholder="Roll Number"
            />
            <button className="submit-record" onClick={addNewRecord}>Submit</button>
            <div className="entry-record">
                {
                    records.map((row, index) => {
                        return (
                            <Student key={index} roll={row.roll} name={row.name} del={() => handleDelete(index)} />
                        )
                    })
                }
            </div>

        </section>
    );
}
export default App;