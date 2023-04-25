// import './profilecard.css'


export function ProfileCard(props) {
    const { name, designation, jobDiscription, image, } = props

    function Buttonclick() {
        alert('Babubhaiya')
    }

    return (
        <div className='div'>
            <div className='txt' >
                <img src={image} />
                <h3 className='head1'>{designation}</h3>
                <h1 className='head2'>{name}</h1>
                <p className='pg'>{jobDiscription}</p>
                <button className={props.externalClassName || 'btn'}
                    onClick={props.onClickFunction || Buttonclick}
                    style={props.buttonStyle}>SeeMore</button>
            </div>
        </div>
    )

}