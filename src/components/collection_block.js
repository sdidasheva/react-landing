function Block(props) {
    return(
        <div className="collection_block">
            <h3 className="block_title">{props.title}</h3>
            <p className="block_text">{props.text}</p>
            <hr/>
        </div>
    )
}

export default Block;