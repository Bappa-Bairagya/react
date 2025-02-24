import logo from "./assets/logo.jpg"
function card() {
    return (
        <div className="card">
            <img src={logo} alt="logo" srcset="" className="logo" />
            <h2>Golpo Time</h2>
            <p>A horror podcast</p>
        </div>
    );
}
export default card