import React from 'react'

// import components
// import Header from './component/header'
// import Footer from './component/footer'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nama: {
                depan: 'Muhammad',
                tengah: 'Risky',
                belakang: 'Nugraha'
            },
            usia: 21,
            count: 0,
            masakan: ['rendang', 'nasi goreng']
        }
    }
    klik = () => {
        this.setState({ nama: 'Ezra' })
    }

    minus = () => {
        this.setState({ count: this.state.count - 1 })
    }
    plus = () => {
        this.setState({ count: this.state.count + 1 })
    }
    tampilkan = () => {
    const result = this.state.masakan.map((item, index) => <li key={index} >{item}</li>)
        return result
    }
    tambah = () => {
        let input = this.refs.masakan.value
        let tempMasakan = [...this.state.masakan]
        tempMasakan.push(input)
        this.setState({ masakan: tempMasakan})
    }
    // conditional rendering
    // login = (x) => {
    //     if (x) return 'Anda Sudah Login'
    //     return 'Anda Belum Login'
    // }
    render() {
        // rendering multiple components
        // const siswa = ['Cus Un', 'Dian', 'Jordan']
        // const listSiswa = siswa.map((value, idx) => <li key={idx}>{idx}: {value}</li>)
        return (
            <div style={{ marginLeft: '600px' }}>
                {/* conditional rendering
                <h1>Hello Customers!</h1>
                <h1>{this.login(false)}</h1> */}
                {/* rendering multiple components
                <h1>Daftar Siswa</h1>
                <ul><h1>{listSiswa}</h1></ul> */}
                {/* latihan components
                <Header/>
                <h4>Ini contoh import components</h4>
                <Footer/> */}
                {/* latihan state dan props
                <h1>Hello {this.state.nama}</h1>
                <h2>Your age is {this.state.usia}</h2>
                <Footer main={this.state.nama} usia={this.state.usia} /> */}
                {/* <Footer/> */}
                {/* <h1>Selamat Datang {this.state.nama.tengah}!</h1>
                <button onClick={this.klik} >Coba klik</button> */}
                {/* latihan count
                <h1 style={{ fontSize: '100px' }}>{this.state.count}</h1>
                <button onClick={this.minus}>Minus</button>
                <button onClick={this.plus}>Tambah</button> */}
                <h1>Daftar Masakan</h1>
                <input ref='masakan' placeholder='Input masakan' type='text' />
                <h1>
                    <ul>{this.tampilkan()}</ul>
                </h1>
                <button onClick={this.tambah}>Tambah</button>
            </div>
        )
    }
}

export default App