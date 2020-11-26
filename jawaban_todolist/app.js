import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: ["Ibadah", "Belanja ke warung", "Masak"],
    };
  }

  renderList = () => {
    return this.state.activity.map((item) => {
      return (
        <div>
          <p>{item}</p>
        </div>
      );
    });
  };

  addHandle = () => {
    let add = this.refs.act.value;
    let newArr = [...this.state.activity];
    newArr.push(add);
    this.setState({ activity: newArr });
    this.refs.act.value = "";
  };

  delHandle = (index) => {
    let newArr = [...this.state.activity];
    newArr.splice(index, 1);
    this.setState({ activity: newArr });
  };

  renderTHead = () => {
    return (
      <thead style={{ textAlign: "center" }}>
        <tr>
          <th>Activity</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  };

  renderTBody = () => {
    return (
      <tbody>
        {
          this.state.activity.map((item, index) => {
            return (
              <tr>
                <td>{item}</td>
                <td style={{ textAlign: "center" }}>
                  <button onClick={() => this.delHandle(index)}>❌</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    );
  };

  render() {
    return (
      <div>
        <div style={styles.container}>
          <h1>To Do List Exercise</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="text"
              ref="act"
              placeholder="Input your schedule"
              style={{ height: '30px', width: '250px' }}
            />
            <button onClick={this.addHandle}>Add</button>
          </div>
          <table style={{ marginTop: "5%" }}>
            {this.renderTHead()}
            {this.renderTBody()}
          </table>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    margin: " 80px auto",
    backgroundColor: "#B1DDF7",
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1%",
    borderRadius: "20px",
  },
};

export default App;
