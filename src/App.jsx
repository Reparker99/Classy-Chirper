import React from "react";
import { GiAbstract116 } from "react-icons/gi";
import { GiAllSeeingEye } from "react-icons/gi";
import { v4 as uuidv4 } from 'uuid';
import Moment from "react-moment";
import "moment-timezone";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            message: '',
            chirps: []
        };
       
    }

    handleSubmit(e) {
        e.preventDefault();
        let time = new Date();
        console.log(this.state.username);
        this.setState({
            username: '',
            message: '',
            chirps: [...this.state.chirps, {id: uuidv4(), username: this.state.username, message: this.state.message, timeStamp: time}]
        });
    }

    render() {
        return (
        <div className="container m-3 px-3">
        <div className="row justify-content-between">
          <form className="border col-4 h-25 shadow rounded bg-white">
            <div className="input-group my-4">
              <span className="input-group-text">
                <GiAbstract116 />
              </span>
              <input
                id="inputUsername"
                value={this.state.username}
                onChange={e => this.setState({username: e.target.value})}
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="input-group my-3">
              <span className="input-group-text">
                <GiAllSeeingEye />
              </span>
              <textarea
                value={this.state.message}
                onChange={e => this.setState({message: e.target.value})}
                className="form-control"
                placeholder="Your thoughts..."
              />
            </div>
            <button onClick={e => this.handleSubmit(e)} className="mb-3 btn btn-primary">
              Chirp It
            </button>
          </form>
          <div className="col-7">
                  <div key={`chirp-${uuidv4()}`}>
                  <div className="card shadow">
                          <div className="card-body">
                            <h5 className="card-title">@FloralRogue</h5>
                            <p className="card-text p-3">Chirp 1</p>
                            <Moment format="YYYY/MM/DD hh:mm" fromNow className="card-text text-muted">2021-08-10 01:23</Moment>
                          </div>
                        </div>
                        </div>
                  <div key={`chirp-${uuidv4()}`}>
                  <div className="card shadow">
                          <div className="card-body">
                            <h5 className="card-title">@HellfireMafia</h5>
                            <p className="card-text p-3">Chirp 2</p>
                            <Moment format="YYYY/MM/DD hh:mm" fromNow className="card-text text-muted">2021-08-11 04:49</Moment>
                          </div>
                        </div>
                        </div>
                  <div key={`chirp-${uuidv4()}`}>
                  <div className="card shadow">
                          <div className="card-body">
                            <h5 className="card-title">@AvengingAngel</h5>
                            <p className="card-text p-3">Chirp 3</p>
                            <Moment format="YYYY/MM/DD hh:mm" fromNow className="card-text text-muted">2021-08-11 10:30</Moment>
                          </div>
                        </div>
                        </div>
              {this.state.chirps.map(chirp => (
                  <div key={`chirp-${chirp.id}`}>
                  <div className="card shadow">
                          <div className="card-body">
                            <h5 className="card-title">@{chirp.username}</h5>
                            <p className="card-text p-3">{chirp.message}</p>
                            <Moment format="YYYY/MM/DD hh:mm" fromNow className="card-text text-muted">{chirp.timeStamp}</Moment>
                          </div>
                        </div>
                        </div>
              ))}
          </div>
        </div>
      </div>
        )
    };
}

export default App;