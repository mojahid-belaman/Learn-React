import SocialsItems from "./SocialsItem";

function Social() {
    
    return (
        <form>
            <ul>
                <SocialsItems text="Facebook" id="facebook" img='https://picsum.photos/60' />
                <hr />
                <SocialsItems text="Youtube" id="youtube" img='https://picsum.photos/61' />
                <hr />
                <SocialsItems text="Twiiter" id="twitter" img='https://picsum.photos/62' />
            </ul>
        </form>
    );
}

export default Social;