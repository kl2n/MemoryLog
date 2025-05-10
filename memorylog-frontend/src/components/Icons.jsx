
const Icons = ({iconData}) => {
    return (
        <section className="icons position-relative col-lg-6 mx-auto">
            { iconData.map(item => (
                <div key={item.id} className={`activity-icon ${item.image.alt} position-absolute`}>
                    <img
                        className="opacity-75"
                        src={item.image.src}
                        alt={item.image.alt}    />
                </div>
            )) }
        </section>
    )
}
export default Icons;