import { useEffect, useRef, useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import Icons from '../components/Icons'
import './Videos.css'
import playlistVideos from '../assets/json/playlist_videos.json'

const PLAYLIST_ID = 'PLbrkyIFCPjn3VIY0ohs3JkQgH2IYMDab8'

function Videos() {
  const { t } = useTranslation()
  const playerRef = useRef(null)
  const iframeRef = useRef(null)
  const [currentVideo, setCurrentVideo] = useState(null)
  const [expandedSections, setExpandedSections] = useState({})
  const [iframeSrc, setIframeSrc] = useState('')

  // Define sections with ranges
  const sections = [
    { title: t('videos.sections.proyecto2'), start: 0, end: 15, author: 'Inge. SRM' },
    { title: t('videos.sections.proyecto1'), start: 16, end: 59, author: 'Inge. SRM' },
    { title: t('videos.sections.bst'), start: 60, end: 64, author: 'Jefferson Arango López' },
    { title: t('videos.sections.avl'), start: 65, end: 74, author: 'Jefferson Arango López' },
    { title: t('videos.sections.grafos'), start: 75, end: 77, author: 'Jefferson Arango López' },
    { title: t('videos.sections.curso2021'), start: 78, end: 102, author: 'Jefferson Arango López' },
    { title: t('videos.sections.otros'), start: 103, end: 106, author: 'Inge. SRM' }
  ]

  // Assign videos to sections
  const sectionsWithVideos = sections.map(sec => ({
    ...sec,
    videos: playlistVideos.slice(sec.start, sec.end + 1)
  }))

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const playVideo = (video) => {
    // ensure we store a consistent shape for the player
    const thumbnail = (video.thumbnails && (video.thumbnails.high?.url || video.thumbnails.medium?.url || video.thumbnails.default?.url)) || `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`
    setCurrentVideo({ videoId: video.videoId, title: video.title, thumbnail })
    // set iframe src on user gesture; browser should allow playback from click
    const src = `https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1`
    setIframeSrc(src)
    // scroll player into view for better UX
    setTimeout(() => { playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }) }, 80)
  }

  const clearPlayer = () => {
    setCurrentVideo(null)
    setIframeSrc('')
  }

  return (
    <section className="page-header">
      {/* header removed per user request */}

      <div className="videos-layout">
        <div className="videos-player" ref={playerRef}>
          {currentVideo ? (
            <div className="player-card">
              <div className="player-header">
                <div className="player-title">{currentVideo.title}</div>
                <div className="player-actions">
                  <button className="btn small" onClick={clearPlayer}>Cerrar</button>
                </div>
              </div>

              <div className="iframe-wrap">
                <iframe
                  ref={iframeRef}
                  title={currentVideo.title}
                  src={iframeSrc}
                  width="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : (
            <div className="video-placeholder">
              <p>{t('videos.selectVideo')}</p>
            </div>
          )}
        </div>

        <aside className="videos-sidebar">
          <div className="videos-card">
            <h3>{t('videos.playlist')}</h3>
            <p>{t('videos.playlistDesc')}</p>
            <a className="btn btn-primary" href={`https://youtube.com/playlist?list=${PLAYLIST_ID}`} target="_blank" rel="noopener noreferrer">{t('videos.openOnYoutube')}</a>
          </div>

          <div className="videos-card">
            <h4>{t('videos.sections.title')}</h4>
            {sectionsWithVideos.map((sec, idx) => (
              <div key={idx} className="video-section">
                <button className="section-toggle" onClick={() => toggleSection(idx)}>
                  <h5>{sec.title} <small className="section-author">— {sec.author}</small></h5>
                  <span>{expandedSections[idx] ? '▼' : '▶'}</span>
                </button>
                {expandedSections[idx] && (
                  <ul className="section-videos">
                    {sec.videos.map((video, vidx) => (
                      <li key={vidx} className="video-item" onClick={() => playVideo(video)}>
                        <div className="thumb-wrap">
                          <img src={video.thumbnails?.medium?.url || video.thumbnails?.default?.url || ''} alt={video.title} className="video-thumbnail" />
                          <span className="play-overlay">▶</span>
                        </div>
                        <div className="video-info">
                          <div className="video-title">{video.title}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Videos
