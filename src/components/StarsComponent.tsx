export const StarsReview = ({ rating, setRating }: any) => {
    const starsRate = [1, 2, 3, 4, 5]
    return (
        <div>
            {starsRate.map((star) => {
                return (
                    <span onClick={() => setRating(star)} className="cursor-pointer text-7xl">
                        {rating >= star ? "🌕" : "🌑"}
                    </span>
                )
            })}
        </div>
    )
}
