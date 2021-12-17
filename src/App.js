import React from 'react'
import './App.css';
import { useState } from 'react'

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>

      <div className="first">
        <div className="subHeading">
          <br />
          <h2>Active </h2>
        </div>
        <div className="input">
          <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
          <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
        </div>
        <div className="todos">
          {toDos.map((obj) => {
            return (
              <div className="todo">
                <div className="left">
                  <input onChange={(e) => {
                    //console.log(e.target.checked);
                    //console.log(obj);
                    setToDos(toDos.filter(obj2 => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked
                      }
                      return obj2
                    }))
                  }} value={obj.status} type="checkbox" name="" id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times"></i>
                </div>
              </div>
            )
          })

          }

        </div>
      </div>

      <div className="second">
        <div className="subHeading">
          <br />
          <h2>Completed </h2>
        </div>
        <div className="todos">
          {toDos.map((obj) => {
            if (obj.status) {
              return (
                <div className="todo">
                  <div className="left">
                    <input  type="checkbox" name="" id="" checked/>
                    <p>
                      {obj.text}
                    </p>
                  </div>
                  <div className="right">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
              )

            }
          })

          }

        </div>




      </div>
      
      <div className="third">
        <div className="subHeading">
          <br />
          <h2>Deleted </h2>         

        </div>
        <div className="todos">
          {toDos.map((obj) => {
            if (obj.status) {
              return (
                <div className="todo">
                  <div className="left">
                    <input value={obj.status} type="checkbox" name="" id="" />
                    <p>
                      {obj.text}
                    </p>
                  </div>
                  <div className="right">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
              )

            }
          })

          }

        </div>

      </div>

    </div>
  );
}

export default App;
