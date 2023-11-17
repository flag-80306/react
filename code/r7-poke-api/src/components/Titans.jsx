function Titans() {
    function removeShittyExtra(imageURL) {
        const newImage = imageURL.split(".png")[0] + ".png";
        return newImage
    }

    return (
        <>
            <h1>Titans</h1>
            <img src={removeShittyExtra("https://static.wikia.nocookie.net/shingekinokyojin/images/9/93/Armin_Arlelt_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350")} alt="" />
        </>
    )
}

export default Titans