import './styles/site-logo-with-text.scss'
import logoImg from '../../assets/images/logo.svg'
import projectPackageJson from '../../../package.json'

export interface ISiteLogoWithTextProps {
  title?: string
}

function SiteLogoWithText({title = projectPackageJson.name}: ISiteLogoWithTextProps) {
  return (
    <div className='site-logo-with-text'>
      <img
        src={logoImg}
        alt={`${title} Logo`}
      />
      <span>{title}</span>
    </div>
  )
}

export default SiteLogoWithText
