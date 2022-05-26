function ContentCard(card) {
    return(
        <div className="content_card">
            <div className="card_info">
                <h3 className="card_title">{card.title}</h3>
                <div className="card_tier">
                    <p className="tier_title">{card.tier}</p>
                    <img src={card.tierImg} alt='tier'/>
                </div>
                <p className="card_text">{card.text}</p>
            </div>
            <img className="content_img" src={card.personImg} alt='person'/>
        </div>
    )
}

export default ContentCard;