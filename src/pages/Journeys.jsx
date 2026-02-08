import './Journeys.css';

const Journeys = () => {
    return (
        <div className="journeys-page">
            {/* Hero */}
            <section className="journeys-hero section">
                <div className="container">
                    <h1>Sample Journeys</h1>
                    <p className="journeys-subtitle">Editorial inspiration only</p>
                    <p>These journeys are not templates. They are examples of what becomes possible when access, imagination, and judgement align.</p>
                </div>
            </section>

            {/* Jaisalmer */}
            <section className="section journey-section">
                <div className="journey-image-wrapper">
                    <div
                        className="journey-image"
                        style={{ backgroundImage: 'url(/jaisalmer.jpg)' }}
                    />
                </div>
                <div className="container">
                    <div className="journey-content">
                        <h2>Jaisalmer - The Desert, Reimagined</h2>
                        <p>
                            The journey begins where the land turns golden and silence stretches endlessly.
                        </p>
                        <p>
                            Arrive privately into Jaisalmer and retreat into a grand desert fortress, where time slows beneath
                            sandstone walls warmed by centuries of sun. As evening falls, the desert becomes a stage — a
                            soulful sundowner accompanied by live folk musicians, followed by an intimate Rajasthani
                            dinner beneath a sky dense with stars.
                        </p>
                        <p>
                            The following day unfolds through layers of living history. Wander the narrow lanes of Jaisalmer
                            Fort before a serene lunch by Gadisar Lake, where still waters reflect temples and time itself. In
                            the afternoon, explore Kuldhara - the abandoned village steeped in legend - and Khaba Fort,
                            before drifting deep into the Thar.
                        </p>
                        <p>
                            As dusk arrives, the dunes glow amber. A private desert sundowner gives way to curated folk
                            performances, candlelit dining, and stargazing far from any city's reach.
                        </p>
                        <p>
                            The journey concludes at a secluded desert retreat where tented luxury meets absolute quiet.
                            Days are left deliberately unstructured - spa rituals, local encounters, and moments designed
                            simply to be present. On the final morning, a farm-to-table breakfast is prepared in a secluded
                            clearing, before a quiet departure.
                        </p>
                        <p className="journey-closing">
                            This is the desert, not observed - but experienced.
                        </p>
                    </div>
                </div>
            </section>

            {/* Italy */}
            <section className="section journey-section alternate">
                <div className="journey-image-wrapper">
                    <div
                        className="journey-image"
                        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2883&auto=format&fit=crop)' }}
                    />
                </div>
                <div className="container">
                    <div className="journey-content">
                        <h2>Italy - Heritage, Art & La Dolce Vita</h2>
                        <p>
                            Italy reveals itself slowly - when approached with intimacy.
                        </p>
                        <p>
                            Begin in Northern Italy at a private estate nestled among vineyards. Days
                            unfold through intimate wine tastings hosted by families whose histories are
                            written into the land itself. Evenings are spent beneath stone arches,
                            sharing regional cuisine prepared quietly in private kitchens.
                        </p>
                        <p>
                            In Florence or Rome, familiarity dissolves into access. Enter museums
                            before doors open. Walk galleries guided by private art historians. Dine
                            within palazzi rarely opened beyond family circles.
                        </p>
                        <p>
                            The journey flows south or along the coast - perhaps aboard a private
                            yacht tracing the Amalfi shoreline, or within the countryside where Italy
                            returns to its most elegant rhythm.
                        </p>
                        <p>
                            Every moment balances indulgence with restraint.
                        </p>
                        <p className="journey-closing">
                            Nothing rushed.<br />
                            Nothing overstated.<br />
                            Italy, not as a destination - but as a way of life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bhutan */}
            <section className="section journey-section">
                <div className="journey-image-wrapper">
                    <div
                        className="journey-image"
                        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940&auto=format&fit=crop)' }}
                    />
                </div>
                <div className="container">
                    <div className="journey-content">
                        <h2>Bhutan - A Journey Inward</h2>
                        <p>
                            Bhutan is not experienced through sights alone. It is felt.
                        </p>
                        <p>
                            Enter the kingdom gently - valleys wrapped in mist, prayer flags moving softly against
                            mountain winds. Days unfold at an unhurried pace: guided walks through untouched
                            landscapes, private moments within monasteries, and rituals that invite reflection rather than
                            spectacle.
                        </p>
                        <p>
                            A dawn ascent to Tiger's Nest becomes a quiet meditation rather than a conquest. Time is left
                            deliberately open - to sit, to observe, to listen.
                        </p>
                        <p>
                            Evenings are spent in intimate lodges where conversation softens and the world feels distant.
                        </p>
                        <p className="journey-closing">
                            BelVoyage designs Bhutan not as a destination to see - but as a state of being to experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tanzania */}
            <section className="section journey-section alternate">
                <div className="journey-image-wrapper">
                    <div
                        className="journey-image"
                        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2946&auto=format&fit=crop)' }}
                    />
                </div>
                <div className="container">
                    <div className="journey-content">
                        <h2>Tanzania - Where Wilderness Becomes Personal</h2>
                        <p>
                            In Tanzania, nature is vast - but the experience is deeply intimate.
                        </p>
                        <p>
                            Arrive into a private conservation area where refined wilderness lodges offer uninterrupted
                            immersion. Days follow the rhythm of the land: private game drives led by expert guides, close
                            encounters shaped by conservation rather than spectacle, and moments when silence speaks
                            louder than movement.
                        </p>
                        <p>
                            Witness the great migrations from secluded vantage points. Share sundowners where the
                            horizon seems endless. Return to camp where evenings unfold beneath lantern light, fireside
                            dining, and stories carried by the wind.
                        </p>
                        <p>
                            Between drives, time is left intentionally unfilled - to watch, to reflect, to absorb the scale of the
                            natural world.
                        </p>
                        <p className="journey-closing">
                            This is safari beyond observation - it is presence.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Journeys;
