import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeorebyId } from "../helpers";

export const Hero = () => {

  const { heroId } = useParams();
  const getHero = getHeorebyId( heroId );
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1)
  }

  if( !getHero){
    return <Navigate to="/marvel"/>
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={ `/assets/heroes/${getHero.id}.jpg` } alt={getHero.superhero} 
        className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{ getHero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> {getHero.alter_ego}</li>
          <li className="list-group-item"> <b>Publisher:</b> {getHero.publisher}</li>
          <li className="list-group-item"> <b>First appearance:</b> {getHero.first_appearance}</li>
        </ul>
        <h5 className="mt-3">characters</h5>
        <p>{getHero.characters}</p>

        <button className="btn btn-outline-primary"
        onClick={onNavigateBack}>
          Regrasar
        </button>
      </div>
    </div>
  )
}
