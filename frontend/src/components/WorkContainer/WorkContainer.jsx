import { useParams } from 'react-router-dom'
import Work from '../../pages/Work/Work'

function WorkContainer() {
  /* On récupère l'id dans l'RL pour la donner en props à la page Lodging  */
  const { id } = useParams()
  return <Work id={id} />
}
export default WorkContainer