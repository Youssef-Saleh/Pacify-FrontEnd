import React from "react"
import "./Sliders.css"
import 'bootstrap/dist/css/bootstrap.min.css'




const Sliders= () =>{

    
return(

    

    <div className="front-box front-video" name="videos" id="videos">

  
    <div className="container container-carousel">
            

        <div className="row">
            <div className="col-md-6 hidden-xs hidden-sm carousel-iphones">
                <div className="iphone-device">
<div className="iphone-screen">
                                <img src="https://support.scdn.co/static/img/videos/video-offline.jpg" className="slide active"/>
                                <img src="https://support.scdn.co/static/img/videos/video-connect.jpg" className="slide"/>
                                <img src="https://support.scdn.co/static/img/videos/video-chromecast.jpg" className="slide "/>
                                <img src="https://support.scdn.co/static/img/videos/video-playlist.jpg" className="slide"/>
                                <img src="https://support.scdn.co/static/img/videos/video-search.jpg" className="slide"/>
                                            </div>
                </div>
            </div>
            <div className="col-md-6 video-info-container" id="text">
                <div id="carousel-videos" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                                                    <div className="video-info item">
                                <h1 className='ml4 mb5 f-subheadline lh-title black'>Listen Offline</h1>
                                <div className="row">
                                    <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-12 col-md-offset-0">
                                        <p>How to take your music with you in the car, on the plane, or wherever you may not be able to access the internet</p>
                                        <a className="btn js-ga-event" href="https://player.vimeo.com/video/122512075" data-open="modal" data-vimeo-id="122512075" data-ga-event-category="homepage_video" data-ga-event-action="play_button" data-ga-event-label="Listen Offline">
                                            <svg width="15" height="15" viewBox="0 0 39 48" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.225V44.72c0 2.57 1.936 3.487 4.302 2.035L37.14 26.61c2.364-1.45 2.364-3.825 0-5.277L4.3 1.19C1.936-.263 0 .653 0 3.224z" fill="#000" fillRule="evenodd"></path></svg>
                                            Watch video
                                        </a>
                                    </div>
                                </div>
                            </div>
                                                    <div className="video-info item">
                                <h1 className='ml4 mb5 f-subheadline lh-title black'>Spotify Connect</h1>
                                <div className="row">
                                    <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-12 col-md-offset-0">
                                        <p>Play Spotify on your speaker, sound system, or TV with Spotify Connect. Here's how!</p>
                                        <a className="btn js-ga-event" href="https://player.vimeo.com/video/126925524" data-open="modal" data-vimeo-id="126925524" data-ga-event-category="homepage_video" data-ga-event-action="play_button" data-ga-event-label="Spotify Connect">
                                            <svg width="15" height="15" viewBox="0 0 39 48" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.225V44.72c0 2.57 1.936 3.487 4.302 2.035L37.14 26.61c2.364-1.45 2.364-3.825 0-5.277L4.3 1.19C1.936-.263 0 .653 0 3.224z" fill="#000" fillRule="evenodd"></path></svg>
                                            Watch video
                                        </a>
                                    </div>
                                </div>
                            </div>
                                                    <div className="video-info item active">
                                <h1 className='ml4 mb5 f-subheadline lh-title black'>Spotify on Chromecast</h1>
                                <div className="row">
                                    <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-12 col-md-offset-0">
                                        <p>Spotify on your Chromecast? You heard us right! Here's how to team them up!</p>
                                        <a className="btn js-ga-event" href="https://player.vimeo.com/video/143256102" data-open="modal" data-vimeo-id="143256102" data-ga-event-category="homepage_video" data-ga-event-action="play_button" data-ga-event-label="Spotify on Chromecast">
                                            <svg width="15" height="15" viewBox="0 0 39 48" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.225V44.72c0 2.57 1.936 3.487 4.302 2.035L37.14 26.61c2.364-1.45 2.364-3.825 0-5.277L4.3 1.19C1.936-.263 0 .653 0 3.224z" fill="#000" fillRule="evenodd"></path></svg>
                                            Watch video
                                        </a>
                                    </div>
                                </div>
                            </div>
                                                    <div className="video-info item">
                                <h1 className='ml4 mb5 f-subheadline lh-title black'>Make a Playlist</h1>
                                <div className="row">
                                    <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-12 col-md-offset-0">
                                        <p>Playlists are your personal mixtapes that you can share or collaborate on with friends. Here's how to get started.</p>
                                        <a className="btn js-ga-event" href="https://player.vimeo.com/video/122512074" data-open="modal" data-vimeo-id="122512074" data-ga-event-category="homepage_video" data-ga-event-action="play_button" data-ga-event-label="Make a Playlist">
                                            <svg width="15" height="15" viewBox="0 0 39 48" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.225V44.72c0 2.57 1.936 3.487 4.302 2.035L37.14 26.61c2.364-1.45 2.364-3.825 0-5.277L4.3 1.19C1.936-.263 0 .653 0 3.224z" fill="#000" fillRule="evenodd"></path></svg>
                                            Watch video
                                        </a>
                                    </div>
                                </div>
                            </div>
                                                    <div className="video-info item">
                                <h1 className='ml4 mb5 f-subheadline lh-title black'>Search</h1>
                                <div className="row">
                                    <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-12 col-md-offset-0">
                                        <p>Search is the key to Spotify's vast library of music, whether you're looking for a particular artist, album, or song; or if you want Spotify to find music to match a mood, activity, or time of day.</p>
                                        <a className="btn js-ga-event" href="https://player.vimeo.com/video/122512076" data-open="modal" data-vimeo-id="122512076" data-ga-event-category="homepage_video" data-ga-event-action="play_button" data-ga-event-label="Search">
                                            <svg width="15" height="15" viewBox="0 0 39 48" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.225V44.72c0 2.57 1.936 3.487 4.302 2.035L37.14 26.61c2.364-1.45 2.364-3.825 0-5.277L4.3 1.19C1.936-.263 0 .653 0 3.224z" fill="#000" fillRule="evenodd"></path></svg>
                                            Watch video
                                        </a>
                                    </div>
                                </div>
                            </div>
                                            </div>

                    <div className="row" id="arrows">
                        <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-12 col-md-offset-0">
                            <ol className="carousel-indicators">
                                                                    
                                                            </ol>

                            <a className="left carousel-control" href="#" data-target="#carousel-videos" data-slide="prev">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="20" viewBox="0 0 2016 2016" fill="#000">
                                    <path d="M 1191 183 L 435 939 q-19 18 -25.5 42t0 47.5T435 1071l756 756q28 28 66 28t66 -28t28 -66t-28 -66L636 1008L1323 321q28 -28 28 -66t-28 -66q-16 -31 -63 -31q-10 0 -19 1t-18 4t-17 8t-15 12Z"></path>
                                </svg>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#" data-target="#carousel-videos" data-slide="next" id="right">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="20" viewBox="0 0 2016 2016" fill="#000">
                                    <path d="M693 176q-19 19 -25.5 44.5t0 50.5T693 315l680 693L693 1701q-28 28 -28 69t28 69.5t69 28.5t70 -28l756 -756q14 -14 21 -32.5t7 -37t-7 -37T1588 945L832 189Q813 170 794 160.5T756 151q-38 0 -63 25Z"></path>
                                </svg>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    );
}
export default Sliders;