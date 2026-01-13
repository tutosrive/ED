import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import Icons from '../components/Icons'
import GitHubUser from '../components/GitHubUser'
import './License.css'

function License() {
  const { t } = useTranslation()
  const [licenseText, setLicenseText] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchLicense = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/tutosrive/ED/license',
          { headers: { Accept: 'application/vnd.github.v3.raw' } }
        )
        setLicenseText(response.data)
      } catch {
        setError(true)
        setLicenseText('Error loading license. Please visit the GitHub repository.')
      } finally {
        setLoading(false)
      }
    }

    fetchLicense()
  }, [])

  return (
    <>
      <section className="page-header">
        <h1>{Icons.file} {t('license.title')}</h1>
        <p>{t('license.subtitle')}</p>
      </section>

      <section className="content-section">
        <div className="content-card glass-card">
          <h2>{Icons.file} {t('license.summary')}</h2>
          <p>
            {t('license.summaryDesc')}
          </p>
          <ul className="license-list">
            <li><span className="icon-check">{Icons.check}</span> <strong>{t('license.freedomUse')}:</strong> {t('license.freedomUseDesc')}</li>
            <li><span className="icon-check">{Icons.check}</span> <strong>{t('license.freedomStudy')}:</strong> {t('license.freedomStudyDesc')}</li>
            <li><span className="icon-check">{Icons.check}</span> <strong>{t('license.freedomDistribute')}:</strong> {t('license.freedomDistributeDesc')}</li>
            <li><span className="icon-check">{Icons.check}</span> <strong>{t('license.freedomImprove')}:</strong> {t('license.freedomImproveDesc')}</li>
          </ul>
        </div>

        <div className="content-card glass-card">
          <h2>{Icons.warning} {t('license.conditions')}</h2>
          <ul className="license-list">
            <li><span className="icon-warning">{Icons.file}</span> <strong>{t('license.sourceDisclosure')}:</strong> {t('license.sourceDisclosureDesc')}</li>
            <li><span className="icon-warning">{Icons.file}</span> <strong>{t('license.sameLicense')}:</strong> {t('license.sameLicenseDesc')}</li>
            <li><span className="icon-warning">{Icons.file}</span> <strong>{t('license.copyrightNotice')}:</strong> {t('license.copyrightNoticeDesc')}</li>
            <li><span className="icon-warning">{Icons.file}</span> <strong>{t('license.documentChanges')}:</strong> {t('license.documentChangesDesc')}</li>
          </ul>
        </div>

        <div className="content-card glass-card">
          <h2>{Icons.check} {t('license.permissions')}</h2>
          <div className="permissions-grid">
            <div className="permission-item allowed">
              <span className="icon">{Icons.check}</span>
              <span>{t('license.commercialUse')}</span>
            </div>
            <div className="permission-item allowed">
              <span className="icon">{Icons.check}</span>
              <span>{t('license.modification')}</span>
            </div>
            <div className="permission-item allowed">
              <span className="icon">{Icons.check}</span>
              <span>{t('license.distribution')}</span>
            </div>
            <div className="permission-item allowed">
              <span className="icon">{Icons.check}</span>
              <span>{t('license.patentUse')}</span>
            </div>
            <div className="permission-item allowed">
              <span className="icon">{Icons.check}</span>
              <span>{t('license.privateUse')}</span>
            </div>
          </div>
        </div>

        <div className="content-card glass-card">
          <h2>{Icons.x} {t('license.limitations')}</h2>
          <div className="permissions-grid">
            <div className="permission-item denied">
              <span className="icon">{Icons.x}</span>
              <span>{t('license.noWarranty')}</span>
            </div>
            <div className="permission-item denied">
              <span className="icon">{Icons.x}</span>
              <span>{t('license.noLiability')}</span>
            </div>
          </div>
        </div>

        <div className="content-card glass-card">
          <h2>{Icons.file} {t('license.fullText')}</h2>
          <p>
            {t('license.fullTextDesc')}
          </p>
          {loading ? (
            <div className="license-loading">{t('license.loading')}</div>
          ) : error ? (
            <div className="license-error">{t('license.error')}</div>
          ) : (
            <pre className="license-text">{licenseText}</pre>
          )}
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <a 
              href="https://www.gnu.org/licenses/gpl-3.0.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              {Icons.external} {t('license.viewOnGnu')}
            </a>
          </div>
        </div>

        <div className="content-card glass-card">
          <h2>{Icons.github} {t('license.creditsAttribution')}</h2>
          <p>
            {t('license.creditsDesc')}
          </p>
          <div className="credits-grid">
            <GitHubUser 
              username="tutosrive" 
              role={t('about.student')}
              roleDescription="Ingeniería de Sistemas y Computación"
            />
            <GitHubUser 
              username="jotarlo" 
              role={t('about.professor')}
              roleDescription="Universidad de Caldas"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default License
