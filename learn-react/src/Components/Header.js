
function Header() {
    
    let client = "Programmer";
    const title = {
        design: "Designer",
        prog: "Programmer"
    }

    client = client === "Programmer" ? title.prog : title.design;
    return (
        <h1>Hello {client}</h1>
    );
}

export default Header