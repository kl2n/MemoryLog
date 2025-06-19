
const Icons = ({iconData}) => {
    return (
        <div className="position-relative mx-auto">
            { iconData.map(item => (
                <div key={item.id} className={`activity-icon ${item.image.alt} position-absolute`}>
                    <img
                        className="opacity-75"
                        src={item.image.src}
                        alt={item.image.alt}    />
                </div>
            )) }
        </div>
    )
}
export default Icons;