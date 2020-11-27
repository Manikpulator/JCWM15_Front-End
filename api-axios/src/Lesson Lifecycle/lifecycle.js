import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: 'Orang Asing'
        }
    }

    // will update akan terus menerus tereksekusi sesaat sebelum ada perubahan(update) pada state
    // componentWillUpdate(){
    //     console.log('Ini will update ')
    // }

    // did update akan terus menerus tereksekusi sesudah ada perubahan(update) pada state
    // componentDidUpdate(){
    //     console.log('Ini Did update')
    // }

    // arrow function dalam case ini digunakan agar kita tidak perlu mem-bind function yang ada di dalam class
    // klik = () => {
    //     this.setState({ user: this.refs.nama.value })
    // }

    // will mount akan terpanggil sebelum render pertama kali dijalankan
    // componentWillMount() {
    //     this.setState({ user: 'Yayan' })
    //     console.log('Ini Will Mount ' + this.state.user)
    // }

    // did mount akan terpanggil sekali setelah render dijalankan
    // componentDidMount() {
    //     this.setState({ user: 'Cu Sun' })
    //     console.log('Ini Did Mount ' + this.state.user)
    // }

    // render akan terpanggil ulang kalau ada perubahan state atau props
    render() {
        console.log(this.state.user)
        return (
            <div>
                <h1>Hello {this.state.user}</h1>
                <input ref="nama" type="text" onChange={() => {this.klik()}} />
            </div>
        )
    }
}

export default App